import React from 'react';
import auth from '../../firebase.init'
import { useAuthState } from 'react-firebase-hooks/auth';
import {useLocation,Navigate} from "react-router-dom";
import Loading from '../Loading/Loading';

const RequireAuth = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
  let location = useLocation();

    if(loading){return <Loading />}
    if(!user){
        return <Navigate to='/login' state={{from: location}} replace />
    }
    return children
};

export default RequireAuth;