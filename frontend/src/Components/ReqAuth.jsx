import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom';

const ReqAuth = ({children}) => {
    const location=useLocation();
    const auth=useSelector(state=>state.Auth.isAuth);
    console.log(auth);
    if(!auth){
        return <Navigate to='/login' state={{from:location }} replace />
    }
  return children
};

export default ReqAuth;
