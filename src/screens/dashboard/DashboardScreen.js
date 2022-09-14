import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import DetailViewIcon from '../../assets/images/SvgImages/DetailViewIcon';
import VitalStatsView from '../../views/VitalStats/VitalStatsView';
// import {VictoryBar, VictoryChart} from 'victory-native';
import {colors} from '../../utils/theme';
import BarGraphView from '../../views/BarGraphView/BarGraphView';

const DashboardScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.vitalContaner}>
        <VitalStatsView
          title="Vital Stats"
          icon={<DetailViewIcon />}
          navigation={navigation}
        />
      </View>
      <BarGraphView
        title={'Risk Score'}
        description={'Over the last 7 days, your risk score trending downwards'}
      />
    </SafeAreaView>
  );
};

export default DashboardScreen;

const styles = ScaledSheet.create({
  vitalContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '5@s',
    flexWrap: 'wrap',
  },
  graphContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'relative',
    padding: 0,
  },
  graphLine: {
    position: 'absolute',
    top: '55%',
    borderWidth: 1,
    borderColor: colors.blueBorderColor,
    width: '85%',
  },
  textStyle: {
    marginBottom: '5@s',
    color: colors.labelBlackColor,
  },
});
