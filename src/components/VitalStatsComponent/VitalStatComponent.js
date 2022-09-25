import React from 'react';
import {Text, View,Platform} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {colors, fonts} from '../../utils/theme';

const VitalStatComponent = ({icon, readingTitle, value, style,circle}) => {
  return (
    <View style={[styles.container, {...style}]}>
      <View style={{marginHorizontal:5}}>
       
     
      {icon}
      {circle}

      </View>
    
      <View style={styles.textview}>
      <Text 
      numberOfLines={2}
      style={styles.textStyle}>{readingTitle}</Text>
      <Text style={styles.readingStyle}>{value}</Text>
    

      </View>
    
    </View>
  );
};

export default VitalStatComponent;

const styles = ScaledSheet.create({
  container: {
    // borderWidth: '1@s',
    // borderColor: colors.blueBorderColor,
    width: '44%',
    // justifyContent: 'center',
    alignItems: 'center',
    margin: '2@s',
    borderRadius: '15@s',
    height: '60@s',
    backgroundColor: '#FFFFFF',
    marginHorizontal:"8@s",
    marginVertical:"3@s",
    flexDirection:"row",
    paddingHorizontal:"10@s",
    ...Platform.select({
      ios:{
        shadowColor:'#000',
        shadowOffset:{
          width:1,height:3
        },
        shadowOpacity:0.2
      },
      android:{
        elevation:8
      }

    }),
  },
  readingStyle: {
    fontSize: '14@s',
    marginVertical: '1@s',
    color: colors.labelBlackColor,
    fontFamily: fonts.nunito_medium,
   
  },
  textStyle: {
    fontSize: '12@s',
    color: colors.labelBlackColor,
    fontFamily: fonts.nunito_bold,
     width:"100@s"
  },
  textview:{
    marginLeft:"5@s",
    // backgroundColor:"green"
    // marginHorizontal:"5@s",
    // color: colors.labelBlackColor,
  }
});
