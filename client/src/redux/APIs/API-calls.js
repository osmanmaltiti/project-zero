import { useDispatch } from 'react-redux';
import axios from 'axios';
import { failedGet, getData, initiate } from './wood-furniture-slice';

export const useApiCall = async() => {
  const dispatch = useDispatch();
  dispatch(initiate);
  try {
      const res = await axios.get('/allItems/api/data');
      dispatch(getData(res.data))    
  } catch (error) {
      dispatch(failedGet(error))
  }
}

