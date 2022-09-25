import {
  Text,
  View,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import {NAVIGATION_ROUTES} from '../../navigations/navigationRoutes';
import ArrowVector from '../../assets/images/SvgImages/ArrowVector';
import {colors, fonts} from '../../utils/theme';
import GetStartedImage from '../../assets/images/SvgImages/GetStarted';
// import { Icons } from '../../assets/vectorIcons/VectorIcons';

const GetStarted = ({navigation}) => {
  const gotoLogin = () => {
    navigation.navigate(NAVIGATION_ROUTES.LOGIN);
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar hidden={true} />
      {/* <GetStartedImage/> */}
      <Image
        style={styles.backImg}
        resizeMode="cover"
        source={require('../../assets/images/background.jpg')}
      />
      <View style={styles.waveView}>
        <ImageBackground
          style={styles.waveImg}
          resizeMode="stretch"
          source={require('../../assets/images/wave.png')}>
          <Text style={styles.heading}>Take Care of Health With Us</Text>
          <Text style={styles.subheading}>
            Service with professional doctors and the best facilities guarantee
            the quality of your health, let's start maintaining health
          </Text>
          <View style={styles.buttonView}>
            <PrimaryButton
              onPress={gotoLogin}
              title={'Get Started'}
              style={styles.buttonWidth}
              arrowvector={true}
              // icon={<ArrowVector/>}
            />
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  backImg: {
    width: '100%',
    height: '78%',
    top:0,
    // position:"absolute"
    
    
  },
  waveView: {
    width: '100%',
    height: '48%',
    position: 'absolute',
    bottom: 0,
  },

  waveImg: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  heading: {
    fontSize: '32@s',
    marginHorizontal: '20@s',
    fontFamily: fonts.nunito_bold,
    color: colors.labelBlackColor,
  },
  subheading: {
    fontSize: '14@s',
    marginHorizontal: '20@s',
    marginVertical: '10@s',
    fontFamily: fonts.nunito_regular,
    color: colors.labelBlackColor,
  },
  buttonView: {
    width: '100%',
    alignItems: 'center',
    marginVertical: '20@s',
  },
  buttonWidth: {
    width: '90%',
    height: '50@s',
    marginHorizontal: '20@s',
  },
});

export default GetStarted;
