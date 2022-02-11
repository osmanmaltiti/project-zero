import { useDispatch } from 'react-redux';
import axios from 'axios';
import { failedGet, getData, initiate } from '../Redux/features/wood-furniture-slice';

export const useApiCall = () => {
  const dispatch = useDispatch();
  dispatch(initiate);
  
  const getAllData = async() => {
    try {
        const res = await axios.get('/allItems/api/data');
        dispatch(getData(res.data))    
    } catch (error) {
        dispatch(failedGet(error))
    }
  }
  return {getAllData}
}

