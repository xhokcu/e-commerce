import { StyleSheet } from 'react-native';
import { theme } from '@theme/theme';

const {
  alignItems,
  color,
  justifyContent,
  flexDirection,
  fontFamily,
  flex,
  fontSize,
  spacing,
  borderWidth,
  borderRadius,
} = theme.components;

const styles = StyleSheet.create({
  container: {
    flex: flex[1],
    backgroundColor: 'white',
  },
});

export default styles;
