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
  itemContainer: {
    // backgroundColor: 'blue',
    flexDirection: flexDirection.row,
    justifyContent: justifyContent.flexStart,
    alignItems: alignItems.center,
    padding: spacing[3],
    borderBottomWidth: borderWidth[1],
    borderBottomColor: color.primary.gray[50],
    gap: spacing[2],
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: borderRadius[5],
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    flexDirection: flexDirection.column,
    justifyContent: justifyContent.spaceBetween,
    alignItems: alignItems.flexStart,
    gap: spacing[2],
  },
  button: {
    height: 32,
    width: '100%',
    borderColor: color.primary.green[50],
    borderWidth: 1,
    borderRadius: borderRadius[2],
  },
  redButton: {
    height: 32,
    width: '100%',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: borderRadius[2],
  },
  boldText: {
    fontFamily: fontFamily.bold,
  },
  regularText: {
    fontFamily: fontFamily.regular,
    color: color.primary.gray[70],
  },
  coloredText: {
    fontFamily: fontFamily.bold,
    color: color.primary.green[50],
  },
  redText: {
    color: 'red',
  },
});

export default styles;
