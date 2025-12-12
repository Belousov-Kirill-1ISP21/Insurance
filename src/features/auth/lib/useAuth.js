import { useSelector, useDispatch } from 'react-redux';
import { logout } from '@shared/store/slices/authSlice';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated, token } = useSelector(state => state.auth);
  
  return {
    user,
    isAuthenticated,
    token,
    login: () => {}, 
    logout: () => dispatch(logout())
  };
};