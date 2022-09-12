import React from 'react';
import {StyleSheet, View} from 'react-native';
import AuthenticationWrapper from '../../components/AuthenticationWrapper/AuthenticationWrapper';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import Dropdown from '../../components/Dropdown/Dropdown';

const EnterClassScreen = () => {
  return (
    <AuthenticationWrapper title="Enter Class">
      <View style={[{zIndex: 99}]}>
        <Dropdown zIndex={3000} label="Class" />
      </View>
      <View style={{zIndex: 9}}>
        <Dropdown zIndex={1000} label="Section" />
      </View>
      <View style={styles.buttonView}>
        <PrimaryButton title={'GO'} />
      </View>
    </AuthenticationWrapper>
  );
};

export default EnterClassScreen;

const styles = StyleSheet.create({
  buttonView: {alignItems: 'center', marginVertical: 100},
});
