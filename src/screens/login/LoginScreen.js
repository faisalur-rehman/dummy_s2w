import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import PasswordEyeIcon from '../../assets/images/SvgImages/EyeIcon';
import HiddenEye from '../../assets/images/SvgImages/HiddenEye';
import AuthenticationWrapper from '../../components/AuthenticationWrapper/AuthenticationWrapper';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import TextField from '../../components/TextFields/TextField';
import {NAVIGATION_ROUTES} from '../../navigations/navigationRoutes';
import {colors} from '../../utils/theme';

const LoginScreen = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    navigation.navigate(NAVIGATION_ROUTES.ENTER_CLASS);
  };

  return (
    <AuthenticationWrapper title="Login">
      <SafeAreaView>
        <TextField placeholder="abc@gmail.com" label="Email" />
        <TextField
          placeholder="Password"
          label="Password"
          secureTextEntry={showPassword ? false : true}
          icon={showPassword ? <PasswordEyeIcon /> : <HiddenEye />}
          onPress={() => setShowPassword(prev => !prev)}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate(NAVIGATION_ROUTES.RESET_PASSWORD)}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
        <View style={styles.buttonView}>
          <PrimaryButton title={'Login'} onPress={handleLogin} />
        </View>
      </SafeAreaView>
    </AuthenticationWrapper>
  );
};

export default LoginScreen;

const styles = ScaledSheet.create({
  forgotPassword: {
    textAlign: 'right',
    color: colors.primaryButtonColor,
    marginTop: '5@s',
    marginRight: '23@s',
  },
  buttonView: {alignItems: 'center', marginVertical: 100},
});
