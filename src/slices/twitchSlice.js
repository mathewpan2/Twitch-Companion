import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUser, getFollowedStreams } from "../infrastructure/twitch/twitchService";


const initialState = {
    loading: false,
    loadingMore: false,
    loadingMoreFinished: false,
    liveStreams: [],
    topLiveStreams: [],
    cursor: '',
};

export const fetchFollowedStreams = createAsyncThunk('twitch/fetchFollowedStreams', async () => {
    const userId = await getUser();
    const liveStreams = await getFollowedStreams(userId);
    return liveStreams;
})


export const twitchSlice = createSlice({
    name: 'twitch',
    initialState,
    reducers: {
        setCursor: (state) => {

        },
        getLiveStreams: (state) => {

        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchFollowedStreams.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(fetchFollowedStreams.fulfilled, (state, action) => {
                state.loading = false;
                state.liveStreams = action.payload;
            })
    }
});

export const {
    setCursor,
    getLiveStreams,
} = twitchSlice.actions;


export default twitchSlice.reducer;