import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {ImageBackground, View,Image} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {NAVIGATION_ROUTES} from '../../navigations/navigationRoutes';
import SplashImage from '../../assets/images/SvgImages/splashImage';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(NAVIGATION_ROUTES.GET_STARTED);
    }, 1500);
  }, []);
  return (
    // <SplashImage/>
    <View style={styles.container}>
      {/* <SplashImage/> */}
    
     
      <Image
      
        style={styles.img}
        source={require('../../assets/images/SplashFrame.png')}
      />
    </View>
  );
};

export default Splash;

const styles = ScaledSheet.create({
  container: {
  
  
   flex:1,
  },
  img:{
    width:"100%",
    height:"100%",
    resizeMode:"cover"

  }
 
});
