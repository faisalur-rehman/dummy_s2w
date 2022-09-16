import React from 'react';
import {Modal, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import NotifyFocusedIcon from '../../assets/images/SvgImages/NotifyFocusedIcon';
import {colors} from '../../utils/theme';
import InfoModalComponent from './InfoModalComponent';
import CancelIcon from '../../assets/images/SvgImages/CancelIcon';
import MobileIcon from '../../assets/images/SvgImages/MobileIcon';
import {ScaledSheet} from 'react-native-size-matters';
import PrimaryButton from '../Buttons/PrimaryButton';
import UploadArrow from '../../assets/images/SvgImages/UploadArrow';

const UploadModal = ({modalVisible, handleModalClose}) => {
  return (
    <View style={[modalVisible && styles.blurBackground]}>
      <Modal animationType="none" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <InfoModalComponent style={styles.containerView} info={true}>
              <View style={styles.headerView}>
                <Text style={styles.uploaddoc}>Upload Documents</Text>

                <TouchableOpacity
                  style={styles.modalheader}
                  onPress={handleModalClose}>
                  <CancelIcon />
                </TouchableOpacity>
              </View>

              <View style={styles.boxView}>
                <UploadArrow/>
                <Text style={styles.boxtxt}>Upload or Drag file here</Text>

              </View>

              <PrimaryButton
                 title={"Save"}
                 style={styles.button}
              />
            </InfoModalComponent>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default UploadModal;

const styles = ScaledSheet.create({
  containerView: {
    padding: 0,
  },
  blurBackground: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '70%',
    height: '43%',
    top: '15@s',
    borderRadius: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalheader: {
    marginRight: '10@s',
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor:"green",
    width: '90%',
    marginVertical: '15@s',
    marginHorizontal: '10@s',
  },
  
  uploaddoc: {
    marginLeft: '15@s',
    fontSize: '16@s',
    color: colors.labelBlackColor,
    fontWeight: '700',
  },
 boxView:{
    width:"70%",
    height:"50%",
    borderColor:"#979797",
    borderWidth:1,
   marginTop:"20@s",
    marginHorizontal:"10@s",
    marginBottom:"8@s",

    borderRadius:"10@s",
   justifyContent:"flex-end",
    alignItems:"center",
 },
 button:{
    width:"60%",
    height:"50@s",marginTop:"8@s"
   
 },boxtxt:{
    fontSize:"14@s",
    color:"#979797",
   marginBottom:"15@s",
   marginTop:"22@s"
 }
});
