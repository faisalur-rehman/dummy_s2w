import React from 'react';
import {TouchableOpacity, View, Text,Platform} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../utils/theme';

//  import PropTypes from 'prop-types'
const ScanButton = ({
  onPress,
  children,
  style,
  icon = undefined,
  valuerange = '',
  lastscan = '',
  time = '',
  scanIcon,
}) => (
  <TouchableOpacity style={[styles.container, style]}>
    <View style={styles.textpercentage}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={styles.value}>{valuerange}</Text>
        {icon && icon}
      </View>
      <Text style={styles.txt}>{lastscan}</Text>
    </View>
    <View style={styles.iconview}>{scanIcon && scanIcon}</View>
  </TouchableOpacity>
);
const styles = ScaledSheet.create({
  container: {
    // elevation: 10,
    backgroundColor: '#FFFFFF',
    marginVertical: '5@s',
    height: '70@s',
    width: '95%',
    borderRadius: 15,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '15@s',
    alignItems: 'center',

    ...Platform.select({
      ios:{
        shadowColor:'#000',
        shadowOffset:{
          width:1,height:3
        },
        shadowOpacity:0.2
      },
      android:{
        elevation:15
      }

    }),
    
    
  },
  textpercentage: {marginHorizontal: '10@s'},
  iconview: {},
  value: {
    fontSize: '24@s',
    color: colors.highRiskColor,
  },
  txt: {
    fontSize: '12@s',
    color: '#000000',
  },
});

export default ScanButton;
