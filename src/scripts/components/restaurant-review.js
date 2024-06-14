class RestaurantReview extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <h2>Restaurant's review</h2>
    <div id="restaurant-review"></div>
    `;
  }
}

customElements.define('restaurant-review', RestaurantReview);
