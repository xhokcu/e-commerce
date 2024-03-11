import { TouchableOpacity, View, Text } from 'react-native';
import { IButtonProps } from '@types/IButtonProps';
import styles from './styles';

function Button({
  title,
  onPress,
  textStyle,
  disabled,
  buttonStyle,
  iconLeft,
  iconRight,
  textButton = false,
}: IButtonProps) {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        textButton ? styles.textButton : styles.filledButton,
        buttonStyle,
      ]}
      onPress={onPress}
    >
      <View style={styles.container}>
        {iconLeft}
        <Text
          style={[
            textButton ? styles.textButtonText : styles.filledButtonText,
            textStyle,
          ]}
        >
          {title}
        </Text>
        {iconRight}
      </View>
    </TouchableOpacity>
  );
}
export default Button;
