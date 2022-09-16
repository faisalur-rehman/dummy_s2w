import React from 'react';
import {ScrollView, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Header from '../../components/Header/Header';
import {colors} from '../../utils/theme';
import BarGraphView from '../../views/BarGraphView/BarGraphView';
import VitalHistoryView from '../../views/VitalHistory/VitalHistoryView';

const VitalHistoryScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollStyles}
        showsVerticalScrollIndicator={false}>
        <Header title="Vital History" navigation={navigation} />
        <BarGraphView title={'Risk Score'} />
        <VitalHistoryView title={'History'} />
      </ScrollView>
    </View>
  );
};

export default VitalHistoryScreen;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteColor,
  },
  scrollStyles: {
    paddingBottom: '20@s',
  },
});
