import { RouteNames } from '@common/constants/routeNames';
import HomeScreen from '@screens/Home/HomeScreen';
import FavoriteScreen from '@screens/Favorite/FavoriteScreen';
import CartScreen from '@screens/Cart/CartScreen';
import ProfileScreen from '@screens/Profile/ProfileScreen';
import HomeIcon from '@assets/svg/HomeIcon';
import FavoriteIcon from '@assets/svg/FavoriteIcon';
import CartIcon from '@assets/svg/CartIcon';
import ProfileIcon from '@assets/svg/ProfileIcon';

const TabBarRoutes = [
  {
    name: RouteNames.home,
    component: HomeScreen,
    icon: <HomeIcon />,
  },
  {
    name: RouteNames.favorites,
    component: FavoriteScreen,
    icon: <FavoriteIcon />,
  },
  {
    name: RouteNames.cart,
    component: CartScreen,
    icon: <CartIcon />,
  },
  {
    name: RouteNames.profile,
    component: ProfileScreen,
    icon: <ProfileIcon />,
  },
];

export default TabBarRoutes;
