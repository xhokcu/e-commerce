import { theme } from '@common/theme/theme';
import { StyleSheet } from 'react-native';

const { color, borderRadius, fontFamily, alignItems, justifyContent, spacing } =
  theme.components;

const styles = StyleSheet.create({
  iconContainer: {
    borderRadius: borderRadius[4],
    padding: spacing[1],
    shadowColor: color.primary.gray[100],
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.4,
    backgroundColor: 'white',
  },
});

export default styles;
