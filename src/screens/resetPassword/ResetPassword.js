import React, {useState} from 'react';
import {Formik} from 'formik';
import {View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import * as Yup from 'yup';
import PasswordEyeIcon from '../../assets/images/SvgImages/EyeIcon';
import HiddenEye from '../../assets/images/SvgImages/HiddenEye';
import AuthenticationWrapper from '../../components/AuthenticationWrapper/AuthenticationWrapper';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import TextField from '../../components/TextFields/TextField';
import {NAVIGATION_ROUTES} from '../../navigations/navigationRoutes';
import {colors} from '../../utils/theme';

const ResetPasswordScreen = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const loginValidationSchema = Yup.object().shape({
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });
  return (
    <AuthenticationWrapper title="Reset Password">
      <Formik
        initialValues={{confirmPassword: '', password: ''}}
        validationSchema={loginValidationSchema}
        onSubmit={() => navigation.navigate(NAVIGATION_ROUTES.LOGIN)}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <>
            <TextField
              placeholder="*******"
              label="Password"
              secureTextEntry={showPassword ? false : true}
              icon={showPassword ? <PasswordEyeIcon /> : <HiddenEye />}
              onPress={() => setShowPassword(prev => !prev)}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              error={errors.password}
            />
            <TextField
              placeholder="*******"
              label="Confirm Password"
              secureTextEntry={showConfirmPassword ? false : true}
              icon={showConfirmPassword ? <PasswordEyeIcon /> : <HiddenEye />}
              onPress={() => setShowConfirmPassword(prev => !prev)}
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
              error={errors.confirmPassword}
            />
            <View style={{alignItems: 'center', marginVertical: 100}}>
              <PrimaryButton title={'Save'} onPress={handleSubmit} />
            </View>
          </>
        )}
      </Formik>
    </AuthenticationWrapper>
  );
};

export default ResetPasswordScreen;

const styles = ScaledSheet.create({
  forgotPassword: {
    textAlign: 'right',
    color: colors.primaryButtonColor,
    marginTop: '5@s',
    marginRight: '23@s',
  },
});
