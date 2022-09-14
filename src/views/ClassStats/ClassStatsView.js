import React from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import ClassStats from '../../components/ClassStats/ClassStats';
import {colors} from '../../utils/theme';

const ClassStatsView = ({
  title = '',
  icon = undefined,
  totalStudent = '',
  tutortxt = '',
  tutorStatus = '',
}) => {
  return (
    <>
      <View style={styles.headerStyle}>
        <Text style={styles.titleStyle}>{title}</Text>
        {icon && icon}
      </View>
      <View style={styles.vitalContainer}>
        <ClassStats
          style={{color: colors.highRiskColor}}
          heading="High Risk"
          value="5"
        />
        <ClassStats
          style={{color: colors.amberRiskColor}}
          heading="Amber Risk"
          value="12"
        />
        <ClassStats
          style={{color: colors.normaltestColor}}
          heading="Testes Clear"
          value="10"
        />
        <ClassStats
          style={{color: colors.highRiskColor}}
          heading="Awaiting Test"
          value="3"
        />
      </View>
      <View style={styles.footerView}>
        <Text style={styles.studentCount}>{totalStudent}</Text>
        <Text style={styles.studentCount}>
          {tutortxt}
          <Text style={styles.tutorStatus}>{tutorStatus}</Text>
        </Text>
      </View>
    </>
  );
};

export default ClassStatsView;

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
  },
  footerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '12@s',
    marginTop: '5@s',
    marginBottom: '10@s',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: '20@s',
    fontWeight: '700',
    color: '#424242',
  },
  studentCount: {
    color: '#424242',
    fontWeight: '600',
    fontSize: '11@s',
  },
  tutorStatus: {
    color: '#69BF4B',
    fontWeight: '600',
    fontSize: '11@s',
  },
});
