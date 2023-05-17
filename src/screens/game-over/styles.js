import { StyleSheet } from 'react-native';

import { theme } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
  },
  resultContainer: {
    marginBottom: 30,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: 200,
  },
  resultText: {
    color: theme.colors.text,
    fontSize: theme.fonts.fontSize.text,
    fontFamily: theme.fonts.fontFamily.bold,
  },
});
