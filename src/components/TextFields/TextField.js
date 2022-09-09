import React from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../utils/theme';

const TextField = props => {
  const {icon = null, onPress = () => null} = props;
  return (
    <View style={styles.inputView}>
      <Text style={styles.label}>{props?.label}</Text>
      <View style={styles.relativeView}>
        <TextInput style={styles.textInput} {...props} />
        {icon && (
          <Pressable onPress={onPress} style={styles.passIcon}>
            {icon}
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default TextField;

const styles = ScaledSheet.create({
  inputView: {
    marginHorizontal: '25@s',
  },
  label: {},
  textInput: {
    height: '40@s',
    // backgroundColor: 'red',
    borderRadius: '5@s',
    borderWidth: '1@s',
    borderColor: colors.textInputBorderColor,
    paddingHorizontal: '10@s',
    marginVertical: '12@s',
  },
  relativeView: {
    position: 'relative',
  },
  passIcon: {
    position: 'absolute',
    right: '10@s',
    top: '41%',
  },
});
