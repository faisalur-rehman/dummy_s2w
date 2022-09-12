import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import React, { useState, useEffect } from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native'
import {colors} from '../../utils/theme';
import {NAVIGATION_ROUTES} from '../../navigations/navigationRoutes';

const Splash = () => {
  const navigation=useNavigation();

  useEffect(() => {
    setTimeout(()=>{
     navigation.navigate(NAVIGATION_ROUTES.GET_STARTED)
    },2000)
   }, [])
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode='cover'
        style={styles.img}
        source={require('../../assets/images/Splash.png')}></ImageBackground>
    </View>
  );
};

export default Splash;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: '100%',
    height: '100%',
  },
});
