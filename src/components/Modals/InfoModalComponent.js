import React from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {colors, fonts} from '../../utils/theme';
import PrimaryButton from '../Buttons/PrimaryButton';

const InfoModalComponent = ({
  icon,
  time,
  title,
  description = 'You have a doctor`s appointment with Dr. Piter Quiela at 10 AM',
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconView}>{icon}</View>
      <Text style={styles.timeStyle}>{time}</Text>
      <Text style={styles.titleStyle}>{title}</Text>
      <Text style={styles.descriptionStyle}>{description}</Text>
      <View style={styles.buttonView}>
        <PrimaryButton
          title={'Ok'}
          onPress={onPress}
          style={styles.customButtonStyle}
        />
      </View>
    </View>
  );
};

export default InfoModalComponent;

const styles = ScaledSheet.create({
  container: {
    borderRadius: '14@s',
    padding: '35@s',
    alignItems: 'center',
    position: 'relative',
  },
  iconView: {
    borderRadius: '80@s',
    alignItems: 'center',
    backgroundColor: colors.whiteColor,
    padding: '28@s',
    position: 'absolute',
    top: '-30@s',
    marginBottomL: '50@s',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 2,
  },
  timeStyle: {
    fontFamily: fonts.nunito_semi_bold,
    fontSize: '12@s',
    color: colors.grayTextColor,
    marginVertical: '7@s',
    position: 'absolute',
    top: '10@s',
    right: '10@s',
  },
  titleStyle: {
    fontFamily: fonts.nunito_bold,
    fontSize: '20@s',
    color: colors.labelBlackColor,
    marginVertical: '10@s',
    marginTop: '20@s',
  },
  descriptionStyle: {
    fontFamily: fonts.nunito_regular,
    fontSize: '14@s',
    color: colors.grayTextColor,
    marginVertical: '7@s',
    textAlign: 'center',
  },
  customButtonStyle: {
    width: '150@s',
    marginVertical: '15@s',
  },
});
