import React from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {colors, fonts} from '../../utils/theme';
import ProfileImage from '../../assets/images/SvgImages/ProfileImage';
import MedicineIcon from '../../assets/images/SvgImages/MedicineIcon';

const PrescriptionView = ({
  prescribedBy = 'Albert Robert',
  description = '2 Medicines',
  date = 'Jan 1 | 8:30pm',
  rightIcon = <MedicineIcon />,
}) => {
  return (
    <View style={styles.boxContainer}>
      <View style={styles.container}>
        <View style={{width: '13%'}}>
          <ProfileImage />
        </View>
        <View style={styles.prescription}>
          <View style={styles.prescriptionHeader}>
            <Text style={styles.title}>Prescribed By : {prescribedBy}</Text>
            {rightIcon}
          </View>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
};

export default PrescriptionView;

const styles = ScaledSheet.create({
  boxContainer: {
    padding: '10@s',
    backgroundColor: colors.lightNotifcationColor,
    margin: '10@s',
    marginVertical: '5@s',
    borderRadius: '14@s',
    height: '90@s',
    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  prescription: {
    marginHorizontal: '12@s',
    width: '83%',
  },
  prescriptionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.nunito_bold,
    fontSize: '14@s',
    color: colors.labelBlackColor,
  },
  description: {
    fontFamily: fonts.nunito_semi_bold,
    fontSize: '14@s',
    color: colors.labelBlackColor,
  },
  date: {
    textAlign: 'right',
    fontFamily: fonts.nunito_semi_bold,
    fontSize: '12@s',
    color: colors.grayTextColor,
  },
});
