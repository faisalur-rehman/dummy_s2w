import React from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import HeartRateIcon from '../../assets/images/SvgImages/HeartRateIcon';
import VitalStatComponent from '../../components/VitalStatsComponent/VitalStatComponent';

const VitalStatsView = ({title = '', icon = undefined}) => {
  return (
    <>
      <View style={styles.headerStyle}>
        <Text style={styles.titleStyle}>{title}</Text>
        {icon && icon}
      </View>
      <View style={styles.vitalContainer}>
        <VitalStatComponent
          icon={<HeartRateIcon />}
          readingTitle="Heart Rate"
          value="67bpm"
        />
        <VitalStatComponent
          icon={<HeartRateIcon />}
          readingTitle="Oxygen Saturation"
          value="76%"
        />
        <VitalStatComponent
          icon={<HeartRateIcon />}
          readingTitle="HRV"
          value="16ms"
        />
        <VitalStatComponent
          icon={<HeartRateIcon />}
          readingTitle="Tempreture"
          value="101F"
        />
        <VitalStatComponent
          icon={<HeartRateIcon />}
          readingTitle="Stress Level"
          value="60%"
        />
        <VitalStatComponent
          icon={<HeartRateIcon />}
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
    fontSize: '16@s',
    fontWeight: '700',
  },
});
