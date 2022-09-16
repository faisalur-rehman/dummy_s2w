import React from 'react';
import {Text, View} from 'react-native';
import * as Progress from 'react-native-progress';
import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../utils/theme';

const VitalHistory = () => {
  return (
    <View style={styles.container}>
      <View style={styles.readingContainer}>
        <Text style={styles.text}>Oxygen Saturation: 99%</Text>
        <Text style={styles.text}>Heart Rate: 57bpm</Text>
        <Text style={styles.text}>HRV: 23ms</Text>
        <Text style={styles.text}>Temperature: 102 Fh</Text>
        <Text style={styles.text}>Stress Level: Normal</Text>
        <Text style={styles.text}>Respiratory Level: 67 brpm</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Progress.Circle
          // indeterminate={true}
          animated={false}
          progress={0.39}
          color={colors.testedClearColor}
          unfilledColor={colors.unfilledGraphColor}
          showsText
          borderColor="none"
          thickness={7}
          size={90}
          formatText={() => '30.9%\nRisk Score'}
          textStyle={{
            fontSize: 12,
            textAlign: 'center',
            color: colors.labelBlackColor,
            padding: 5,
          }}
        />
        <Text style={styles.date}>Friday 27th July, 12:34pm</Text>
      </View>
    </View>
  );
};

export default VitalHistory;

const styles = ScaledSheet.create({
  container: {
    borderWidth: '1@s',
    borderColor: colors.textInputBorderColor,
    borderRadius: '10@s',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginHorizontal: '10@s',
    marginVertical: '5@s',
  },
  readingContainer: {
    padding: '8@s',
  },
  text: {
    fontSize: '12@s',
    color: colors.labelBlackColor,
    marginVertical: '5@s',
    fontWeight: '600',
  },
  date: {
    fontSize: '10@s',
    color: colors.labelBlackColor,
    marginVertical: '5@s',
  },
});
