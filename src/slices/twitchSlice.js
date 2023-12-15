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

export const fetchFollowedStreams = createAsyncThunk('twitch/fetchFollowedStreams', async (cursor) => {
    const userId = await getUser();
    const { liveStreams, after } = await getFollowedStreams(userId, cursor, 3);

    return { liveStreams, after };
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
                state.liveStreams = state.liveStreams.concat(action.payload.liveStreams);
                if (action.payload.after) {
                    state.cursor = action.payload.after;
                }
            })
    }
});

export const {
    setCursor,
    getLiveStreams,
} = twitchSlice.actions;


export default twitchSlice.reducer;