import React from 'react';
import {Image, Platform, SafeAreaView, Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {colors, fonts} from '../../utils/theme';

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
        <View style={styles.inputView}>{children}</View>
      </SafeAreaView>
    </View>
  );
};

export default AuthenticationWrapper;

const styles = ScaledSheet.create({
  inputView: {
    marginHorizontal: '25@s',
  },
  title: {
    fontFamily: fonts.nunito_bold,
    color: colors.labelBlackColor,
    fontSize: '22@s',
    marginVertical: '25@s',
    marginTop: Platform.OS == 'ios' ? '130@s' : '150@s',
    textAlign: 'center',
  },
});
