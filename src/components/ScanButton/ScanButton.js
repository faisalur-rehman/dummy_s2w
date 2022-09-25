import React from 'react';
import {TouchableOpacity, View, Text,Platform,Image} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../utils/theme';
import * as Progress from 'react-native-progress'


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
    <View style={{alignItems: 'center',marginRight:15}}>
        <Progress.Circle
          // indeterminate={true}
          animated={false}
          progress={0.79}
          color={colors.highRiskColor}
          unfilledColor={colors.unfilledGraphColor}
          showsText
          borderColor="none"
          thickness={7}
          size={65}
          formatText={() =>
            <View>
              <Image 
              style={{width:32,height:32,alignSelf:"center"}}
            source={require('../../assets/images/scan.png')}/> 

            </View> }
          textStyle={{
        alignSelf:"center"
          }}
        />
        {/* <Text style={styles.date}>Friday 27th July, 12:34pm</Text> */}
      </View>
    {/* <View style={styles.iconview}>{scanIcon && scanIcon}</View> */}
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
