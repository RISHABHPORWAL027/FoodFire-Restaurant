import React from 'react'
import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';

import { REACT_APP_CLIENT_ID } from '../constants';

const GoogleAuth = () => {


    const responseGoogle = (response) => {
        console.log("logged In",response);
    }

    return (
        <>    <GoogleLogin
            clientId={REACT_APP_CLIENT_ID}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
        </>

    )
}

export default GoogleAuth