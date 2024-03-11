import { Text, View } from 'react-native';
import styles from './styles';
import Button from '@components/Button/index';
import AsyncStorage from '@react-native-async-storage/async-storage';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Welcome on board!</Text>
      <Button
        title="Logout"
        onPress={() => AsyncStorage.removeItem('isLogin')}
      />
    </View>
  );
}

export default HomeScreen;
