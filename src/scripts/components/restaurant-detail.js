class RestaurantDetail extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div id="restaurant" class="restaurant"></div>
            <div class="restaurant-detail">
                <div class="review-form-container">
                    <h4 class="review-header">Review Time</h4>
                    <form id="review-form">
                        <label for="review-name">Name:</label>
                        <input type="text" id="review-name" name="review-name" required>
                        <label for="review-text">Review:</label>
                        <textarea id="review-text" name="review-text" required></textarea>
                        <button type="submit" id="submit">Submit Review</button>
                    </form>
                </div>
            </div>
            <div id="favoriteButtonContainer"></div>
        `;
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
