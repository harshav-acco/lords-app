import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import InputField from '../../common-components/inputField';
import Toaster from '../../common-components/toaster';
import CustomButton from '../../common-components/button';
import NavigationLink from "../../common-components/navigationLink";

import { useAuth } from '../../contexts/AuthContext';

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { login } = useAuth();
    const navigateTo = useNavigate();

    async function handleLogin(e) {
        e.preventDefault();
        setError("");

        if (!email || !password) {
            setError("Please enter email and password");
            return;
        }

        try {
            await login(email, password);
            navigateTo("/main");
        } catch (e) {
            console.log(e);
            setError("failed to login");
        }
    }

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
                handleClick={handleLogin}
            />
            <NavigationLink 
                text="Register"
                navigateTo="/signup"
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
