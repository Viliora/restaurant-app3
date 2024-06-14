import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
<div class="restaurant-detail" id="restaurant-detail">
    <h1 class="restaurant__name">${restaurant.name}</h1>
    <img class="restaurant-detail__poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" crossorigin="anonymous" />
    <div class="restaurant-detail__info">
        <h2>Information</h2>
        <div>
            <h3>City</h3>
            <p>${restaurant.city}</p>
        </div>
        <div>
            <h3>Address</h3>
            <p>${restaurant.address}</p>
        </div>
        <div>
            <h3>Rating</h3>
            <p>${restaurant.rating}</p>
        </div>
        <div class="overview__restaurant">
            <h2>Overview</h2>
            <p>${restaurant.description}</p>
        </div>
        <div>
            <h4>Categories</h4>
            ${restaurant.categories.map((category) => `<p>${category.name}</p>`).join('')}
        </div>
        <div>
            <h4>Foods</h4>
            ${restaurant.menus.foods.map((food) => `<p>${food.name}</p>`).join('')}
        </div>
        <div>
            <h4>Drinks</h4>
            ${restaurant.menus.drinks.map((drink) => `<p>${drink.name}</p>`).join('')}
        </div>
        <div class="review-container">
            <h4>Customer Reviews</h4>
            <div class="customer-reviews" id="customer-reviews">
            ${restaurant.customerReviews.map((review) => `
                <p>${review.name}: ${review.review} (${review.date})</p>`).join('')}
            </div
        </div>
    </div>
</div>

`;

const createRestaurantItemTemplate = (restaurant) => `
    <div class="restaurant-item" id="restaurant-item">
        <img class="restaurant-item__thumbnail lazyload" data-src="https://restaurant-api.dicoding.dev/images/small/${restaurant.pictureId}" alt="${restaurant.name || '-'}" source media="(max-width: 600px)" crossorigin="anonymous">
        <div class="restaurant-item__content">
            <p class="restaurant-item__city">City: ${restaurant.city}</p>
            <p>⭐️<span class="restaurant-item__rating">Rating: ${restaurant.rating || '-'}</p>
        </div>
        <div class="restaurant-item__content">
        <h3 class="restaurant__name"><a href="/#/detail/${restaurant.id}">${restaurant.name || '-'}</a></h3>
      <p>${restaurant.description || '-'}</p>
    </div>
  </div>
    </div>
`;

const createFavoriteRestaurantButtonTemplate = () => `
    <button aria-label="favorite this restaurant" id="favoriteButton" class="favorite__button">
        <i class="far fa-heart" aria-hidden="true"></i>
    </button>
`;

const createUnfavoriteRestaurantButtonTemplate = () => `
    <button aria-label="unfavorite this restaurant" id="favoriteButton" class="favorite__button">
        <i class="fas fa-heart" aria-hidden="true"></i>
    </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createFavoriteRestaurantButtonTemplate,
  createUnfavoriteRestaurantButtonTemplate,
};
