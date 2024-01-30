import { useDispatch, useSelector } from "react-redux";
import { addNewTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_REQUEST } from "../utils/constants";

const useTrailerFromTrailer = (movieId) => {
    const dispatch = useDispatch();

    const trailerVideo = useSelector(store => store.movies?.newTrailerVideo);
    const handleTrailerLaunch = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US", API_REQUEST)

        const json = await data.json();
        console.log();
        const filterData = json.results.filter(video => video.type === "Trailer")
        const Official_Trailer = filterData.length ? filterData[1] : json.results[0]
        console.log(Official_Trailer);
        dispatch(addNewTrailerVideo(Official_Trailer));

    }
    console.log(trailerVideo, "trailer");


    useEffect(() => {
        handleTrailerLaunch();
    }, [])
}

export default useTrailerFromTrailer;