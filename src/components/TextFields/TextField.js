import React from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../utils/theme';

const TextField = props => {
  const {
    icon = null,
    onPress = () => null,
    placeholderColor = colors.placeholderColor,
    error = null,
  } = props;
  return (
    <>
      <Text style={styles.label}>{props?.label}</Text>
      <View style={styles.relativeView}>
        <TextInput
          style={styles.textInput}
          {...props}
          placeholderTextColor={placeholderColor}
        />
        {icon && (
          <Pressable onPress={onPress} style={styles.passIcon}>
            {icon}
          </Pressable>
        )}
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </>
  );
};

export default TextField;

const styles = ScaledSheet.create({
  label: {
    color: colors.labelBlackColor,
  },
  error: {
    color: colors.highRiskColor,
    marginBottom: '5@s',
  },
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
