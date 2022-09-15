import {View, Text, ScrollView, Modal, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader';
import ProfileReports from '../../components/ProfileReports/ProfileReports';
// import Reports from '../../views/ReportView/Reports'
import ReportsComponent from '../../components/Reports/ReportsComponent';
import {ScaledSheet} from 'react-native-size-matters';
// import PopUp from '../../components/PopUp/PopUp';

const Profile = () => {
  const [infoModal, setInfoModal] = useState(false);
  const [uploadoMdal, setUploadModal] = useState(false);
  const [reportModal, setReportModal] = useState(false);

  return (
    <View>
      <ProfileHeader
        title={'Rayan,Azhari'}
        description="userprofile@gmail.com"
      />
      <ScrollView>
        <ProfileReports />
        {/* <PopUp visible={uploadoMdal}>
          <TouchableOpacity
            onPress={() => setUploadModal(false)}
            style={{
              alignSelf: 'flex-end',
              marginVertical: 10,
              marginHorizontal: 10,
            }}>
            <Text>Cancel upload</Text>
          </TouchableOpacity>
        </PopUp> */}
        <ReportsComponent pending={true} style={styles.pending} />
        <ReportsComponent />
        {/* <PopUp 
          style={styles.report}
        visible={reportModal}>
          <TouchableOpacity
            onPress={() => setReportModal(false)}
            style={{
              alignSelf: 'flex-end',
              marginVertical: 10,
              marginHorizontal: 10,
            }}>
            <Text>Cancel report</Text>
          </TouchableOpacity>
        </PopUp> */}
        {/* <PopUp visible={infoModal}>
          <TouchableOpacity
            onPress={() => setInfoModal(false)}
            style={{
              alignSelf: 'flex-end',
              marginVertical: 10,
              marginHorizontal: 10,
            }}>
            <Text>Cancel</Text>
          </TouchableOpacity>
        </PopUp> */}
        <ReportsComponent />
      </ScrollView>
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
