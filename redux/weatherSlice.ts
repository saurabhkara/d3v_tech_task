import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IStore} from "../model/types";
import { getWeatherDataThunk } from "./reduxThunk";
// import { RootState } from "./store";


//initial and default value of store
const initialState :IStore = {
    isLoading :false,
    isError:'',
    data:{
        cod:'',
        list:[],
        city:{
            name:'delhi',
            country:'In', 
        }
    }
}

const weatherSlice = createSlice({
    name:'weather',
    initialState:initialState,
    reducers:{
        updateData:(state,action:PayloadAction<{isLoading:boolean}>)=>{
            state.isLoading=action.payload.isLoading
        }
    },
    extraReducers(builder) {
        builder.addCase(getWeatherDataThunk.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(getWeatherDataThunk.rejected,(state, action)=>{
            console.log(action.payload)
            state.isLoading=false;
            state.isError="something went wrong"
        })
        .addCase(getWeatherDataThunk.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data= action.payload
        })
    },
})


export const {updateData} = weatherSlice.actions;
export default weatherSlice.reducer;

// export const selectWeather = (state:RootState)=>state.weather;

