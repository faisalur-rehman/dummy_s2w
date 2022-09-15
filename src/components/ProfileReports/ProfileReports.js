import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import UploadIcon from '../../assets/images/SvgImages/UploadIcon';
import {colors} from '../../utils/theme';

const ProfileReports = ({uploadIcon, onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.testView}>
        <Text style={styles.reporttxt}>Test's Reports</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.uploadtxt}>Upload</Text>

          <TouchableOpacity onPress={onPress}>
            <UploadIcon />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.messagetxt}>
        Check the checkboxes to share your documents with caregiver/ manager
      </Text>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    backgroundColor: '#FDFDFD',
    // marginVertical: '10@s',
  },
  testView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '20@s',
    marginVertical: '15@s',
  },
  reporttxt: {
    fontSize: '16@s',
    fontWeight: '700',
    color: colors.labelBlackColor,
  },
  uploadtxt: {
    fontSize: '16@s',
    fontWeight: '700',
    color: colors.primaryButtonColor,
    right: '5@s',
  },
  messagetxt: {
    marginVertical: '5@s',
    fontSize: '14@s',
    color: colors.labelBlackColor,
    marginHorizontal: '20@s',
  },
});

export default ProfileReports;
