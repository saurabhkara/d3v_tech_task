import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./weatherSlice";

//Redux Store configuration
export const store = configureStore({
    reducer:{
        weather:weatherSlice
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch