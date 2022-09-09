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
import {colors} from '../../utils/theme';

const ResetPasswordScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <AuthenticationWrapper title="Reset Password">
      <SafeAreaView style={{flex: 1}}>
        <TextField
          placeholder="*******"
          label="Password"
          secureTextEntry={showPassword ? false : true}
          icon={showPassword ? <PasswordEyeIcon /> : <HiddenEye />}
          onPress={() => setShowPassword(prev => !prev)}
        />
        <TextField
          placeholder="*******"
          label="Confirm Password"
          secureTextEntry={showConfirmPassword ? false : true}
          icon={showConfirmPassword ? <PasswordEyeIcon /> : <HiddenEye />}
          onPress={() => setShowConfirmPassword(prev => !prev)}
        />
        <View style={{alignItems: 'center', marginVertical: 100}}>
          <PrimaryButton title={'Save'} />
        </View>
      </SafeAreaView>
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
