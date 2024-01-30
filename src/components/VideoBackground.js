import { useSelector } from "react-redux";
import useTrailerFromTrailer from "../hooks/useTrailerFromRedux"


const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector(store => store.movies?.newTrailerVideo)
    useTrailerFromTrailer(movieId);

    return (
        <div >
            <iframe
                className="w-screen aspect-video "
                src={"https://www.youtube.com/embed/UkHxhPGpRuA?si=" + "&autoplay=1&mute=1"}
                title="YouTube video player"

                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            >

            </iframe>
        </div >
    )
}

export default VideoBackground
