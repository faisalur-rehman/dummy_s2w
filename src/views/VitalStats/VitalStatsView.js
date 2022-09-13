import React from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import HeartRateIcon from '../../assets/images/SvgImages/HeartRateIcon';
import VitalStatComponent from '../../components/VitalStatsComponent/VitalStatComponent';
import OxygenSaturation from '../../assets/images/SvgImages/OxygenSaturationIcon';
 import HrvIcon from '../../assets/images/SvgImages/HrvIcon';
 import TempratureIcon from '../../assets/images/SvgImages/TempratureIcon';
import OxygenSaturationIcon from '../../assets/images/SvgImages/OxygenSaturationIcon';
import StressLevelIcon from '../../assets/images/SvgImages/StressLevelIcon';
import RespiratoryIcon from '../../assets/images/SvgImages/RespiratoryIcon';
import { colors } from '../../utils/theme';
const VitalStatsView = ({title = '', icon = undefined}) => {
  return (
    <>
      <View style={styles.headerStyle}>
        <Text style={styles.titleStyle}>{title}</Text>
        {icon && icon}
      </View>
      <View style={styles.vitalContainer}>
        <VitalStatComponent
          style={{borderColor:colors.highRiskColor}}
          icon={<HeartRateIcon />}
          readingTitle="Heart Rate"
          value="67bpm"
        />
        <VitalStatComponent
          style={{borderColor:colors.boxborderColor}}
          icon={<OxygenSaturationIcon />}
          readingTitle="Oxygen Saturation"
          value="76%"
        />
        <VitalStatComponent
          style={{borderColor:colors.primaryButtonColor}}
          icon={<HrvIcon />}
          readingTitle="HRV"
          value="16ms"
        />
        <VitalStatComponent
          style={{borderColor:colors.primaryButtonColor}}
          icon={<TempratureIcon />}
          readingTitle="Tempreture"
          value="101F"
        />
        <VitalStatComponent
          style={{borderColor:colors.boxborderColor}}
          icon={<StressLevelIcon />}
          readingTitle="Stress Level"
          value="60%"
        />
        <VitalStatComponent
        style={{borderColor:colors.highRiskColor}}
          icon={<RespiratoryIcon />}
          readingTitle="Respiratory Level"
          value="60brpm"
        />
      </View>
    </>
  );
};

export default VitalStatsView;

const styles = ScaledSheet.create({
  vitalContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '5@s',
    flexWrap: 'wrap',
    // backgroundColor:"green"
  },
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '10@s',
    marginVertical: '5@s',
    alignItems: 'center',
    // backgroundColor:"yellow"
    
  },
  titleStyle: {
    fontSize: '20@s',
    fontWeight: '700',
    color:'#424242'
  },
});
