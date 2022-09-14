import React from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import VitalHistory from '../../components/VitalHistory/VitalHistory';
import {colors} from '../../utils/theme';

const VitalHistoryView = ({title}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <VitalHistory />
      <VitalHistory />
    </View>
  );
};

export default VitalHistoryView;

const styles = ScaledSheet.create({
  title: {
    fontSize: '18@s',
    color: colors.labelBlackColor,
    marginLeft: '20@s',
    fontWeight: '700',
  },
});
