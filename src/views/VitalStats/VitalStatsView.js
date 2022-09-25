import React from 'react';
import {Text, TouchableOpacity, View,Image} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import HeartRateIcon from '../../assets/images/SvgImages/HeartRateIcon';
import VitalStatComponent from '../../components/VitalStatsComponent/VitalStatComponent';
import OxygenSaturation from '../../assets/images/SvgImages/OxygenSaturationIcon';
import HrvIcon from '../../assets/images/SvgImages/HrvIcon';
import TempratureIcon from '../../assets/images/SvgImages/TempratureIcon';
import OxygenSaturationIcon from '../../assets/images/SvgImages/OxygenSaturationIcon';
import StressLevelIcon from '../../assets/images/SvgImages/StressLevelIcon';
import RespiratoryIcon from '../../assets/images/SvgImages/RespiratoryIcon';
import {colors, fonts} from '../../utils/theme';
import {NAVIGATION_ROUTES} from '../../navigations/navigationRoutes';
const VitalStatsView = ({title = '', icon = undefined, navigation}) => {

  const getBackgroundColor = (value) => { 
    let color; 
    if (value === 0) { color = ''; } 
    else if (value >= 1 && value < 25) { color = colors.testedClearColor; } 
    else if (value >= 25 && value < 50) { color = colors.amberRiskColor; } 
    else if (value >= 50 && value < 90) { color = colors.highRiskColor; } 
    // else if (value >= 90) { color = 'green'; } 
    return color; };

  const CircleView=({style})=>{
    return(

      <View style={[
        {
        width:12,
        height:12,
        borderRadius:6,
        backgroundColor:"black",
        // right:0,
        position:"absolute",
        opacity:5,
        // top:0,
        bottom:22,
        left:22
        // marginHorizontal:20

         
      },
        
        {...style}
      ]}></View>
    )
  }
  return (
    <>
      <View style={styles.headerStyle}>
        <Text style={styles.titleStyle}>{title}</Text>
        {icon && (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(NAVIGATION_ROUTES.VITAL_HISTORY)
            }>
            {icon}
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.vitalContainer}>
        <VitalStatComponent
          style={styles.component1}
          circle={ <CircleView
            style={{backgroundColor:getBackgroundColor(24)}}
          />}

         
          icon={<HeartRateIcon/>}
          readingTitle="Heart Rate"
          value="67bpm"
        />
         <VitalStatComponent
         circle={ <CircleView
          style={{backgroundColor:getBackgroundColor(55)}}
        />}
          icon={<HrvIcon/>}
          readingTitle="HRV"
          value="16ms"
        />
          <VitalStatComponent
          circle={ <CircleView
            style={{backgroundColor:getBackgroundColor(29)}}
          />}
        
          icon={<TempratureIcon/>}
          readingTitle="Tempreture"
          value="101F"
        />
        <VitalStatComponent
          circle={ <CircleView
            style={{backgroundColor:getBackgroundColor(30)}}
          />}
        
          icon={<StressLevelIcon/>}
          readingTitle="Stress Level"
          value="60%"
        />
        <VitalStatComponent
          circle={ <CircleView
            style={{backgroundColor:getBackgroundColor(67)}}
          />}
          
        
          icon={<OxygenSaturationIcon/>}
          readingTitle="Oxygen Saturation"
          value="76%"
        />
       
      
        <VitalStatComponent
          style={styles.component6}
          circle={ <CircleView
            style={{backgroundColor:getBackgroundColor(24)}}
          />}
         
          icon={<RespiratoryIcon/>}
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
    
  },
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '10@s',
    marginVertical: '5@s',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: '20@s',
    fontWeight: '700',
    color: colors.labelBlackColor,
    fontFamily: fonts.nunito_bold,
  },
  component1:{
    borderTopLeftRadius:"40@s"
  },
  component6:{
    borderBottomRightRadius:"40@s"
  }
});
