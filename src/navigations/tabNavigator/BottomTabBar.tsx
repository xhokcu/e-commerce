import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarRoutes from '@routes/tabBarRoutes';
import { theme } from '@theme/theme';
import { View } from 'react-native';

const { color } = theme.components;

function BottomTabBar() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      {TabBarRoutes.map(route => (
        <Tab.Screen
          name={route.name}
          component={route.component}
          options={{
            tabBarActiveTintColor: color.primary.green[50],
            tabBarIcon: ({ focused }) => <View>{route.icon({ focused })}</View>,
            headerStyle: {
              backgroundColor: color.primary.gray[20],
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

export default BottomTabBar;
