import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import styles from './styles';
import ListItem from '@components/ListItem';

const profileRoutes = [
  { name: 'Account' },
  { name: 'Help' },
  { name: 'About' },
  { name: 'Logout' },
  { name: 'Notifications' },
];

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={profileRoutes}
        renderItem={({ item }) => <ListItem item={item} />}
      />
    </View>
  );
}

export default ProfileScreen;
