import React from 'react'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux';

const MainComponents = () => {
    const movies = useSelector(store => store.movies.nowPlayingMovies);
    if (!movies) return;

    const mainMovie = movies[2];
    console.log(mainMovie);

    const { original_title
        , overview, release_date, id } = mainMovie;





    return (
        <div>

            <VideoTitle title={original_title
            } overview={overview} release_date={release_date} />
            <VideoBackground movieId={id} />
        </div>
    )
}

export default MainComponents;

