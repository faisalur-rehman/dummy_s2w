import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Header from '../../components/Header/Header';
import {colors} from '../../utils/theme';
import PrescriptionView from '../../views/PrescriptionView/PrescriptionView';

const Prescription = () => {
  return (
    <View style={styles.container}>
      <Header leftIcon={false} hideIcon title={'Prescriptions'} />
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatlistStyles}
        data={[1, 2, 3, 4, 5, 6]}
        // keyExtractor={item => item}
        renderItem={({item}) => <PrescriptionView />}
      />
    </View>
  );
};

export default Prescription;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteColor,
  },
  flatlistStyles: {
    marginTop: '20@s',
    paddingBottom: '20@s',
  },
});
