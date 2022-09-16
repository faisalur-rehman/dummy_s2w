import React, {useState} from 'react';
import {FlatList, Image, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import MenuDots from '../../assets/images/SvgImages/MenuDots';
import ProfileModal from '../../components/Modals/ProfileModal';
import UploadModal from '../../components/Modals/UploadModal';
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader';
import ProfileReports from '../../components/ProfileReports/ProfileReports';
import ReportsComponent from '../../components/Reports/ReportsComponent';
// import ImagePicker from 'react-native-image-picker';
// import * as ImagePicker from 'react-native-image-picker'
// var ImagePicker = require('react-native-image-picker');
import {launchImageLibrary} from 'react-native-image-picker';
import ProfileHeaderIcon from '../../assets/images/SvgImages/ProfileheaderIcon';

const Profile = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [uploadModal, setUploadModal] = useState(false);
  const [imagedata, setImageData] = useState({});
  const [photo, setPhoto] = useState('');
  const [emptyphoto, setEmptyPhoto] = useState(false);

  const selectFile = () => {
    console.log('inside slect');
    const option = {
      noData: true,
    };
    launchImageLibrary(option, response => {
      // console.log("response", response);
      // let getImage =
      console.log('response', response.didCancel);
      if (response.didCancel == true) {
        console.log('User Cancelled to Upload the Image');
      } else {
        setImageData(response);
        console.log('response data', response);
        console.log('Inside it', response.assets[0].uri);
        let getImage = response.assets[0].uri;
        console.log('getImage', getImage);
        setEmptyPhoto(true);
        setPhoto(getImage);
      }
      // if (response.assets[0].uri ) {
      //     console.log("Inside it",response.assets[0].uri)
      //     let getImage = response.assets[0].uri;
      //     console.log("getImage", getImage);
      //     setPhotos(getImage)
      // }
    });
  };

  const handleModalVisibility = () => {
    setIsModalVisible(prev => !prev);
  };
  const handleUploadModal = () => {
    setUploadModal(prev => !prev);
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ProfileHeader
        title={'Rayan,Azhari'}
        description="userprofile@gmail.com"
        onPress={handleModalVisibility}
        handlePress={selectFile}
        profileicon={
          emptyphoto ? (
            <Image
              source={photo ? {uri: photo} : null}
              style={styles.profileimage}
              resizeMode="stretch"
            />
          ) : (
            <ProfileHeaderIcon />
          )
        }
      />
      <ProfileModal
        modalVisible={isModalVisible}
        handleModalClose={handleModalVisibility}
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
    borderRadius: '25@s',
  },
});

export default Profile;
