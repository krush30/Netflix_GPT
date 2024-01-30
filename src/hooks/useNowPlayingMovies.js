import { useEffect } from "react";
import { addNowPlayingMoving } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import { API_REQUEST } from "../utils/constants";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingApi = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_REQUEST);
        const json = await data.json();

        dispatch(addNowPlayingMoving(json.results));
    }

    useEffect(() => {
        nowPlayingApi();
    }, [])
}

export default useNowPlayingMovies;