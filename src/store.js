import { configureStore } from "@reduxjs/toolkit";
import twitchSlice from "./slices/twitchSlice";


const store = configureStore({
    reducer: {
        twitch: twitchSlice,
    },
});

export default store;