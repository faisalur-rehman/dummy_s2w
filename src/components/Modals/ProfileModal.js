import React,{useState} from 'react';
import {Modal, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import NotifyFocusedIcon from '../../assets/images/SvgImages/NotifyFocusedIcon';
import {colors} from '../../utils/theme';
import InfoModalComponent from './InfoModalComponent';
import CancelIcon from '../../assets/images/SvgImages/CancelIcon';
import MobileIcon from '../../assets/images/SvgImages/MobileIcon';
import {ScaledSheet} from 'react-native-size-matters';
import RoleIcon from '../../assets/images/SvgImages/RoleIcon';
import OrganizationIcon from '../../assets/images/SvgImages/OrganizationIcon';
import {Formik} from 'formik';
import * as Yup from 'yup';

const ProfileModal = ({
  modalVisible, 
  handleModalClose,
  getData
}) => {
  const [profileData, setProfileData] = useState(getData);

  console.log("data at info  modal",getData)
  
  const data = [
    {
      key: '1',
      icon: <MobileIcon />,
      title: 'Phone Number',
      value: getData?.phone
    },
    {
      key: '2',
      icon: <OrganizationIcon />,
      title: 'Organization Code',
      value: getData?.companyId,
    },
    {key: '3', icon: <RoleIcon />, title: 'Role', value: getData?.roleName},
    {key: '4', icon: <OrganizationIcon />, title: 'Class', value: '8th'},
  ];
  return (
    <View style={[modalVisible && styles.blurBackground]}>
      <Modal animationType="none" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <InfoModalComponent style={styles.containerView} info={true}>
              <TouchableOpacity
                style={styles.modalheader}
                onPress={handleModalClose}>
                <CancelIcon />
              </TouchableOpacity>
              {data.map((item, index) => (
                <View key={index} style={styles.contentView}>
                  <View style={styles.icon}>{item.icon}</View>

                  <View style={styles.textView}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.value}>{item.value}</Text>
                  </View>
                </View>
              ))}
            </InfoModalComponent>
          </View>
        </View>
        {/* <Formik
          initialValues={{loginName: 'a@gmail.com', password: '1'}}
          // validationSchema={loginValidationSchema}
          // onSubmit={handleLogin}
          >
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
        </Formik> */}
      </Modal>
    </View>
  );
};

export default ProfileModal;

const styles = ScaledSheet.create({
  containerView: {
    padding: 0,
  },
  blurBackground: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '85%',
    height: '50%',
    top: '20@s',
    borderRadius: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalheader: {
    alignSelf: 'flex-end',
    marginVertical: '20@s',
    right: '15@s',
  },
  contentView: {
    flexDirection: 'row',
    backgroundColor: '#FDFDFD',
    height: '15%',
    // padding:10,
    marginVertical: '10@s',
    width: '90%',
  },
  textView: {
    marginLeft: '20@s',
    justifyContent: 'center',
  },
  title: {
    marginVertical: '5@s',
    fontSize: '16@s',
    color: colors.labelBlackColor,
    fontWeight: '700',
  },
  value: {
    marginVertical: '5@s',
    fontSize: '14@s',
    color: colors.labelBlackColor,
    fontWeight: '600',
  },
  icon: {
    alignSelf: 'center',
  },
});
