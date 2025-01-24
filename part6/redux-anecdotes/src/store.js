import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./reducers/filterSlice";
import anecdoteReducer from "./reducers/anecdoteSlice";
import notificationReducer from "./reducers/notificationSlice";

const store = configureStore({
    reducer: {
        anecdotes: anecdoteReducer,
        filter: filterReducer,
        notification: notificationReducer
    }
})

export default store