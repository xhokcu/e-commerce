import FilledHeartIcon from '@assets/svg/FilledHeartIcon';
import HeartIcon from '@assets/svg/HeartIcon';
import { TouchableOpacity, View } from 'react-native';
import styles from './styles';

export interface IFavButtonProps {
  onPress: () => void;
  selected?: boolean;
}

function FavButton({ onPress, selected }: IFavButtonProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.iconContainer}>
        {selected ? <FilledHeartIcon /> : <HeartIcon />}
      </View>
    </TouchableOpacity>
  );
}

export default FavButton;
