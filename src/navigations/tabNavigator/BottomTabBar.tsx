import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarRoutes from '@routes/tabBarRoutes';

function BottomTabBar() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      {TabBarRoutes.map(route => (
        <Tab.Screen
          name={route.name}
          component={route.component}
          options={{
            tabBarIcon: () => route.icon,
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

export default BottomTabBar;
