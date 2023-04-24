import {createSlice} from "@reduxjs/toolkit";

export const pointSlice = createSlice({
    name:"points",
    initialState:{
        points:0
    },
    reducers:{
        add:(state)=>{
            state.points = state.points + 1
        },
        setPoints:(state,action)=>{
            state.points = action.payload
        }
    }
})

export const {add,setPoints} = pointSlice.actions;

export default pointSlice.reducer;