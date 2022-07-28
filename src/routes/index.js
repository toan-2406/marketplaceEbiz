import config from '../config';

// Layouts
import HeaderOnlyLayout from '../components/layout/HeaderOnlyLayout'; 

// Pages
import  Home  from '../pages/Home';
import  ExploreCollection  from '../pages/ExploreCollection';
import  Create  from '../pages/Create';
import Rankings from '../pages/Rankings';

// Public routes
export const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.explore, component: ExploreCollection },
    { path: config.routes.create, component: Create, layout: HeaderOnlyLayout },
    { path: config.routes.ranking, component: Rankings, layout: HeaderOnlyLayout },
];

export const privateRoutes = [];
