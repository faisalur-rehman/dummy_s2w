import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {ButtonVariants} from '../../utils/constants';
import {colors} from '../../utils/theme';

const PrimaryButton = ({title, onPress, variant = ButtonVariants.PRIMARY,style}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.buttonStyles,
        {...style},
        variant == ButtonVariants.PRIMARY
          ? styles.primaryStyles
          : styles.outlineStyle,
         ]}>
      <Text
        style={[
          styles.textStyles,
          variant == ButtonVariants.PRIMARY
            ? styles.primaryText
            : styles.outlineText,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = ScaledSheet.create({
  buttonStyles: {
    width: '40%',
    borderRadius: '12@s',
    height: '45@s',
  },
  primaryStyles: {
    backgroundColor: colors.primaryButtonColor,
  },
  outlineStyle: {
    borderWidth: '1@s',
    borderColor: colors.primaryButtonColor,
  },
  textStyles: {
    fontSize: '14@s',
    textAlign: 'center',
    lineHeight: '41@s',
    alignSelf: 'center',
  },
  primaryText: {
    color: colors.whiteColor,
  },
  outlineText: {
    color: colors.primaryButtonColor,
  },
});
