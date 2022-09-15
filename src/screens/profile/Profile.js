import {View, FlatList} from 'react-native';
import React, {useState,} from 'react';
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader';
import ProfileReports from '../../components/ProfileReports/ProfileReports';
import ReportsComponent from '../../components/Reports/ReportsComponent';
import {ScaledSheet} from 'react-native-size-matters';
import ProfileModal from '../../components/Modals/ProfileModal';
import UploadModal from '../../components/Modals/UploadModal';

const Profile = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [uploadModal, setUploadModal] = useState(false);
  const handleModalVisibility = () => {
    setIsModalVisible(prev => !prev);
  };
  const handleUploadModal = () => {
    setUploadModal(prev => !prev);
  };


  return (
    <View style={{flex:1,backgroundColor:"white"}}>
      <ProfileHeader
        title={'Rayan,Azhari'}
        description="userprofile@gmail.com"
        onPress={handleModalVisibility}
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
        renderItem={() => (
          <ReportsComponent 
        
        />
         
        )}
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
});

export default Profile;
