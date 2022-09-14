import React from 'react';
import {StyleSheet} from 'react-native';
import {BarChart} from 'react-native-chart-kit';
import {colors} from '../../utils/theme';

const data = {
  labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  datasets: [
    {
      data: [3, 4, 4, 3, 4, 5, 6],
      colors: [
        () => colors.amberRiskColor,
        () => colors.highRiskColor,
        () => colors.lowRiskColor,
        () => colors.amberRiskColor,
        () => colors.highRiskColor,
        () => colors.lowRiskColor,
        () => colors.lowRiskColor,
      ],
    },
  ],
  legend: ['Rainy Days'],
};

const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => 'black',
  barPercentage: 0.5,
  barRadius: 8,
};

const BarGraph = () => {
  return (
    <BarChart
      style={{
        width: 200,
        paddingRight: 0,
      }}
      data={data}
      width={200}
      height={160}
      chartConfig={chartConfig}
      fromZero
      withHorizontalLabels={false}
      withCustomBarColorFromData
      flatColor
      showBarTops={false}
      withInnerLines={false}
    />
  );
};

export default BarGraph;

const styles = StyleSheet.create({});
