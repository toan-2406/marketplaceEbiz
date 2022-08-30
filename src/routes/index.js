import config from '../config';

// Layouts
import HeaderOnlyLayout from '../components/layout/HeaderOnlyLayout'; 

// Pages
import  Home  from '../pages/Home';
import  ExploreCollection  from '../pages/ExploreCollection';
import  Create  from '../pages/Create';
import Rankings from '../pages/Rankings';
import ProfileDetail from '../pages/ProfileDetail';
import ListItemDetail from '../pages/ListItemDetail';
import DetailCollection from '../pages/DetailCollection';
import Search from '../pages/Search';
import ItemDetail from '../pages/ItemDetail';
import ConnectWallet from '../pages/ConnectWallet';
import Profile from '../pages/Profile';
import Collections from '../pages/Collections';
import CreateCollection from '../pages/CreateCollection';

// Public routes
export const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.explore, component: ExploreCollection },
    { path: config.routes.create, component: Create, layout: HeaderOnlyLayout },
    { path: config.routes.ranking, component: Rankings, layout: HeaderOnlyLayout },
    { path: config.routes.profileDetail, component: ProfileDetail, layout: HeaderOnlyLayout }, 
    { path: config.routes.listItemDetail, component: ListItemDetail, layout: HeaderOnlyLayout },
    { path: config.routes.detailCollection, component: DetailCollection },
    { path: config.routes.search, component: Search, layout: HeaderOnlyLayout  },
    { path: config.routes.itemDetail, component: ItemDetail  },
    { path: config.routes.connectWallet, component: ConnectWallet },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.myCollection, component: Collections },
    { path: config.routes.createCollection, component: CreateCollection },
];

export const privateRoutes = [];
