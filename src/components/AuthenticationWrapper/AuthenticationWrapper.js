import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';

const AuthenticationWrapper = ({children, title = ''}) => {
  return (
    <View style={{height: '100%', width: '100%', backgroundColor: 'white'}}>
      <View>
        <Image
          style={{
            alignSelf: 'flex-end',
            position: 'absolute',
          }}
          source={require('../../assets/images/maskGroup.png')}
        />
        <View
          style={{
            backgroundColor: 'green',
            width: '90%',
            position: 'absolute',
          }}>
          <Image
            style={{alignSelf: 'flex-end', position: 'absolute'}}
            source={require('../../assets/images/login_icon.png')}
          />
        </View>
      </View>
      <SafeAreaView>
        <Text style={styles.title}>{title}</Text>
      </SafeAreaView>
      {children}
    </View>
  );
};

export default AuthenticationWrapper;

const styles = ScaledSheet.create({
  title: {
    fontWeight: '700',
    fontSize: '24@s',
    marginTop: '130@s',
    textAlign: 'center',
    marginVertical: '20@s',
  },
});
