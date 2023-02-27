import { createAsyncThunk } from "@reduxjs/toolkit";
import * as Location from "expo-location";
import { getWeatherData, getWeatherDataByLatLad } from "../helper/api";

interface Idet {
    city: string,
    lat: number,
    lad: number,
}

export const getWeatherDataThunk = createAsyncThunk('getWeatherData',

    async (det: Partial<Idet>, thunkApi) => {
        try {
            if (det.city) {
                try {
                    const res = await getWeatherData(det.city)
                    if(!res){
                       return thunkApi.rejectWithValue({ message: "Oops !!" }) 
                    }
                    return res.data;
                } catch (error:any) {
                    return thunkApi.rejectWithValue({ message: error.message })
                }
            }
            if (det.lad && det.lat) {
                const { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== "granted") {
                   return thunkApi.rejectWithValue({ message: "Please give permission" })  
                }
                const loc = await Location.getCurrentPositionAsync({});
                const res = await getWeatherDataByLatLad(loc.coords.latitude, loc.coords.longitude)
                if (res.status !== 200) {
                    console.log('404 if start running');
                     return thunkApi.rejectWithValue({ message: "Sometime went wrong" })
                }
                return res.data
            }
        } catch (error) {
            console.log(error);
            return thunkApi.rejectWithValue({ message: "Please search for correct city" })
        }

    }
);
