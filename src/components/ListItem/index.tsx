import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export interface ListItemProps {
  item: {
    name: string;
  };
}

function ListItem({ item }: ListItemProps) {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.text}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default ListItem;
