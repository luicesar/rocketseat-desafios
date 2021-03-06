import { StyleSheet } from 'react-native';

import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  annotationContainer: {
    borderColor: colors.primary,
    borderRadius: metrics.screenWidth * 0.075,
    borderWidth: 5,
    height: metrics.screenWidth * 0.15,
    width: metrics.screenWidth * 0.15,
  },

  bio: {
    color: colors.regular,
    fontSize: 12,
    marginTop: metrics.baseMargin / 2,
  },

  calloutContainer: {
    width: metrics.screenWidth * 0.5,
  },

  container: {
    ...StyleSheet.absoluteFillObject,
  },

  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
