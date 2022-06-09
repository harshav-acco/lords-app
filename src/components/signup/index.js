import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import InputField from '../../common-components/inputField';
import Toaster from '../../common-components/toaster';
import CustomButton from '../../common-components/button';
import NavigationLink from '../../common-components/navigationLink';

import { useAuth } from '../../contexts/AuthContext';

const Signup = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigateTo = useNavigate();
    const { signup } = useAuth();

    async function handleSignup(e) {
        e.preventDefault();
        setError("");

        if (!email || !password || !confirmPassword) {
            setError("Please enter email and password");
            return;
        }

        if (password !== confirmPassword) {
            setError("Password and Confirm password should match");
            return;
        }

        try {
            await signup(email, password);
            navigateTo("/login");
        } catch (e) {
            console.log(e);
            setError("failed to sign up");
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
            <InputField 
                header={'Confirm Password'}
                type={'password'}
                name={'confirmPassword'}
                handleChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
            />
            <CustomButton 
                disable={false}
                text={'Sign Up'}
                handleClick={handleSignup}
            />
            <NavigationLink 
                text="Login"
                navigateTo="/login"
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
};

export default Signup;
