import { StyleSheet, Text, View, TextInput } from 'react-native';
import styles from './styles';

function FavoriteScreen() {
  return (
    <View style={styles.container}>
      <Text>Please fill the form.</Text>
      <View style={styles.input}>
        <TextInput editable />
      </View>
      <View style={styles.input}>
        <TextInput editable />
      </View>
    </View>
  );
}

export default FavoriteScreen;
