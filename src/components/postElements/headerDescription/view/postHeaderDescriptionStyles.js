import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    borderColor: '$borderColor',
    borderWidth: 1,
  },
  name: {
    marginHorizontal: 3,
    fontSize: 10,
    color: '$primaryBlack',
    fontFamily: '$primaryFont',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  reputation: {
    fontSize: 10,
    color: '$primaryDarkGray',
    marginRight: 8,
    alignSelf: 'center',
  },
  date: {
    fontSize: 10,
    color: '$primaryDarkGray',
  },
  avatarNameWrapper: {
    flexDirection: 'row',
  },
});
