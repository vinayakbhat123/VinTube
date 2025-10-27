import { createSlice } from "@reduxjs/toolkit";

const VideosSlice = createSlice({
    name:"Videos",
    initialState:{
        Videos:[],
        FilterVideos:[]
    },
    reducers:{
        addvideos:(state,action) => {
            state.Videos = action.payload;
        },
       filterVideos:(state,action) => {
        state.FilterVideos = action.payload;
       }
    }

})

export const {addvideos,filterVideos} = VideosSlice.actions;

export default VideosSlice.reducer;