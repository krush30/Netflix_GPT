import React, { useEffect } from 'react';
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Error from './Error';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Body = () => {
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
            errorElement: <Error />
        },
        {
            path: "/browse",
            element: <Browse />,
            errorElement: <Error />
        }
    ])

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                const email = user.email;
                const displayName = user.displayName;
                const photoURL = user.photoURL;
                dispatch(addUser(uid, email, displayName, photoURL));
                // ...
            } else {
                dispatch(removeUser());
                // User is signed out
                // ...
            }
        });
    }, [])
    return (
        <div>

            <RouterProvider router={appRouter} />

        </div>
    )
}

export default Body;
