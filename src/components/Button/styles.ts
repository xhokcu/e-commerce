import { StyleSheet } from 'react-native';
import { theme } from '@theme/theme';

const {
  flexDirection,
  fontFamily,
  color,
  borderRadius,
  spacing,
  alignItems,
  justifyContent,
} = theme.components;

const styles = StyleSheet.create({
  filledButton: {
    backgroundColor: color.primary.green[50],
    borderRadius: borderRadius[2],
    paddingHorizontal: spacing[4],
    alignItems: alignItems.center,
    justifyContent: justifyContent.center,
    height: 40,
  },
  textButton: {
    paddingHorizontal: spacing[4],
    alignItems: alignItems.center,
    justifyContent: justifyContent.center,
    height: 40,
  },
  textButtonText: {
    fontFamily: fontFamily.regular,
    color: color.primary.green[50],
  },
  filledButtonText: {
    color: color.primary.gray[10],
  },
  container: {
    flexDirection: flexDirection.row,
    gap: spacing[2],
    alignItems: alignItems.center,
    justifyContent: justifyContent.center,
  },
});

export default styles;
