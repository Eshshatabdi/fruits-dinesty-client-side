import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/google (1).png'

const GoogleLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let showError;
    if (error) {
        showError = <p className='text-danger'>Error:{error?.message}</p>

    };
    if (user) {
        navigate('/home')

    }
    return (
        <div>
            {showError}
            <button onClick={() => signInWithGoogle()} className='btn btn-dark w-50 d-block mx-auto my-2'>
                <img src={google} alt="" />
                <span className='px-3'> Continue with Google</span></button>


        </div>
    );
};

export default GoogleLogin;