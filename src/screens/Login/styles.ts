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
    justifyContent: justifyContent.center,
    paddingHorizontal: spacing[5],
  },
  imageContainer: {
    alignItems: alignItems.center,
  },
  content: {
    paddingVertical: spacing[5],
    gap: spacing[4],
  },
  header: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.h3,
    color: color.primary.green[70],
  },
  bodyText: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.h9,
    color: color.primary.gray[70],
  },
  signupContainer: {
    flexDirection: flexDirection.row,
    alignItems: alignItems.center,
    justifyContent: justifyContent.center,
    gap: spacing[2],
  },
  secondaryButton: {
    backgroundColor: color.primary.gray[10],
    borderWidth: borderWidth[1],
    borderColor: color.primary.green[50],
  },
  secondaryButtonText: {
    color: color.primary.green[50],
  },
  textButton: {
    backgroundColor: 'white',
  },
  textButtonText: {
    color: color.primary.green[50],
  },
  input: {
    width: '100%',
    height: 40,
    paddingHorizontal: spacing[2],
    borderColor: color.primary.gray[70],
    borderWidth: borderWidth[1],
    borderRadius: borderRadius[2],
  },
});

export default styles;
