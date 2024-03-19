import { theme } from '@common/theme/theme';
import { StyleSheet } from 'react-native';

const { color, borderRadius, fontFamily, alignItems, justifyContent, spacing } =
  theme.components;

const styles = StyleSheet.create({
  container: {
    width: 140,
    height: 200,
    borderRadius: borderRadius[2],
    backgroundColor: 'white',
    alignItems: alignItems.flexStart,
    justifyContent: justifyContent.spaceBetween,
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[4],
    gap: spacing[3],
    shadowColor: color.primary.gray[50],
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 14,
    paddingTop: 24,
  },
  imageContainer: {
    height: 100,
    width: 120,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    borderRadius: 12,
  },
  nameText: {
    fontFamily: fontFamily.semiBold,
    flexWrap: 'wrap',
  },
  favContainer: {
    alignItems: alignItems.flexEnd,
    position: 'absolute',
    zIndex: 10,
    right: 6,
    top: 6,
  },
});

export default styles;
