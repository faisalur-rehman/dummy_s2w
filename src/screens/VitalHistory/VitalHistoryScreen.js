import React from 'react';
import {View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Header from '../../components/Header/Header';
import {colors} from '../../utils/theme';
import BarGraphView from '../../views/BarGraphView/BarGraphView';
import VitalHistoryView from '../../views/VitalHistory/VitalHistoryView';

const VitalHistoryScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Vital History" />
      <BarGraphView title={'Risk Score'} />
      <VitalHistoryView title={'History'} />
    </View>
  );
};

export default VitalHistoryScreen;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteColor,
  },
});
