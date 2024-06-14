import FavoriteButtonInitiator from '../../src/scripts/utils/favorite-button-presenter';
import FavoriteRestaurants from '../../src/scripts/data/favoriterestaurant-idb';

const createFavoriteButtonPresenterWithRestaurant = async (restaurant) => {
  await FavoriteButtonInitiator.init({
    favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
    favoriteRestaurants: FavoriteRestaurants,
    restaurant,
  });
};

export { createFavoriteButtonPresenterWithRestaurant };
