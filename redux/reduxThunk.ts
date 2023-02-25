import { createAsyncThunk } from "@reduxjs/toolkit";
import { getWeatherData } from "../helper/api";

export const getWeatherDataThunk = createAsyncThunk('getWeatherData',
    async ()=>{
       const res = await getWeatherData('delhi')
       return res.data
    }
);
