import { NavigationContainer } from '@react-navigation/native';
import AuthStack from '@navigations/stackNavigator/AuthStack';
import BottomTabBar from '@navigations/tabNavigator/BottomTabBar';
import { View, Text } from 'react-native';

function RootNavigation() {
  const isAuth = true;

  if (!isAuth) {
    return <AuthStack />;
  }

  return (
    <>
      <View
        style={{
          height: 80,
          borderBottomColor: 'grey',
          borderBottomWidth: 0.2,
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingVertical: 6,
          backgroundColor: '#E6F6F4',
        }}
      >
        {/* <Text> Welcome to our app!</Text> */}
      </View>
      <BottomTabBar />
    </>
  );
}

export default RootNavigation;
