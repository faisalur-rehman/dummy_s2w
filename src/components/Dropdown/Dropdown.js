import React, {useState} from 'react';
import {Text, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../utils/theme';

const Dropdown = props => {
  const {label = '', style = {}} = props;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Class 1', value: 'Class1'},
    {label: 'Class 2', value: 'Class2'},
  ]);

  return (
    <View>
      <Text style={styles.labelStyle}>{label}</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        dropDownContainerStyle={styles.dropdownContainer}
        {...props}
        style={[styles.dropdownInput, style]}
        // containerStyle={{borderColor: 'blue'}}
      />
    </View>
  );
};

export default Dropdown;

const styles = ScaledSheet.create({
  dropdownInput: {
    borderColor: colors.textInputBorderColor,
    marginVertical: '12@s',
  },
  dropdownContainer: {
    borderColor: colors.textInputBorderColor,
  },
  labelStyle: {
    color: colors.labelBlackColor,
    fontSize: '18@s',
  },
});
