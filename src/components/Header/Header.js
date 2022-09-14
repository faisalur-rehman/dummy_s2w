import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import BackArrow from '../../assets/images/SvgImages/BackArrow';
import HeaderLeftEllipse from '../../assets/images/SvgImages/HeaderLeftEllipse';
import HeaderRightEllipse from '../../assets/images/SvgImages/HeaderRightEllipse';
import ProfileImage from '../../assets/images/SvgImages/ProfileImage';
import {NAVIGATION_ROUTES} from '../../navigations/navigationRoutes';
import {colors, fonts} from '../../utils/theme';

const Header = ({
  title,
  description = '',
  leftIcon = true,
  hideIcon = false,
  textViewStyle = {},
  navigation,
}) => {
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
        }}>
        <HeaderRightEllipse />
      </View>
      <View
        style={{
          width: '85%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: '8%',
          position: 'absolute',
          bottom: 20,
        }}>
        {leftIcon ? (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackArrow />
          </TouchableOpacity>
        ) : hideIcon ? (
          <View />
        ) : null}
        <View
          style={[
            description && {
              marginLeft: 10,
              ...textViewStyle,
            },
          ]}>
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
    fontFamily: fonts.nunito_bold,
    color: colors.labelBlackColor,
  },
  descriptionStyle: {
    fontSize: '14@s',
    fontFamily: fonts.nunito_regular,
    color: colors.labelBlackColor,
  },
});
