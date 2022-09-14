import React from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import BackArrow from '../../assets/images/SvgImages/BackArrow';
import HeaderLeftEllipse from '../../assets/images/SvgImages/HeaderLeftEllipse';
import HeaderRightEllipse from '../../assets/images/SvgImages/HeaderRightEllipse';
import ProfileImage from '../../assets/images/SvgImages/ProfileImage';
import {colors} from '../../utils/theme';

const Header = ({title, description = '', leftIcon = true}) => {
  return (
    <View style={styles.container}>
      <View style={{position: 'absolute', top: 30, left: 0}}>
        <HeaderLeftEllipse />
      </View>
      <View
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          // backgroundColor: 'red',
        }}>
        <HeaderRightEllipse />
        {/* <Image source={right_ellipse} style={{width: 135, height: 122}} /> */}
      </View>
      <View
        style={{
          width: '85%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: '8%',
          position: 'absolute',
          // backgroundColor: 'red',
          bottom: 20,
        }}>
        {leftIcon && <BackArrow />}
        <View style={[description && {marginLeft: 10}]}>
          <Text style={styles.titleStyle}>{title}</Text>
          {description && (
            <Text style={styles.descriptionStyle}>{description}</Text>
          )}
        </View>
        <ProfileImage />
      </View>
    </View>
  );
};

export default Header;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.headerBackgroundColor,
    height: '110@s',
    position: 'relative',
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
