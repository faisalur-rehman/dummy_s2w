import React from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import DetailViewIcon from '../../assets/images/SvgImages/DetailViewIcon';
import VitalStatComponent from '../../components/VitalStatsComponent/VitalStatComponent';
import VitalStatsView from '../../views/VitalStats/VitalStatsView';
import {VictoryBar} from 'victory-native';

const DashboardScreen = () => {
  const data = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000},
    {quarter: 5, earnings: 19000},
    {quarter: 6, earnings: 19000},
    {quarter: 7, earnings: 19000},
  ];
  return (
    <>
      <View style={styles.vitalContaner}>
        <VitalStatsView title="Vital Stats" icon={<DetailViewIcon />} />
      </View>
      <VictoryBar
        width={300}
        alignment="middle"
        cornerRadius={5}
        data={data}
        x="quarter"
        y="earnings"
        style={{
          data: {
            fill: ({datum}) => {
              console.log('datum', datum);
              if (datum.quarter == 3 || datum.quarter == 2) {
                return '#c43a31';
              }
              return '';
            },
          },
        }}
      />
    </>
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
});
