import {StyleSheet} from 'react-native';
import {appColors} from '../../utils/appColors';

const styles = StyleSheet.create({
  searchContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
    height: 50,
    marginHorizontal: 8,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: appColors.white,
    flexDirection: 'row',
    marginRight: 8,
    alignItems: 'center',
    borderRadius: 18,
  },
  searchInput: {
    flex: 1,
    width: '100%',
    height: '100%',
    paddingHorizontal: 8,
  },
  tabsContainer: {
    width: '100%',
    marginTop: 24,
    marginHorizontal: 20,
  },
});

export default styles;
