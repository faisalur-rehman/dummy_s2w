import React from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import BarGraph from '../../components/Graphs/BarGraph';
import {colors} from '../../utils/theme';

const BarGraphView = ({title, description}) => {
  return (
    <>
      <Text style={styles.titleStyle}>{title}</Text>
      {description && (
        <Text style={styles.descriptionStyle}>{description}</Text>
      )}
      <View style={styles.graphContainer}>
        <View>
          <Text style={styles.textStyle}>Average</Text>
          <Text style={styles.textStyle}>53%</Text>
          <Text style={styles.textStyle}>61% last week</Text>
        </View>
        <BarGraph />
        <View style={styles.graphLine} />
      </View>
    </>
  );
};

export default BarGraphView;

const styles = ScaledSheet.create({
  titleStyle: {
    color: colors.labelBlackColor,
    fontSize: '17@s',
    margin: '10@s',
    marginLeft: '20@s',
    fontWeight: '700',
  },
  descriptionStyle: {
    color: colors.labelBlackColor,
    fontSize: '13@s',
    marginLeft: '20@s',
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