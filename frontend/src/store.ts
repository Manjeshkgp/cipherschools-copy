import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import pointReducer from "./slices/pointSlice";

export const store = configureStore({
    reducer:{
        user:userReducer,
        points:pointReducer
    }
})