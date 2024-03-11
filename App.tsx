import { StyleSheet } from 'react-native';
import RootNavigation from '@navigations/RootNavigation';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Arimo-Regular': require('./assets/fonts/Arimo-Regular.ttf'),
    'Arimo-Italic': require('./assets/fonts/Arimo-Italic.ttf'),
    'Arimo-Medium': require('./assets/fonts/Arimo-Medium.ttf'),
    'Arimo-MediumItalic': require('./assets/fonts/Arimo-MediumItalic.ttf'),
    'Arimo-SemiBold': require('./assets/fonts/Arimo-SemiBold.ttf'),
    'Arimo-SemiBoldItalic': require('./assets/fonts/Arimo-SemiBoldItalic.ttf'),
    'Arimo-Bold': require('./assets/fonts/Arimo-Bold.ttf'),
    'Arimo-BoldItalic': require('./assets/fonts/Arimo-BoldItalic.ttf'),
  });

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const login = await AsyncStorage.getItem('isLogin');
  //       setIsLogin(!!login);
  //     } catch (error) {
  //       console.log('error', error);
  //     }
  //   }
  //   fetchData();
  // }, []);

  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}
