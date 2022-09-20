import {useState} from 'react';
import {handleError} from '../utils/helpers';

export const useSendApiRequest = apiFunc => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  const handleApi = async apiData => {
    setIsLoading(true);
    try {
      const {data: result} = await apiFunc(apiData);
      setData(result);
      setIsLoading(false);

      return result;
    } catch (error) {
      handleError(
        error.response?.data?.errors[0]?.description || 'Something went wrong.',
        'Validation Error',
      );
    }
    setIsLoading(false);
  };
  return {isLoading, data, handleApi};
};
