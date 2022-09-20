import AsyncStorage from '@react-native-async-storage/async-storage';

class Storage {
  static async retrieveData(key) {
    try {
      if (key) {
        const retrievedItem = await AsyncStorage.getItem(key);
        const item = JSON.parse(retrievedItem);
        return item;
      }
    } catch (error) {}
  }

  static async storeData(key, value) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {}
  }

  static async mergeData(key, value) {
    try {
      await AsyncStorage.mergeItem(key, JSON.stringify(value));
    } catch (error) {}
  }

  static async getAllKeys() {
    try {
      const allKeys = await AsyncStorage.getAllKeys();
      return allKeys;
    } catch (error) {}
  }

  static async removeData(key, value) {
    try {
      const res = await AsyncStorage.removeItem(key);
      console.log('res', res);
    } catch (error) {}
  }
  static async clearAllData() {
    try {
      const res = await AsyncStorage.clear();
      console.log('res', res);
    } catch (error) {}
  }
}
export default Storage;
