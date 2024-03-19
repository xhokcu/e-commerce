import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import { favorites } from '@common/dummy/ProductDummy';
import Button from '@components/Button';
import { useEffect, useState } from 'react';
import { fetchData } from '@services/fetchAPI';
import { IProduct } from '@types/IProduct';

function FavoriteScreen() {
  const [favoriteData, setFavoriteData] = useState();

  useEffect(() => {
    fetchData(`http://localhost:3000/products`).then(data =>
      setFavoriteData(data.filter((item: IProduct) => item.isFavorite)),
    );
  }, []);

  const handleDeleteItem = (itemId: string) => {
    const filteredData = favoriteData.filter(
      (item: IProduct) => item.id !== itemId,
    );
    setFavoriteData(filteredData);
    // item in id'sini degistirerek post atman lazim. productdetails apisine update atman lazim
  };

  return (
    <View style={styles.container}>
      <Text>SEARCH</Text>
      <FlatList
        data={favoriteData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View style={styles.itemContainer}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.content}>
                <Text style={styles.boldText}>Apple</Text>
                <Text style={styles.regularText}>{item.name}</Text>
                <Text style={styles.coloredText}>{item.price} TL</Text>
                <Button
                  textButton
                  title="Add to cart"
                  buttonStyle={styles.button}
                  onPress={() => console.log('added')}
                />
                <Button
                  textButton
                  title="Delete"
                  buttonStyle={styles.redButton}
                  onPress={() => handleDeleteItem(item.id)}
                  textStyle={styles.redText}
                />
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default FavoriteScreen;
