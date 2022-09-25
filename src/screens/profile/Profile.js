import React, {useEffect, useState} from 'react';
import {Alert, FlatList, Image, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import MenuDots from '../../assets/images/SvgImages/MenuDots';
import ProfileModal from '../../components/Modals/ProfileModal';
import UploadModal from '../../components/Modals/UploadModal';
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader';
import ProfileReports from '../../components/ProfileReports/ProfileReports';
import ReportsComponent from '../../components/Reports/ReportsComponent';
import {launchImageLibrary} from 'react-native-image-picker';
import ProfileHeaderIcon from '../../assets/images/SvgImages/ProfileheaderIcon';
import {useSendApiRequest} from '../../hooks/useApiRequest';
import UpdateImageModal from '../../components/Modals/UpdateImageModal';
import {getProfile} from '../../apis/auth';

const Profile = () => {
  const {isLoading, handleApi} = useSendApiRequest(getProfile);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [uploadModal, setUploadModal] = useState(false);
  const [updateImageModal, setUpdateImage] = useState(false);
  const [imagedata, setImageData] = useState({});
  const [photo, setPhoto] = useState('');
  const [emptyphoto, setEmptyPhoto] = useState(false);
  const [profileData, setProfileData] = useState();
  const [selected, setSelected] = useState(false);

  // const selectFile = () => {
  //   const option = {
  //     noData: true,
  //   };
  //   launchImageLibrary(option, response => {
  //     console.log('response', response.didCancel);
  //     if (response.didCancel == true) {
  //       console.log('User Cancelled to Upload the Image');
  //     } else {
  //       setImageData(response);
  //       console.log('response data', response);
  //       console.log('Inside it', response.assets[0].uri);
  //       let getImage = response.assets[0].uri;
  //       console.log('getImage', getImage);

  //       setPhoto(getImage);
  //       setSelected(true);
  //     }
  //   });
  // };
  const handleProfile = async () => {
    try {
      const response = await handleApi();
      // console.log('response in profile screen', response);
      setProfileData(response);
      setEmptyPhoto(true);
      // console.log("get profile data",response);
    } catch (_) {}
  };

  // const updateProfile = async () => {
  //   alert("called")
  //   // try {
  //   //   const response = await handleApi();
  //   //   console.log('response in profile screen', response);
  //   //   setProfileData(response);
  //   //   setEmptyPhoto(true);
  //   //   console.log(response.email);
  //   // } catch (_) {}
  // };

  const handleModalVisibility = () => {
    setIsModalVisible(prev => !prev);
  };
  const handleUploadModal = () => {
    setUploadModal(prev => !prev);
  };
  const handleUpdateModal = () => {
    setUpdateImage(prev => !prev);
  };
  useEffect(() => {
    handleProfile();
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ProfileHeader
        title={profileData?.firstName}
        description={profileData?.email}
        onPressInfo={handleModalVisibility}
        onPressEditImg={handleUpdateModal}
        onPressEdit={handleUpdateModal}
        profileicon={
          emptyphoto ? (
            <Image
              source={
                profileData?.imagePath ? {uri: profileData?.imagePath} : null
              }
              style={styles.profileimage}
              resizeMode="cover"
            />
          ) : null
          // <ProfileHeaderIcon />
        }
      />
      <ProfileModal
        modalVisible={isModalVisible}
        handleModalClose={handleModalVisibility}
        getData={profileData}
      />
      <UpdateImageModal
        modalVisible={updateImageModal}
        handleModalClose={handleUpdateModal}
        getData={profileData}
        handleResponse={handleProfile}
        
        // onPress={selectFile}
        // onPressbutton={updateProfile}
        profileimg={
          selected ? (
            <Image
              source={photo ? {uri: photo} : null}
              style={styles.profileimage}
              resizeMode="stretch"
            />
          ) : (
            <Image
              source={
                profileData?.imagePath ? {uri: profileData?.imagePath} : null
              }
              style={styles.profileimage}
              resizeMode="stretch"
            />
          )
        }
      />

      <ProfileReports onPress={handleUploadModal} />
      <UploadModal
        modalVisible={uploadModal}
        handleModalClose={handleUploadModal}
      />
      <ReportsComponent pending={true} style={styles.pending} />
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatlistStyles}
        data={[1, 2]}
        keyExtractor={item => item}
        renderItem={() => <ReportsComponent icon={<MenuDots />} />}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  pending: {
    backgroundColor: '#FFCECE',
    borderRadius: '15@s',
  },
  report: {
    width: '38%',
    height: '12%',
    alignSelf: 'flex-end',
    marginHorizontal: 60,
  },
  profileimage: {
    height: '60@s',
    width: '60@s',
    borderRadius: '30@s',
  },
});

export default Profile;
