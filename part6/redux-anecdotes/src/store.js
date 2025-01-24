import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./reducers/filterSlice";
import anecdoteReducer from "./reducers/anecdoteSlice";

const store = configureStore({
    reducer: {
        anecdotes: anecdoteReducer,
        filter: filterReducer
    }
})

export default store