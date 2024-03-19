import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import HeartIcon from '@assets/svg/HeartIcon';
import FilledHeartIcon from '@assets/svg/FilledHeartIcon';
import FavButton from '@components/FavButton';

export interface IProductCard {
  onPress: () => void;
  item: {
    name: string;
    price: number;
    image: any;
    isFavorite: boolean;
  };
}

function ProductCard({ item, onPress }: IProductCard) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.favContainer}>
        <FavButton
          selected={item.isFavorite}
          onPress={() => console.log('clicked')}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          {item.image && (
            <Image
              style={styles.image}
              source={{
                uri: item.image,
              }}
            />
          )}
        </View>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default ProductCard;
