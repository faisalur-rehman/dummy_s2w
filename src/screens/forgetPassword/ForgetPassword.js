import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import AuthenticationWrapper from '../../components/AuthenticationWrapper/AuthenticationWrapper';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import TextField from '../../components/TextFields/TextField';

const ForgetPassword = () => {
  const displaymessage = 'Confirm Email & send notification to Admin';

  return (
    <AuthenticationWrapper title="Forget Password">
      <Text style={styles.msgtext}>{displaymessage}</Text>
      <SafeAreaView style={{flex: 1}}>
        <TextField placeholder="forgetpassword@gmail.com" label="Email" />
        <View style={styles.buttonView}>
          <PrimaryButton title={'Send'} />
        </View>
      </SafeAreaView>
    </AuthenticationWrapper>
  );
};

export default ForgetPassword;

const styles = ScaledSheet.create({
  msgtext: {
    fontSize: '18@s',

    textAlign: 'center',
    color: '#868686',
    marginHorizontal: '22@s',
    marginTop: '-12@s',
    marginBottom: '5@s',
  },
  buttonView: {
    alignItems: 'center',
    marginVertical: '100@s',
  },
});
