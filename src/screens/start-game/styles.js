import { StyleSheet } from 'react-native';

import { theme } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
  },
  title: {
    fontSize: theme.fonts.fontSize.title,
    color: theme.colors.text,
    textAlign: 'center',
    paddingVertical: 20,
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 24,
    backgroundColor: theme.colors.primary,
  },
  label: {
    fontSize: theme.fonts.fontSize.text,
    color: theme.colors.text,
    paddingVertical: 20,
    textAlign: 'center',
  },
  input: {
    width: '40%',
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 1,
    minWidth: 80,
    textAlign: 'center',
    fontSize: theme.fonts.fontSize.bigNumber,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 20,
    justifyContent: 'space-evenly',
    marginVertical: 20,
  },
  confirmedOutput: {
    marginVertical: 20,
    padding: 20,
    backgroundColor: theme.colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmedOutputText: {
    fontSize: 24,
    color: theme.colors.white,
  },
});
