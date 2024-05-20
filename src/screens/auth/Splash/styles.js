import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    height: '100%',
  },
  titleContainer: {
    marginVertical: 54,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  innerTitle: {
    color: colors.orange,
    textDecorationLine: 'underline',
  },
  footerText: {
    color: colors.blue,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 13,
  },
});
