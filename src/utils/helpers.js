import Toast from 'react-native-toast-message';

export const handleError = (text, text1 = '', type = 'error') => {
  type === 'error'
    ? Toast.show({
        type: 'error',
        text1,
        text2: text,
      })
    : Toast.show({
        type: 'success',
        text1,
        text2: text,
      });
};
