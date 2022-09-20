import React from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import BarGraph from '../../components/Graphs/BarGraph';
import {colors, fonts} from '../../utils/theme';

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
          <Text style={styles.percentageStyle}>53%</Text>
          <Text style={[styles.textStyle, {marginTop: 10}]}>61% last week</Text>
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
    fontSize: '20@s',
    fontFamily: fonts.nunito_bold,
    margin: '10@s',
  },
  descriptionStyle: {
    color: colors.labelBlackColor,
    fontFamily: fonts.nunito_regular,
    fontSize: '14@s',
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
    borderWidth: '2@s',
    borderColor: colors.blueBorderColor,
    backgroundColor: colors.blueBorderColor,
    width: '85%',
  },
  textStyle: {
    marginBottom: '6@s',
    color: colors.labelBlackColor,
    fontFamily: fonts.nunito_semi_bold,
    fontSize: '14@s',
  },
  percentageStyle: {
    fontSize: '16@s',
    fontFamily: fonts.nunito_semi_bold,
    color: colors.primaryButtonColor,
    marginBottom: '16@s',
  },
});
