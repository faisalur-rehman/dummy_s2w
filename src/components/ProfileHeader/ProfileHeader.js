import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import HeaderProfileRightEllipse from '../../assets/images/SvgImages/HeaderProfileRightEllipse';
import HeaderBottomEllipse from '../../assets/images/SvgImages/HeaderBottomEllipse';
import ProfileHeaderIcon from '../../assets/images/SvgImages/ProfileheaderIcon';
import LogOutImage from '../../assets/images/SvgImages/LogOutImage';
import {colors} from '../../utils/theme';
import InfoImage from '../../assets/images/SvgImages/InfoImage';

const ProfileHeader = ({title, description = '', leftIcon = true,onPress}) => {
  return (
    <View style={styles.container}>
      <View style={{position: 'absolute', bottom: 0, left: 0}}>
        <HeaderBottomEllipse />
      </View>
      <View
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
        }}>
        <HeaderProfileRightEllipse />
        <TouchableOpacity
          style={{position: 'absolute', alignSelf: 'center', top: 47}}>
          <LogOutImage />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '55%',
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: '8%',
          position: 'absolute',
          top: 40,
        }}>
        <View>
          <ProfileHeaderIcon />
          <TouchableOpacity
          onPress={onPress}
            style={{position: 'absolute', right: 0, top: 55, left: 55}}>
            <InfoImage />
          </TouchableOpacity>
        </View>

        <View style={[description && {marginLeft: 15}]}>
          <Text style={styles.titleStyle}>{title}</Text>
          {description && (
            <Text style={styles.descriptionStyle}>{description}</Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default ProfileHeader;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.headerBackgroundColor,
    height: '135@s',
    position: 'relative',

    // backgroundColor:"green",
  },
  titleStyle: {
    fontSize: '18@s',
    fontWeight: '700',
    color: colors.labelBlackColor,
  },
  descriptionStyle: {
    fontSize: '12@s',
    color: colors.labelBlackColor,
  },
});
