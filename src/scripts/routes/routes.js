import Popular from '../views/pages/popular';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';

const routes = {
  '/': Popular, // default page
  '/popular': Popular,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
