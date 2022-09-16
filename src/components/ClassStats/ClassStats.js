import React from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {colors, fonts} from '../../utils/theme';

const ClassStats = ({heading, value, style}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.textStyle, {...style}]}>{heading}</Text>
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
    marginTop: '5@s',
    fontFamily: fonts.nunito_semi_bold,
  },
  readingStyle: {
    fontSize: '18@s',
    marginVertical: '10@s',
    fontFamily: fonts.nunito_bold,
    color: colors.labelBlackColor,
  },
});
