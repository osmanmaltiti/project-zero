import React from "react";
import inputHook from "../Custom-hooks/useInput";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import '../Styles/sign/sign.css';
import { signIn, signUp } from "../Redux/features/sign-slice";


export const LogIn = (props) => {
    const [bindUsername, resetUsername] = inputHook('');
    const [bindPassword, resetPassword] = inputHook('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogSubmit = (e) => {
        e.preventDefault();
        resetPassword();
        resetUsername();
        dispatch(
            signIn({
                email: bindUsername.value,
                password: bindPassword.value,
                navigate: () => {
                    navigate('/homepage')
                }
            })
        );
    }
    return(
        <div id='signinform'>
            <form id='signform' onSubmit={handleLogSubmit}>
                <h3 id="formHead">SIGN IN</h3>
                <div id='username'><p>Username/Email</p>
                <input className="formInput" name='username' type="text" {...bindUsername}/></div>
                <div id="pass"><p>Password</p>
                <input className="formInput" name='password' type="password" {...bindPassword}/></div>
                <button id="login-button" type="submit">LOG IN</button>
            </form>
            <button id="google-sign" onClick={handleLogSubmit}>SIGN IN WITH GOOGLE</button>
            <button className='toggle' id="toggle-button" onClick={props.handleClick}>Don't have an account? Sign Up Here</button>
        </div>
    )
}

export const SignUp = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [Username_reg, resetUsername_reg] = inputHook('');
    const [Email_reg, resetEmail_reg] = inputHook('');
    const [Password_reg, resetPassword_reg] = inputHook('');
    const [Re_password_reg, resetRepassword_reg] = inputHook('');
    const handleRegSubmit = (e) => {
        e.preventDefault();
        dispatch(
            signUp({
                username: Username_reg.value,
                email: Email_reg.value,
                password: Password_reg.value,
                navigate: () => {
                    navigate('/homepage')
                }
            })
        );
        resetUsername_reg();
        resetEmail_reg();
        resetPassword_reg();
        resetRepassword_reg();
    }
    return(
        <div id='signupform'>
            <form id='sign-form' action='POST' onSubmit={handleRegSubmit}>
                <h3 id="formHead">SIGN UP</h3>
                <div id='sign-label'><p>Username</p>
                <input className="formInput" type="text" 
                {...Username_reg}/></div>
                <div id='sign-label'><p>Email</p>
                <input className="formInput"  type="email" 
                {...Email_reg}/></div>
                <div id='sign-label'><p>Password</p>
                <input className="formInput" type="password" 
                {...Password_reg}/></div>
                <div id='sign-label'><p>Confirm Password</p>
                <input className="formInput" type="password" 
                {...Re_password_reg}/></div>
                <button id="register-button" type="submit">REGISTER</button>
            </form>
            <button className='toggle' id="toggle-button-2" onClick={props.handleClick}>Already have an account? Log In Here</button>
        </div>
    )
}