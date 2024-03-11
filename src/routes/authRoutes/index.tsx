import { RouteNames } from '@common/constants/routeNames';
import LoginScreen from '@screens/Login/LoginScreen';
import SignupScreen from '@screens/Signup/SignupScreen';

const AuthStackRoutes = [
  { name: RouteNames.login, component: LoginScreen },
  { name: RouteNames.signup, component: SignupScreen },
];

export default AuthStackRoutes;
