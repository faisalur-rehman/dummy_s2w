import {useState} from 'react';
import {err} from 'react-native-svg/lib/typescript/xml';
import {handleError} from '../utils/helpers';

export const useSendApiRequest = apiFunc => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  const handleApi = async apiData => {
    // console.log('inside handleapi function');
    setIsLoading(true);
    try {
      const {data: result} = await apiFunc(apiData);
      setData(result);
      setIsLoading(false);

      return result;
    } catch (error) {
      console.log('error', error);
      console.log('error response', error.response);
      handleError(
        error.response?.data?.errors[0]?.description || 'Something went wrong.',
        'Validation Error',
        
      );
    }
    setIsLoading(false);
  };
  return {isLoading, data, handleApi};
};
