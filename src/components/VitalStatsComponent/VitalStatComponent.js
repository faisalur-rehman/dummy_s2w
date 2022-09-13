import React from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import PasswordEyeIcon from '../../assets/images/SvgImages/EyeIcon';
import {colors} from '../../utils/theme';

const VitalStatComponent = ({icon, readingTitle, value,style}) => {
  return (
    <View style={[
      styles.container,
      {...style}
    
    ]}>
      {icon}
      <Text style={styles.readingStyle}>{value}</Text>
      <Text style={styles.textStyle}>{readingTitle}</Text>
    </View>
  );
};

export default VitalStatComponent;

const styles = ScaledSheet.create({
  container: {
    borderWidth: '1@s',
    borderColor: colors.blueBorderColor,
    width: '32%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '2@s',
    borderRadius: '5@s',
    height: '75@s',
    // backgroundColor:"green",
    
  },
  readingStyle: {
    fontSize: '18@s',
    marginVertical: '1@s',
    color:"#868686",
    fontWeight:'500'
  },
  textStyle: {
    fontSize: '12@s',
    color:'#424242',
    fontWeight:"700"
  },
});
