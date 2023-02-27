import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IStore} from "../model/types";
import { getWeatherDataThunk } from "./reduxThunk";
// import { RootState } from "./store";


//initial and default value of store
const initialState :IStore = {
    lastUpdated:'',
    isLoading :false,
    isError:'',
    data:{
        cod:'',
        list:[],
        city:{
            name:'',
            country:'', 
        }
    }
}

const weatherSlice = createSlice({
    name:'weather',
    initialState:initialState,
    reducers:{
        updateData:(state,action:PayloadAction<{lastUpdated:string}>)=>{
            state.lastUpdated=action.payload.lastUpdated
        }
    },
    extraReducers(builder) {
        builder.addCase(getWeatherDataThunk.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(getWeatherDataThunk.rejected,(state, action:PayloadAction<any>)=>{
            state.isError= action.payload.message
            state.isLoading=false;
        })
        .addCase(getWeatherDataThunk.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data= action.payload,
            state.isError=""
        })
    },
})


export const {updateData} = weatherSlice.actions;
export default weatherSlice.reducer;

// export const selectWeather = (state:RootState)=>state.weather;

