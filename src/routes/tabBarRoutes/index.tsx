import { RouteNames } from '@common/constants/routeNames';
import HomeScreen from '@screens/Home/HomeScreen';
import FavoriteScreen from '@screens/Favorite/FavoriteScreen';
import CartScreen from '@screens/Cart/CartScreen';
import ProfileScreen from '@screens/Profile/ProfileScreen';
import HomeIcon from '@assets/svg/HomeIcon';
import FavoriteIcon from '@assets/svg/FavoriteIcon';
import CartIcon from '@assets/svg/CartIcon';
import ProfileIcon from '@assets/svg/ProfileIcon';
import { theme } from '@theme/theme';

const { color } = theme.components;

const activeColor = color.primary.green[50];
const inactiveColor = color.primary.gray[50];

const TabBarRoutes = [
  {
    name: RouteNames.home,
    component: HomeScreen,
    icon: ({ focused }: { focused: boolean }) => (
      <HomeIcon filled={focused ? activeColor : inactiveColor} />
    ),
  },
  {
    name: RouteNames.favorites,
    component: FavoriteScreen,
    icon: ({ focused }: { focused: boolean }) => (
      <FavoriteIcon filled={focused ? activeColor : inactiveColor} />
    ),
  },
  {
    name: RouteNames.cart,
    component: CartScreen,
    icon: ({ focused }: { focused: boolean }) => (
      <CartIcon filled={focused ? activeColor : inactiveColor} />
    ),
  },
  {
    name: RouteNames.profile,
    component: ProfileScreen,
    icon: ({ focused }: { focused: boolean }) => (
      <ProfileIcon filled={focused ? activeColor : inactiveColor} />
    ),
  },
];

export default TabBarRoutes;
