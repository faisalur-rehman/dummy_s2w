import React from 'react';
import {ScrollView, StatusBar, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import DetailViewIcon from '../../assets/images/SvgImages/DetailViewIcon';
import ElevationIcon from '../../assets/images/SvgImages/ElevationIcon';
import HomeIcon from '../../assets/images/SvgImages/HomeIcon';
import ScanIcon from '../../assets/images/SvgImages/ScanIcon';
import Header from '../../components/Header/Header';
import ScanButton from '../../components/ScanButton/ScanButton';
import {colors} from '../../utils/theme';
import BarGraphView from '../../views/BarGraphView/BarGraphView';
import ClassStatsView from '../../views/ClassStats/ClassStatsView';
import VitalStatsView from '../../views/VitalStats/VitalStatsView';

const DashboardScreen = ({navigation}) => {
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'dark-content'}
        hidden={false}
      />
      <Header
        title={'Hello Ryan'}
        leftIcon={false}
        description="Let`s improve your health with us"
      />
      <ScrollView contentContainerStyle={{backgroundColor: 'white'}}>
        <View style={styles.iconView}>
          <HomeIcon />
        </View>

        <ScanButton
          valuerange="79.9%"
          lastscan="Last seen,1hr 23m ago"
          icon={<ElevationIcon />}
          scanIcon={<ScanIcon />}
        />

        <VitalStatsView
          title="Vital Stats"
          icon={<DetailViewIcon />}
          navigation={navigation}
        />
        <BarGraphView
          title={'Risk Score'}
          description={
            'Over the last 7 days, your risk score trending downwards'
          }
        />
        <ClassStatsView
          title="Class Statistics"
          totalStudent="Out of 30 students"
          tutortxt="Tutor:"
          tutorStatus="Tested Clear"
        />
      </ScrollView>
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
