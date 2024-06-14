class RestaurantItem extends HTMLElement {
  connectedCallback() {
    this.name = this.getAttribute('name');
    this.description = this.getAttribute('description');
    this.pictureId = this.getAttribute('pictureId');
    this.city = this.getAttribute('city');
    this.rating = this.getAttribute('rating');
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="restaurant-item">
          <img src="${this.pictureId}" alt="${this.name}" class="restaurant-image" />
          <div class="restaurant-info">
            <h2>${this.name}</h2>
            <p>${this.description}</p>
            <p>City: ${this.city}</p>
            <p class="rating">Rating: ${this.rating}</p>
          </div>
        </div>
      `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
