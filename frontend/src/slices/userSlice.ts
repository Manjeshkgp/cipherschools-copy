import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    authenticated:false,
    allDetails:{}
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setUser:(state,action)=>{
            state.allDetails = action.payload;
            state.authenticated = true;
        },
        removeUser:(state,action)=>{
            state = initialState;
        }
    }
});

export const {setUser,removeUser} = userSlice.actions

export default userSlice.reducer;