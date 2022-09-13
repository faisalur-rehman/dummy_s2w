import React from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import PasswordEyeIcon from '../../assets/images/SvgImages/EyeIcon';
import {colors} from '../../utils/theme';

const ClassStats = ({heading, value,style}) => {
  return (
    <View style={styles.container}>
    
      <Text style={[styles.textStyle,
          {...style}
      ]}>{heading}</Text>
      <Text style={styles.readingStyle}>{value}</Text>
      
    </View>
  );
};

export default ClassStats;

const styles = ScaledSheet.create({
  container: {
    borderWidth: '1.5@s',
    borderColor: colors.textInputBorderColor,
    width: '23%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '2@s',
    borderRadius: '5@s',
    height: '70@s',
  },
  textStyle: {
    fontSize: '11@s',
    marginTop:'5@s',
    
  },
  readingStyle: {
    fontSize: '18@s',
    marginVertical: '10@s',
    fontWeight:'700'
  },
  
});
