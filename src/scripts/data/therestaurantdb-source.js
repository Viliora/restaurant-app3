import RESTAURANT_API from '../globals/restaurant-api';

class TheRestaurantDbSource {
  static async popularRestaurant() {
    try {
      const response = await fetch(RESTAURANT_API.POPULAR);
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (error) {
      console.error('Failed to fetch popular restaurants:', error);
      return []; // Return empty array or handle error as needed
    }
  }

  static async detailRestaurant(id) {
    try {
      const response = await fetch(RESTAURANT_API.DETAIL(id));
      const responseJson = await response.json();
      return responseJson.restaurant;
    } catch (error) {
      console.error('Failed to fetch restaurant details:', error);
      return null; // Return null or handle error as needed
    }
  }

  static async addNewReview(review) {
    try {
      const response = await fetch(RESTAURANT_API.REVIEW, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: review.id,
          name: review.name,
          review: review.review,
        }),
      });
      const responseJSON = await response.json();
      if (!responseJSON.error) return responseJSON.message;
      return responseJSON.message;
    } catch (error) {
      console.error('Failed to add new review:', error);
      return 'Failed to add review'; // Return error message or handle error as needed
    }
  }
}

export default TheRestaurantDbSource;
