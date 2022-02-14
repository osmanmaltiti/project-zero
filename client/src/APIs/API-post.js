import axios from 'axios';
import { useDispatch } from 'react-redux';
import { signIn, signUp } from '../Redux/features/sign-slice';

//SIGN IN AND SIGN UP
export const useSign = () => {
  const dispatch = useDispatch();
  const postSignIn = async(signin_data) => {
    const { email, password, navigate } = signin_data;
    try {
      const res = await axios.post('/users/login', { email, password });
      const { auth } = res.data;
      if(auth){
        dispatch(signIn({data: res.data, navigate}));
      } else {
        alert(res.data.message)
      }
    } catch (error) {
      alert('Failed to Sign In');
    }
  };

  const postSignUp = async(signup_data) => {
    const { username, email, password, number, navigate } = signup_data;
    try {
      const res = await axios.post('/users/signup', { username, email, password, number });
      const { auth } = res.data;
      if(auth){
        dispatch(signUp({data: res.data, navigate}));
      } else {
        alert(res.data.message)
      }
    } catch (error) {
      alert('Failed to Register');
    }
  };

  return { postSignIn, postSignUp }
}