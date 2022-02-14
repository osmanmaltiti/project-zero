import { useDispatch } from 'react-redux';
import axios from 'axios';
import { failedGet, getData, initiate } from '../Redux/features/wood-furniture-slice';

export const useApiCall = () => {
  const { token } = JSON.parse(localStorage.getItem('currentUser'));
  const dispatch = useDispatch();
  dispatch(initiate);

  const getAllData = async() => {
    try {
        const res = await axios.get('/items/data', {
          headers:{
            authorization: token
          }
        });
        dispatch(getData(res.data));
    } catch (error) {
        dispatch(failedGet(error));
    }
  }
  return {getAllData}
}

