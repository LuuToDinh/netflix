import config from '~/config';
import Home from '~/pages/Home';
import TVShow from '~/pages/TVShow';

// Routes để chứa các page - content(component động)
const publicRoutes = [
    { path: config.routes.Home, component: Home },
    { path: config.routes.TVShow, component: TVShow },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
