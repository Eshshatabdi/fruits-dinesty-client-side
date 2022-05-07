import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/google (1).png'
import Loading from '../../Loading/Loading';

const GoogleLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    let showError;


    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        showError = <p className='text-danger'>Error:{error?.message}</p>

    };
    if (user) {
        navigate(from, { replace: true });
    }




    return (
        <div>
            {showError}
            <button onClick={() => signInWithGoogle()} className='btn btn-light w-50 d-block mx-auto my-2'>
                <img src={google} alt="" />
                <span className='px-3'> Continue with Google</span></button>


        </div>
    );
};

export default GoogleLogin;