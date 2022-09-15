import React from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import NotifyFocusedIcon from '../../assets/images/SvgImages/NotifyFocusedIcon';
import InfoModalComponent from './InfoModalComponent';

const NotificationModal = ({modalVisible, handleModalClose}) => {
  return (
    <View style={[modalVisible && styles.blurBackground]}>
      <Modal animationType="none" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <InfoModalComponent
              time={'08:00 AM'}
              title="Notification Selected"
              icon={<NotifyFocusedIcon />}
              onPress={handleModalClose}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default NotificationModal;

const styles = StyleSheet.create({
  blurBackground: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.32)',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    // padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
