import React, { useEffect } from 'react'
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import Error from './Error';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
    const dispatch = useDispatch();

    const user = useSelector(store => store.user);
    const navigate = useNavigate();
    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/");
            // Sign-out successful.
        }).catch((error) => {
            console.log(error);
            navigate(<Error />)
            // An error happened.
        });

    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                const email = user.email;
                const displayName = user.displayName;
                const photoURL = user.photoURL;
                dispatch(addUser(uid, email, displayName, photoURL));
                navigate("/browse")
                // ...
            } else {
                dispatch(removeUser());
                navigate("/")

                // User is signed out
                // ...
            }
        });
    }, [])
    return (
        <div className='absolute w-screen  px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
            <img className='w-44' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
                alt='netflix-logo' />
            {user && <div className='flex'>
                <img className='w-9 h-9 m-3' src="https://t4.ftcdn.net/jpg/01/22/63/19/360_F_122631967_ZDhcU71c9QfNccYflAiRDlNA8ef9ps0E.jpg" alt=' usericon' />
                <button className='font-bold text-white' onClick={handleSignOut} >
                    Sign out
                </button>
            </div>}
        </div>
    )
}

export default Header;
