import { createSlice } from "@reduxjs/toolkit";
import { getUser, getFollowedStreams } from "../infrastructure/twitch/twitchService";

const initialState = {
    loading: false,
    loadingMore: false,
    loadingMoreFinished: false,
    liveStreams: [],
    topLiveStreams: [],
    cursor: '',
};

export const twitchSlice = createSlice({
    name: 'followedStreams',
    initialState,
    reducers: {
        setLoading: async (state) => {
            state.loading = !state.loading;
        },
        setLoadingMore: (state) => {
            state.loadingMore = !state.loadingMore;
        },
        setLoadingMoreFinished: (state) => {
            state.loadingMoreFinished = !state.loadingMoreFinished;
        },
        setCursor: (state) => {

        },
        getLiveStreams: (state) => {

        },
    }
});

export const {
    setLoading,
    setLoadingMore,
    setLoadingMoreFinished,
    getLiveStreams,
} = twitchSlice.actions;


export default twitchSlice.reducer;