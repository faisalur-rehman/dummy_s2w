import React, {useState} from 'react';
import {Formik} from 'formik';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import * as Yup from 'yup';

import {login} from '../../apis/auth';
import PasswordEyeIcon from '../../assets/images/SvgImages/EyeIcon';
import HiddenEye from '../../assets/images/SvgImages/HiddenEye';
import AuthenticationWrapper from '../../components/AuthenticationWrapper/AuthenticationWrapper';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import TextField from '../../components/TextFields/TextField';
import {useSendApiRequest} from '../../hooks/useApiRequest';
import {NAVIGATION_ROUTES} from '../../navigations/navigationRoutes';
import Storage from '../../utils/Storage';
import {colors, fonts} from '../../utils/theme';

const LoginScreen = ({navigation}) => {
  const {isLoading, handleApi} = useSendApiRequest(login);

  const [showPassword, setShowPassword] = useState(false);

  const loginValidationSchema = Yup.object().shape({
    loginName: Yup.string()
      .email('Email must be valid')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleLogin = async values => {
    // console.log('Inside hanndle login');
    try {
      const response = await handleApi(values);
      Storage.storeData('token', response.accessToken);
      response && navigation.navigate(NAVIGATION_ROUTES.ENTER_CLASS);
    } catch (_) {}
  };
  return (
    <AuthenticationWrapper title="Login">
      <SafeAreaView>
        <Formik
          initialValues={{loginName: 'a@gmail.com', password: '1'}}
          validationSchema={loginValidationSchema}
          onSubmit={handleLogin}>
          {({handleChange, handleBlur, handleSubmit, values, errors}) => (
            <>
              <TextField
                placeholder="abc@gmail.com"
                label="Email"
                onChangeText={handleChange('loginName')}
                onBlur={handleBlur('loginName')}
                value={values.loginName}
                error={errors.loginName}
              />
              <TextField
                placeholder="Password"
                label="Password"
                secureTextEntry={showPassword ? false : true}
                icon={showPassword ? <PasswordEyeIcon /> : <HiddenEye />}
                onPress={() => setShowPassword(prev => !prev)}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                error={errors.password}
              />
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(NAVIGATION_ROUTES.RESET_PASSWORD)
                }>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
              </TouchableOpacity>
              <View style={styles.buttonView}>
                <PrimaryButton
                  title={'Login'}
                  onPress={handleSubmit}
                  isLoading={isLoading}
                />
              </View>
            </>
          )}
        </Formik>
      </SafeAreaView>
    </AuthenticationWrapper>
  );
};

export default LoginScreen;

const styles = ScaledSheet.create({
  forgotPassword: {
    textAlign: 'right',
    color: colors.primaryButtonColor,
    fontFamily: fonts.nunito_bold,
    fontSize: '14@s',
    marginTop: '5@s',
  },
  buttonView: {alignItems: 'center', marginVertical: 100},
});
