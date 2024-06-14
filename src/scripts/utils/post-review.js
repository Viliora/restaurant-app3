import TheRestaurantDbSource from '../data/therestaurantdb-source';
import UrlParser from '../routes/url-parser';

const PostReview = async () => {
  const url = UrlParser.parseActiveUrlWithoutCombiner();
  const inputReviewName = document.getElementById('review-name');
  const inputReview = document.getElementById('review-text');
  const reviewContainer = document.querySelector('#customer-reviews');

  const dataInput = {
    id: url.id,
    name: inputReviewName.value,
    review: inputReview.value,
  };

  const date = new Date().toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const encodeHTML = (str) => str.replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const newReview = `
    <div class="review">
        <p><strong>${encodeHTML(dataInput.name)}</strong></p>
        <p>${encodeHTML(dataInput.review)}</p>
        <p><em>${date}</em></p>
    </div>
  `;

  await TheRestaurantDbSource.addNewReview(dataInput);

  reviewContainer.innerHTML += newReview;

  inputReviewName.value = '';
  inputReview.value = '';
};

export default PostReview;
