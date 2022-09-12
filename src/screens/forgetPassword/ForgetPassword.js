import React, {useState} from 'react';
import {Alert, SafeAreaView, Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import AuthenticationWrapper from '../../components/AuthenticationWrapper/AuthenticationWrapper';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import TextField from '../../components/TextFields/TextField';
import * as Yup from 'yup';
import {Formik} from 'formik';

const ForgetPassword = () => {
  const displaymessage = 'Confirm Email & send notification to Admin';

  const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email must be valid')
      .required('Email is required'),
  });
  const handleRequest = () => {
    Alert.alert('Your request has been sent to Admin!');
  };

  return (
    <AuthenticationWrapper title="Forget Password">
      <Text style={styles.msgtext}>{displaymessage}</Text>
      <SafeAreaView>
        <Formik
          initialValues={{email: ''}}
          validationSchema={loginValidationSchema}
          onSubmit={handleRequest}>
          {({handleChange, handleBlur, handleSubmit, values, errors}) => (
            <>
              <TextField
                placeholder="abc@gmail.com"
                label="Email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                error={errors.email}
              />
              <View style={styles.buttonView}>
                <PrimaryButton title={'Send'} onPress={handleSubmit} />
              </View>
            </>
          )}
        </Formik>
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
    marginHorizontal: '2@s',
    marginTop: '-12@s',
    marginBottom: '5@s',
  },
  buttonView: {
    alignItems: 'center',
    marginVertical: '100@s',
  },
});
