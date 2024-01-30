import React, { useRef, useState } from 'react';
import Header from './Header';
import checkValidate from '../utils/validate';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {

    const [isItSignIn, SetIsItSign] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();
    const toggleSignIn = () => {

        SetIsItSign(!isItSignIn);

    }
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);


    const handleClicked = () => {
        const message = checkValidate(email.current.value, password.current.value);
        console.log(message);
        setErrorMessage(message);
        if (message) return;

        if (!isItSignIn) {
            // sign up 
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: "https://t4.ftcdn.net/jpg/01/22/63/19/360_F_122631967_ZDhcU71c9QfNccYflAiRDlNA8ef9ps0E.jpg"
                    }).then(() => {
                        const uid = auth.currentUser;
                        const email = auth.currentUser;
                        const displayName = auth.currentUser;
                        const photoURL = auth.currentUser;
                        dispatch(addUser(uid, email, displayName, photoURL));

                        // Profile updated!
                        // ...
                    }).catch((error) => {
                        setErrorMessage(error);
                    });



                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode + "_" + errorMessage);
                    // ..
                });
        } else {
            //Sign in
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;



                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode + "_" + errorMessage);
                });
        }
    }





    return (

        <div>
            <Header />

            <div className='absolute'>
                <img className='' src='https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/eed3a573-8db7-47ca-a2ce-b511e0350439/IN-en-20240122-popsignuptwoweeks-perspective_alpha_website_large.jpg'
                    alt='netflix-bg' />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='rounded-lg  w-3/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4 '>
                    {isItSignIn ? "Sign in" : "Sign up"}</h1>
                {!isItSignIn &&
                    <input ref={name} type='text ' placeholder='Full Name' className='my-2 p-4 w-full bg-gray-700 bg-opacity-80' />}

                <input ref={email} type='text ' placeholder='Email or phone number' className='my-2 p-4 w-full bg-gray-700 bg-opacity-80' />

                <input ref={password} type='password' placeholder='password' className='my-2 p-4 w-full bg-gray-700 ' />

                <p className='text-red-600 font-bold text-lg py-2'>{errorMessage}</p>
                <button className='p-4 my-7 text-white bg-red-700 rounded-lg w-full' onClick={handleClicked}>
                    {isItSignIn ? "Sign in" : "Sign up"}
                </button>


                <p onClick={toggleSignIn} className='cursor-pointer' >
                    {isItSignIn ? "New to Netflix?Sign up now." : "Already us Sign in Now."}
                </p>

            </form>



        </div>
    )
}

export default Login;
