import {Text, View} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {appColors} from '../../../utils/appColors';

export const SelectSizeAndQuantityComp = () => {
  const SIZES = ['small', 'large'];
  const QAUNTITIES = [1, 2, 3, 4, 5];

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 14,
      }}>
      <View>
        <Text style={{fontSize: 20, fontWeight: 400, color: appColors?.black}}>
          {'Select Size'}
        </Text>
        <SelectDropdown
          data={SIZES}
          defaultButtonText={'Select One'}
          buttonStyle={{
            width: 140,
            height: 40,
            borderWidth: 1,
            borderColor: appColors?.black,
            borderRadius: 8,
            marginVertical: 8,
          }}
        />
      </View>
      <View>
        <Text style={{fontSize: 20, fontWeight: 400, color: appColors?.black}}>
          {'Quantity'}
        </Text>
        <SelectDropdown
          data={QAUNTITIES}
          defaultButtonText={'Select One'}
          buttonStyle={{
            width: 140,
            height: 40,
            borderWidth: 1,
            borderColor: appColors?.black,
            borderRadius: 8,
            marginVertical: 8,
          }}
        />
      </View>
    </View>
  );
};
