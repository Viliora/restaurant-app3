/* eslint-disable no-undef */
/* eslint-disable max-len */
import FavoriteRestaurants from '../../data/favoriterestaurant-idb';
import FavoriteRestaurantSearchView from './favorited-restaurants/favorite-restaurant-search-view';
import FavoriteRestaurantShowPresenter from './favorited-restaurants/favorite-restaurant-show-presenter';
import FavoriteRestaurantSearchPresenter from './favorited-restaurants/favorite-restaurant-search-presenter';

const view = new FavoriteRestaurantSearchView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestaurants });
    new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurants: FavoriteRestaurants });
  },
  //   const restaurants = await FavoriteRestaurants.getAllRestaurants();
  //   const restaurantContainer = document.querySelector('#restaurants');

  //   if (restaurants.length === 0) {
  //     restaurantContainer.innerHTML = '<p class="restaurant-item__not__found">Tidak ada restaurant untuk ditampilkan</p>';
  //   } else {
  //     restaurants.forEach((restaurant) => {
  //       restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
  //     });
  //   }

  //   setTimeout(() => {
  //     const skeletonElements = restaurantContainer.querySelectorAll('.skeleton');
  //     skeletonElements.forEach((element) => {
  //       element.classList.remove('skeleton');
  //     });
  //   }, 500);
  // },
};

export default Favorite;
