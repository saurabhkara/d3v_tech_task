import { createAsyncThunk } from "@reduxjs/toolkit";
import { getWeatherData } from "../helper/api";


export const getWeatherDataThunk = createAsyncThunk('getWeatherData',
    async (city:string,thunkApi)=>{
       const res = await getWeatherData(city)
       if(res.status !==200){
        console.log('404 if start running');
            thunkApi.rejectWithValue({message:"Sometime went wrong"})
       }
       return res.data
    }
);
