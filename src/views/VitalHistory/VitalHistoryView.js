import React from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import VitalHistory from '../../components/VitalHistory/VitalHistory';
import {colors, fonts} from '../../utils/theme';

const VitalHistoryView = ({title}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <VitalHistory />
      <VitalHistory />
      <VitalHistory />
    </View>
  );
};

export default VitalHistoryView;

const styles = ScaledSheet.create({
  title: {
    fontSize: '20@s',
    color: colors.labelBlackColor,
    fontFamily: fonts.nunito_bold,
    marginLeft: '10@s',
    fontWeight: '700',
  },
});
