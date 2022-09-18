import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import CheckBox from '../../assets/images/SvgImages/CheckBox';
import PdfFileImage from '../../assets/images/SvgImages/PdfFileIcon';
import MenuDots from '../../assets/images/SvgImages/MenuDots';
import {colors} from '../../utils/theme';

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider,
} from 'react-native-popup-menu';
import EditIcon from '../../assets/images/SvgImages/EditIcon';
import DeleteIcon from '../../assets/images/SvgImages/DeleteIcon';
// import { PopUpMenu } from '../Modals/PopUpmenu';

const ReportsComponent = ({pending = false, style, onPress, icon}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.mainView, {...style}]}>
        {pending ? (
          <>
            <View style={styles.leftViewPending}>
              <Text style={styles.pendingtxt}>1 Report is Pending</Text>
            </View>

            <View style={styles.rightViewPending}>
              <Text style={styles.datetxt}>Jan 2 | </Text>
              <Text style={styles.timetxt}>8:30 PM</Text>
            </View>
          </>
        ) : (
          <>
            <View style={styles.leftView}>
              <View style={styles.checkBox}>
                <CheckBox />
              </View>
              <View style={styles.pdfimg}>
                <PdfFileImage />
              </View>

              <Text style={styles.filename}>abc.pdf</Text>
            </View>

            <View style={styles.rightView}>
              <Text style={styles.datetxt}>Jan 2 | </Text>
              <Text style={styles.timetxt}>8:30 PM</Text>

              <Menu onSelect={() => null}>
                <MenuTrigger>
                  <View style={styles.dots}>{icon}</View>
                </MenuTrigger>
                <MenuOptions
                  optionsContainerStyle={{
                    marginTop: 20,
                    marginLeft: -40,
                    padding: 10,
                    width: 140,
                    height: 80,
                  }}>
                  <MenuOption
                    value={2}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                    }}>
                    <EditIcon />
                    <Text style={{color: 'black'}}>Edit</Text>
                  </MenuOption>
                  <MenuOption
                    value={2}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                    }}>
                    <DeleteIcon />
                    <Text style={{color: 'black'}}>Delete</Text>
                  </MenuOption>
                </MenuOptions>
              </Menu>

              {/* <View style={styles.dots}>{icon}</View> */}
            </View>
          </>
        )}
      </View>

      {/* <View>{children}</View> */}
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    backgroundColor: 'white',
  },
  mainView: {
    flexDirection: 'row',
    marginHorizontal: '10@s',
    backgroundColor: '#25BEED30',
    height: '50@s',
    marginTop: '12@s',
    borderRadius: '5@s',
  },
  leftView: {
    width: '55%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  leftViewPending: {
    width: '54%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightView: {
    width: '45%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  rightViewPending: {
    width: '46%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  dots: {
    marginHorizontal: '15@s',
    alignSelf: 'center',
    overflow: 'visible',
    marginTop: '5@s',
  },
  timetxt: {
    marginRight: '10@s',
  },
  timetxtPending: {
    marginRight: '30@s',
  },
  datetxt: {},
  pdfimg: {
    marginHorizontal: '12@s',
  },
  checkBox: {
    marginLeft: '20@s',
  },
  pendingtxt: {
    color: colors.highRiskColor,
    fontSize: '14@s',
    fontWeight: 'bold',
    marginLeft: '12@s',
  },
  filename: {
    color: colors.labelBlackColor,
  },
  provider: {
    marginTop: '15@s',
  },
});

export default ReportsComponent;
