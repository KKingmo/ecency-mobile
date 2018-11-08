import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    width: '$deviceWidth',
    backgroundColor: '$white',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: 24,
    color: '$iconColor',
  },
  closeIcon: {
    fontSize: 28,
    color: '$iconColor',
  },
  backWrapper: {
    flexGrow: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  quickTitle: {
    fontSize: 10,
    color: '$iconColor',
    marginLeft: 24,
    alignSelf: 'center',
  },
  rightIcon: {
    color: '$iconColor',
    justifyContent: 'center',
    alignSelf: 'center',
    marginRight: 10,
  },
  iconButton: {
    marginRight: 24,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textButton: {
    fontSize: 16,
  },
  textButtonDisable: {
    color: '$iconColor',
  },
  textButtonEnable: {
    color: '$primaryBlue',
  },
  textButtonWrapper: {
    justifyContent: 'center',
  },
  title: {
    color: '$iconColor',
    alignSelf: 'center',
    fontSize: 16,
    marginLeft: 16,
    flexGrow: 1,
    fontWeight: '500',
  },
  textInput: {
    color: '$iconColor',
    alignSelf: 'center',
    fontSize: 16,
    marginLeft: 16,
    flexGrow: 1,
    fontWeight: '500',
    width: '$deviceWidth / 1.4',
  },
});