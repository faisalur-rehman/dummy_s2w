import React from 'react';
import {FlatList, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import NotifyFocusedIcon from '../../assets/images/SvgImages/NotifyFocusedIcon';
import Header from '../../components/Header/Header';
import {colors} from '../../utils/theme';
import NotificationView from '../../views/NotificationView/NotificationView';

const Notification = () => {
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
        data={[1, 2, 3, 4, 5, 6]}
        keyExtractor={item => item}
        renderItem={() => (
          <NotificationView
            title={'Risk Score'}
            description="76%"
            time={'10:00 AM'}
            callDuration="07:34"
            icon={<NotifyFocusedIcon />}
          />
        )}
      />
    </View>
  );
};

export default Notification;

const styles = ScaledSheet.create({
  container: {flex: 1, backgroundColor: colors.whiteColor},
  flatlistStyles: {
    marginTop: '20@s',
    paddingBottom: '20@s',
  },
});
