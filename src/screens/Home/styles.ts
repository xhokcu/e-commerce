import { theme } from '@common/theme/theme';
import { StyleSheet } from 'react-native';

const { spacing, fontFamily, fontSize } = theme.components;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: spacing[4],
  },
  header: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.h6,
  },
  category: {
    flex: 1,
    gap: spacing[2],
  },
  cardContainer: {
    gap: spacing[4],
    paddingVertical: spacing[3],
  },
});

export default styles;
