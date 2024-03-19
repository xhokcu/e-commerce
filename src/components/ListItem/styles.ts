import { theme } from '@common/theme/theme';
import { StyleSheet } from 'react-native';

const {
  color,
  borderRadius,
  fontFamily,
  alignItems,
  justifyContent,
  spacing,
  fontSize,
} = theme.components;

const styles = StyleSheet.create({
  container: {
    padding: spacing[4],
    borderBottomColor: color.primary.gray[30],
    borderBottomWidth: 1,
  },
  text: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.h8,
    color: color.primary.gray[100],
  },
});

export default styles;
