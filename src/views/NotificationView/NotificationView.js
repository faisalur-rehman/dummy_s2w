import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {colors, fonts} from '../../utils/theme';

const NotificationView = ({
  icon,
  title,
  description,
  callDuration,
  time,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.iconView}>{icon}</View>
      <View style={styles.notifcationDescriptionView}>
        <Text style={styles.titleStyle}>{title}</Text>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionStyle}>{description}</Text>
          <Text style={styles.descriptionStyle}>{callDuration}</Text>
        </View>
        <Text style={styles.timeStyle}>{time}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NotificationView;

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10@s',
    backgroundColor: colors.lightNotifcationColor,
    margin: '10@s',
    marginVertical: '5@s',
    borderRadius: '14@s',
    height: '90@s',
  },
  iconView: {
    backgroundColor: colors.primaryButtonColor,
    padding: '20@s',
    borderRadius: '14@s',
  },
  notifcationDescriptionView: {
    width: '80%',
  },
  descriptionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleStyle: {
    color: colors.labelBlackColor,
    fontSize: '16@s',
    fontFamily: fonts.nunito_bold,
    marginBottom: '4@s',
  },
  descriptionStyle: {
    fontSize: '12@s',
    fontFamily: fonts.nunito_semi_bold,
    color: colors.grayTextColor,
    marginBottom: '4@s',
  },
  timeStyle: {
    color: colors.labelBlackColor,
    fontFamily: fonts.nunito_regular,
    fontSize: '12@s',
  },
});
