import CONFIG from './config';

const RESTAURANT_API = {
  POPULAR: `${CONFIG.BASE_URL}/list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  REVIEW: `${CONFIG.BASE_URL}/review`,
};

export default RESTAURANT_API;
