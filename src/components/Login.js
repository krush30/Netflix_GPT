import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
    const [isItSignIn, SetIsItSign] = useState(true);
    const toggleSignIn = () => {

        SetIsItSign(!isItSignIn);

    }
    return (
        <div>
            <div className='absolute'>
                <img className='' src='https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/eed3a573-8db7-47ca-a2ce-b511e0350439/IN-en-20240122-popsignuptwoweeks-perspective_alpha_website_large.jpg'
                    alt='netflix-bg' />
            </div>
            <form className='rounded-lg  w-3/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4 '>
                    {isItSignIn ? "Sign in" : "Sign up"}</h1>
                {!isItSignIn && <input type='text ' placeholder='Full Name' className='my-2 p-4 w-full bg-gray-700 bg-opacity-80' />}
                <input type='text ' placeholder='Email or phone number' className='my-2 p-4 w-full bg-gray-700 bg-opacity-80' />
                <input type='password' placeholder='password' className='my-2 p-4 w-full bg-gray-700 ' />
                {!isItSignIn && <input type='password' placeholder='Confirm password' className='my-2 p-4 w-full bg-gray-700 ' />}
                <button className='p-4 my-7 text-white bg-red-700 rounded-lg w-full'> {isItSignIn ? "Sign in" : "Sign up"}</button>
                <p onClick={toggleSignIn} className='cursor-pointer' >{isItSignIn ? "New to Netflix?Sign up now." : "Already us Sign in Now."}</p>

            </form>



        </div>
    )
}

export default Login;
