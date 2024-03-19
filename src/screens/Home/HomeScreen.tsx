import { Text, View, FlatList } from 'react-native';
import styles from './styles';
import Button from '@components/Button/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProductCard from '@components/ProductCard';
import { categoryList } from '@common/dummy/ProductDummy';
import { fetchData } from '@services/fetchAPI';
import { useEffect, useState } from 'react';
import { IProduct } from '@types/IProduct';

export interface ICategoryItem {
  categoryName: string;
  products: IProduct[];
}

function HomeScreen({ navigate }) {
  const [data, setData] = useState<IProduct[]>([]);
  const [productDetailData, setProductDetailData] = useState();
  const [selectedProductId, setSelectedProductId] = useState('');

  useEffect(() => {
    fetchData('http://localhost:3000/products').then(data => setData(data));
  }, []);

  useEffect(() => {
    fetchData(`http://localhost:3000/products/${selectedProductId}`).then(
      data => setProductDetailData(data),
    );
  }, [selectedProductId]);

  const categoriesArray: ICategoryItem[] = [];

  if (data) {
    data.forEach((item: IProduct) => {
      const categoryIndex = categoriesArray.findIndex(
        categoryItem => categoryItem.categoryName === item.category,
      );
      if (categoryIndex !== -1) {
        categoriesArray[categoryIndex].products.push(item);
      } else {
        const categoryItem: ICategoryItem = {
          categoryName: item.category as string,
          products: [item],
        };
        categoriesArray.push(categoryItem);
      }
    });
  }

  console.log(JSON.stringify(categoriesArray, null, 2));

  const handleOrderNavigate = (productId: string) => {
    setSelectedProductId(productId);
    // navigate('ProductDetail', { productDetailData });
  };

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{ gap: 24 }}
        data={categoriesArray}
        renderItem={({ item }: { item: ICategoryItem }) => (
          <View style={styles.category}>
            <Text style={styles.header}>{item.categoryName}</Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.cardContainer}
              data={item.products}
              horizontal
              renderItem={({ item: product }: { item: IProduct }) => (
                <ProductCard
                  onPress={() => handleOrderNavigate(product.id)}
                  item={product}
                />
              )}
            />
          </View>
        )}
      />
    </View>
  );
}

export default HomeScreen;
