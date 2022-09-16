import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import NotifyFocusedIcon from '../../assets/images/SvgImages/NotifyFocusedIcon';
import Header from '../../components/Header/Header';
import NotificationModal from '../../components/Modals/NotificationModal';
import {colors} from '../../utils/theme';
import NotificationView from '../../views/NotificationView/NotificationView';

const notificationsArray = [
  {
    title: 'High Risk',
    description: '76%',
    time: '10:00 AM',
    callDuration: '10:34',
    icon: <NotifyFocusedIcon />,
    unread: true,
  },
  {
    title: 'Prescription received',
    description: 'Dr. Peter Quiela',
    time: '10:00 AM',
    callDuration: '10:34',
    icon: <NotifyFocusedIcon />,
    unread: false,
  },
  {
    title: 'Perform Test',
    description: 'Want to show you for the best...',
    time: '10:00 AM',
    callDuration: '10:34',
    icon: <NotifyFocusedIcon />,
    unread: true,
  },
  {
    title: 'Call Recommended',
    description: 'Your Manager recommend to cal...',
    time: '10:00 AM',
    callDuration: '10:34',
    icon: <NotifyFocusedIcon />,
    unread: false,
  },
  {
    title: 'High Risk',
    description: '76%',
    time: '10:00 AM',
    callDuration: '10:34',
    icon: <NotifyFocusedIcon />,
    unread: true,
  },
  {
    title: 'Prescription received',
    description: 'Dr. Peter Quiela',
    time: '10:00 AM',
    callDuration: '10:34',
    icon: <NotifyFocusedIcon />,
    unread: false,
  },
];

const Notification = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleModalVisibility = () => {
    setIsModalVisible(prev => !prev);
  };
  return (
    <View style={styles.container}>
      <Header
        title={'Notifications'}
        description="You have 3 unread messages"
        hideIcon
        leftIcon={false}
        textViewStyle={{alignItems: 'center'}}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatlistStyles}
        data={notificationsArray}
        // keyExtractor={item => item}
        renderItem={({item}) => (
          <NotificationView item={item} onPress={handleModalVisibility} />
        )}
      />
      <NotificationModal
        modalVisible={isModalVisible}
        handleModalClose={handleModalVisibility}
      />
    </View>
  );
};

export default Notification;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteColor,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  flatlistStyles: {
    marginTop: '20@s',
    paddingBottom: '20@s',
  },
});
