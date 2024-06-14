/* eslint-disable no-shadow */
import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Popular = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Popular Restaurants</h2>
        <div id="restaurants" class="restaurants"></div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await TheRestaurantDbSource.popularRestaurant();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
    // setTimeout(() => {
    //   const skeletonElements = restaurantsContainer.querySelectorAll('.skeleton');
    //   skeletonElements.forEach((element) => {
    //     element.classList.remove('skeleton');
    //   });
    // }, 500);
  },
};

export default Popular;
