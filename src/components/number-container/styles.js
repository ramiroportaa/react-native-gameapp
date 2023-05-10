import { StyleSheet } from 'react-native';

import { theme } from './../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  number: {
    fontSize: theme.fonts.fontSize.bigNumber,
    color: theme.colors.white,
    fontWeight: 'bold',
  },
});
