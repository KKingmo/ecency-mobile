import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  activeInput: {
    backgroundColor: '$primaryBlue',
    height: 10,
    width: 10,
    borderRadius: 20 / 2,
  },
  inputWithBackground: {
    backgroundColor: '$primaryBlue',
  },
  input: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 18,
    margin: 10,
    width: 18,
    borderRadius: 20 / 2,
    borderWidth: 1,
    borderColor: '$primaryBlue',
    backgroundColor: '$white',
  },
});