import React from "react";
import { useNavigate } from "react-router-dom";
import { useSign } from "../APIs/API-post";
import inputHook from "../Custom-hooks/useInput";
import '../Styles/LandingPage.css'


export const LogIn = (props) => {
    const [bindUsername, resetUsername] = inputHook('');
    const [bindPassword, resetPassword] = inputHook('');
    const navigate = useNavigate();
    const { postSignIn } = useSign();
    const handleLogSubmit = (e) => {
        e.preventDefault();
        resetPassword();
        resetUsername();
        postSignIn({
            email: bindUsername.value,
            password: bindPassword.value,
            navigate: () => {
                navigate('/homepage')
            }
        });
    }
    return(
        <div id='signinform' className="bg-gradient-to-r from-gray-400 to-gray-50 shadow gap-4 mx-auto w-4/5 rounded h-full flex flex-col py-8 
        md:w-96 md:fixed md:right-2 lg:right-8 md:h-fit md:top-1/4">
            <form id='signform' className="w-4/5 mx-auto gap-2 flex flex-col" onSubmit={handleLogSubmit}>
                <h3 className="text-2xl font-right mb-4">SIGN IN</h3>
                <div className="font-roboto"><p>Username/Email</p>
                <input className="w-full pl-2 font-bold h-8 border-2 border-solid border-black rounded" name='username' type="text" {...bindUsername}/></div>
                <div className="font-roboto"><p>Password</p>
                <input className="w-full pl-2 h-8 border-2 font-bold border-solid border-black rounded" name='password' type="password" {...bindPassword}/></div>
                <button className="font-condensed shadow-md text-white text-lg mt-4 hover:cursor-pointer bg-blue-500 w-fit px-8 self-center rounded" type="submit">LOG IN</button>
            </form>
            <button className='font-condensed text-lg' onClick={props.handleClick}>Don't have an account? Sign Up Here</button>
        </div>
    )
}

export const SignUp = (props) => {
    const navigate = useNavigate();
    const [Username_reg, resetUsername_reg] = inputHook('');
    const [Email_reg, resetEmail_reg] = inputHook('');
    const [Number_reg, resetNumber_reg] = inputHook('');
    const [Password_reg, resetPassword_reg] = inputHook('');
    const [Re_password_reg, resetRepassword_reg] = inputHook('');
    const { postSignUp } = useSign();
    const handleRegSubmit = (e) => {
        e.preventDefault();
        postSignUp({
            username: Username_reg.value,
            email: Email_reg.value,
            number: Number_reg.value,
            password: Password_reg.value,
            navigate: () => {
                navigate('/homepage');
            }
        });
        resetUsername_reg();
        resetEmail_reg();
        resetNumber_reg();
        resetPassword_reg();
        resetRepassword_reg();
    }
    return(
        <div className="bg-gradient-to-r from-gray-400 to-gray-50 shadow gap-4 mx-auto w-4/5 rounded h-full flex flex-col py-8
        md:w-80 lg:w-96 md:fixed md:top-4 md:right-8 md:h-fit lg:top-10 2xl:top-56 2xl:w-108">
            <form className="w-4/5 mx-auto gap-2 flex flex-col" action='POST' onSubmit={handleRegSubmit}>
                <h3 className="text-2xl font-right mb-4">SIGN UP</h3>
                <div className="font-roboto"><p>Username</p>
                <input className="w-full pl-2 h-8 border-2 border-solid border-black rounded" type="text" 
                {...Username_reg}/></div>
                <div className="font-roboto"><p>Email</p>
                <input className="w-full pl-2 h-8 border-2 border-solid border-black rounded"  type="email" 
                {...Email_reg}/></div>
                <div className="font-roboto"><p>Number</p>
                <input className="w-full pl-2 h-8 border-2 border-solid border-black rounded"  type="number" 
                {...Number_reg}/></div>
                <div className="font-roboto"><p>Password</p>
                <input className="w-full pl-2 h-8 border-2 border-solid border-black rounded" type="password" 
                {...Password_reg}/></div>
                <div className="font-roboto"><p>Confirm Password</p>
                <input className="w-full pl-2 h-8 border-2 border-solid border-black rounded" type="password" 
                {...Re_password_reg}/></div>
                <button className="font-condensed shadow-md text-white text-lg mt-4 hover:cursor-pointer bg-blue-500 w-fit px-8 self-center rounded" type="submit">REGISTER</button>
            </form>
            <button className='font-condensed text-lg' onClick={props.handleClick}>Already have an account? Log In Here</button>
        </div>
    )
}