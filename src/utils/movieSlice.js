import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        newTrailerVideo: null,
    },
    reducers: {
        addNowPlayingMoving: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addNewTrailerVideo: (state, action) => {
            state.newTrailerVideo = action.payload;
        }
    }
})

export const { addNowPlayingMoving, addNewTrailerVideo } = movieSlice.actions;
export default movieSlice.reducer;