import { configureStore } from "@reduxjs/toolkit";
import twitchSlice from "./slices/twitchSlice";

const store = configureStore({
    reducer: {
        twitch: twitchSlice,
    },
    devTools: true
});

export default store;