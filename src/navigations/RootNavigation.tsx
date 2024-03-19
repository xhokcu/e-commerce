import { NavigationContainer } from '@react-navigation/native';
import AuthStack from '@navigations/stackNavigator/AuthStack';
import BottomTabBar from '@navigations/tabNavigator/BottomTabBar';
import { View, Text } from 'react-native';

function RootNavigation() {
  const isAuth = true;

  if (!isAuth) {
    return <AuthStack />;
  }

  return <BottomTabBar />;
}

export default RootNavigation;
