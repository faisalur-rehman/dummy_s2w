import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {ButtonVariants} from '../../utils/constants';
import {colors} from '../../utils/theme';
import ArrowVector from '../../assets/images/SvgImages/ArrowVector';

const PrimaryButton = ({title, onPress, variant = ButtonVariants.PRIMARY,style,icon=undefined,arrowvector=false}) => {
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
      {arrowvector ?
       <View 
       style={styles.arrowIcon}>
         <ArrowVector/>
 
       </View>
      
      :<></>}
     
      {/* {icon && icon} */}
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = ScaledSheet.create({
  buttonStyles: {
    width: '40%',
    borderRadius: '12@s',
    height: '45@s',
    flexDirection:'row',
    justifyContent:"center",
    alignItems:"center"
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
  arrowIcon:{
    alignSelf:"center",
    justifyContent:"center",
    alignItems:"center",
    marginTop:"5@s",
    left:"2@s"}

});
