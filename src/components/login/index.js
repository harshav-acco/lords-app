import React, { useState } from 'react';

import InputField from '../../common-components/inputField';
import Toaster from '../../common-components/toaster';
import CustomButton from '../../common-components/button';

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    return (
        <>
            <InputField 
                header={'e-mail'}
                type={'email'}
                name={'email'}
                handleChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <InputField 
                header={'Password'}
                type={'password'}
                name={'password'}
                handleChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <CustomButton 
                disable={false}
                text={'Login'}
                handleClick={() => setError("Something is error")}
            />
            {
                error ? 
                <Toaster 
                    statement={error}
                    handleClose={() => setError("")}
                /> : null
            }
        </>
    )
}

export default Login;
