import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {ImageBackground, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {NAVIGATION_ROUTES} from '../../navigations/navigationRoutes';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(NAVIGATION_ROUTES.GET_STARTED);
    }, 1500);
  }, []);
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={styles.img}
        source={require('../../assets/images/Splash.png')}
      />
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
