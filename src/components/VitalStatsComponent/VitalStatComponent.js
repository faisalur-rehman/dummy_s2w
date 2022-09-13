import React from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import PasswordEyeIcon from '../../assets/images/SvgImages/EyeIcon';
import {colors} from '../../utils/theme';

const VitalStatComponent = ({icon, readingTitle, value}) => {
  return (
    <View style={styles.container}>
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
    height: '70@s',
  },
  readingStyle: {
    fontSize: '16@s',
    marginVertical: '5@s',
  },
  textStyle: {
    fontSize: '11@s',
  },
});
