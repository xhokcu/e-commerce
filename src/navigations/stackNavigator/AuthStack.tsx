import { RouteNames } from '@common/constants/routeNames';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStackRoutes from '@routes/authRoutes';

function AuthStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={RouteNames.login}
    >
      {AuthStackRoutes.map(route => (
        <Stack.Screen name={route.name} component={route.component} />
      ))}
    </Stack.Navigator>
  );
}

export default AuthStack;
