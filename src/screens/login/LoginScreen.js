import React, {useState} from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import PasswordEyeIcon from '../../assets/images/SvgImages/EyeIcon';
import HiddenEye from '../../assets/images/SvgImages/HiddenEye';
import AuthenticationWrapper from '../../components/AuthenticationWrapper/AuthenticationWrapper';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import TextField from '../../components/TextFields/TextField';
import {ButtonVariants} from '../../utils/constants';
import {colors} from '../../utils/theme';

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
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
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
        <View style={styles.buttonView}>
          <PrimaryButton title={'Login'} />
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
