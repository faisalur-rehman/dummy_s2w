import React from 'react';
import {Image, Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import faceScanImg from '../../assets/images/face1.png';
import AuthenticationWrapper from '../../components/AuthenticationWrapper/AuthenticationWrapper';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import Dropdown from '../../components/Dropdown/Dropdown';
import {NAVIGATION_ROUTES} from '../../navigations/navigationRoutes';
import {colors, fonts} from '../../utils/theme';

const EnterClassScreen = ({navigation}) => {
  return (
    <AuthenticationWrapper title="Enter Class">
      <View style={[{zIndex: 99}]}>
        <Dropdown zIndex={3000} label="Class" />
      </View>
      <View style={{zIndex: 9}}>
        <Dropdown zIndex={1000} label="Section" />
      </View>
      <View style={styles.scanFaceView}>
        <Image source={faceScanImg} style={styles.imageStyle} />
        <Text style={styles.scanTextStyle}>Scan Face</Text>
      </View>
      <View style={styles.buttonView}>
        <PrimaryButton
          title={'GO'}
          onPress={() => navigation.navigate(NAVIGATION_ROUTES.HOME_STACK)}
        />
      </View>
    </AuthenticationWrapper>
  );
};

export default EnterClassScreen;

const styles = ScaledSheet.create({
  buttonView: {alignItems: 'center', marginVertical: '20@s'},
  imageStyle: {
    height: '80@s',
    width: '80@s',
  },
  scanTextStyle: {
    fontSize: '22@s',
    marginVertical: '5@s',
    fontFamily: fonts.nunito_semi_bold,
    color: colors.labelBlackColor,
  },
  scanFaceView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '15@s',
  },
});
