import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainComponents from './MainComponents';
import CardMovies from './CardMovies';


const Browse = () => {
    useNowPlayingMovies();
    return (
        <div>
            <Header />
            <MainComponents />


        </div>
    )
}

export default Browse;
