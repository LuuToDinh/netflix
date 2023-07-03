import config from '~/config';
import * as Pages from '~/pages';

// Routes để chứa các page - content(component động)
const publicRoutes = [
    { path: config.routes.Home, component: Pages.Home },
    { path: config.routes.TVShow, component: Pages.Home },
    { path: config.routes.Movies, component: Pages.Home },
    { path: config.routes.RecentlyAdd, component: Pages.Home },
    { path: config.routes.Mylist, component: Pages.Home },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
