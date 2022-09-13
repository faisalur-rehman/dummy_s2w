import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import DetailViewIcon from '../../assets/images/SvgImages/DetailViewIcon';
import VitalStatComponent from '../../components/VitalStatsComponent/VitalStatComponent';
import VitalStatsView from '../../views/VitalStats/VitalStatsView';
import ClassStatsView from '../../views/ClassStats/ClassStatsView';
import {VictoryBar} from 'victory-native';
import ScanButton from '../../components/ScanButton/ScanButton';
import ElevationIcon from '../../assets/images/SvgImages/ElevationIcon';
import ScanIcon from '../../assets/images/SvgImages/ScanIcon';
import HomeIcon from '../../assets/images/SvgImages/HomeIcon';

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
        <View style={styles.iconView}>
          <HomeIcon />
        </View>

        <ScanButton
          valuerange="79.9%"
          lastscan="Last seen,1hr 23m ago"
          icon={<ElevationIcon />}
          scanIcon={<ScanIcon />}
        />

        <VitalStatsView title="Vital Stats" icon={<DetailViewIcon />} />
      </View>
      {/* <VictoryBar
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
      /> */}
      <ClassStatsView
        title="Class Statistics"
        totalStudent="Out of 30 students"
        tutortxt="Tutor:"
        tutorStatus="Tested Clear"
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
  homeicon: {
    width: '20@s',
    height: '20@s',
    marginHorizontal: '12@s',
    marginVertical: '5@s',
  },
  sacnButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'black',
    alignItems: 'center',

    marginHorizontal: '10@s',
    marginVertical: '10@s',
    borderRadius: '10@s',
    paddingHorizontal: '10@s',
    height: '15%',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  iconView: {
    marginHorizontal: '12@s',
    marginVertical: '5@s',
  },
});
