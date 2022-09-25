import React, {useState, useEffect} from 'react';
import {
  Modal,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import axios from 'axios';
import NotifyFocusedIcon from '../../assets/images/SvgImages/NotifyFocusedIcon';
import {colors} from '../../utils/theme';
import InfoModalComponent from './InfoModalComponent';
import CancelIcon from '../../assets/images/SvgImages/CancelIcon';
import MobileIcon from '../../assets/images/SvgImages/MobileIcon';
import {ScaledSheet} from 'react-native-size-matters';
import PrimaryButton from '../Buttons/PrimaryButton';
import UploadArrow from '../../assets/images/SvgImages/UploadArrow';
import ProfileEdit from '../../assets/images/SvgImages/ProfileEdit';
import {launchImageLibrary} from 'react-native-image-picker';
// import { updateProfile } from '../../apis/auth';
import {useSendApiRequest} from '../../hooks/useApiRequest';
// import {getProfile} from '../../apis/auth';
import {updateProfile} from '../../apis/auth';
import Storage from '../../utils/Storage';

const UpdateImageModal = ({
  modalVisible,
  handleModalClose,
  onPress,
  profileimg,
  onPressbutton,
  getData,
  handleResponse,
}) => {
  // const {isLoading, handleApi} = useSendApiRequest(updateProfile);
  const [profileData, setProfileData] = useState(getData);
  const [imagedata, setImageData] = useState();
  const [photo, setPhoto] = useState('');
  const [selected, setSelected] = useState(false);
  const [bearertoken, setToken] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getToken = async () => {
    const token = await Storage.retrieveData('token');
    setToken(token);
  };

  const updateProfileImage = async () => {
    let data = {
      profileData,

      ProfileImage: {
        uri: imagedata.uri,
        name: imagedata.fileName,
        type: imagedata.type,
      },
    };

    // console.log("data merged",data)
    let formData = new FormData();

    for (let key in data) {
      formData.append(key, data[key]);
    }

    // console.log("data passed to server in form data ",formData)

    setIsLoading(true);
    try {
      // make axios post request
      const response = await axios({
        method: 'put',
        url: 'https://stage01.sensights.ai:8080/api/Accounts/Profile/Profile',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: 'Bearer ' + bearertoken,
        },
      });
      console.log('response in axios', response.data);
      setProfileData(response.data);
      setIsLoading(false);
      handleResponse();
      setSelected(false);
    } catch (error) {
      console.log('error console put method', error.response);
    }
    // try {
    //   const response = await handleApi(form_data);

    //   console.log("put api response",response)

    // } catch (_) {}
  };
  const selectFile = () => {
    const option = {
      noData: true,
    };
    launchImageLibrary(option, response => {
      console.log('response', response.didCancel);
      if (response.didCancel == true) {
        console.log('User Cancelled to Upload the Image');
      } else {
        let getImage = response.assets[0].uri;
        let imageData = response.assets[0];
        console.log('image data is here', imageData);
        setImageData(imageData);
        // console.log('getImage', getImage);

        setPhoto(getImage);
        setSelected(true);
      }
    });
  };

  useEffect(() => {
    // handleProfile();
    getToken();
  }, []);
  return (
    <View style={[modalVisible && styles.blurBackground]}>
      <Modal animationType="none" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <InfoModalComponent style={styles.containerView} info={true}>
              <View style={styles.headerView}>
                <Text style={styles.uploaddoc}>Update Profile Pic</Text>

                <TouchableOpacity
                  style={styles.modalheader}
                  onPress={handleModalClose}>
                  <CancelIcon />
                </TouchableOpacity>
              </View>
              <View>
                <View style={styles.boxView}>
                  {selected ? (
                    <Image
                      source={photo ? {uri: photo} : null}
                      style={styles.profileimage}
                      resizeMode="stretch"
                    />
                  ) : (
                    <Image
                      source={
                        getData?.imagePath
                          ? {uri: getData?.imagePath}
                          : null
                      }
                      style={styles.profileimage}
                      resizeMode="cover"
                    />
                  )}
                  <TouchableOpacity
                    onPress={selectFile}
                    style={{position: 'absolute', right: 0, bottom: 0}}>
                    <ProfileEdit />
                  </TouchableOpacity>
                </View>
              </View>

              <PrimaryButton
                title={'Save'}
                style={styles.button}
                onPress={updateProfileImage}
                isLoading={isLoading}
              />
            </InfoModalComponent>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default UpdateImageModal;

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
    width: '60%',
    height: '35%',
    top: '10@s',
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
    marginRight: '10@s',
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor:"green",
    width: '90%',
    marginVertical: '15@s',
    marginHorizontal: '10@s',
  },

  uploaddoc: {
    marginLeft: '15@s',
    fontSize: '16@s',
    color: colors.labelBlackColor,
    fontWeight: '700',
  },
  boxView: {
    width: 90,
    height: 90,
    borderColor: '#979797',
    borderWidth: 1,
    marginTop: '20@s',
    marginHorizontal: '10@s',
    marginBottom: '5@s',
    justifyContent: 'center',
    alignItems: 'center',
    // borderRadius:90,
    // color: colors.labelBlackColor,

    borderRadius: '45@s',
    //    justifyContent:"flex-end",
    // alignItems:"center",
  },
  button: {
    width: '60%',
    height: '50@s',
    marginTop: '15@s',
  },
  boxtxt: {
    fontSize: '14@s',
    color: '#979797',
    marginBottom: '15@s',
    marginTop: '22@s',
  },
  profileimage: {
    height: '60@s',
    width: '60@s',
    borderRadius: '30@s'
  },
});
