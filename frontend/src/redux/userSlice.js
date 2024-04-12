import {createSlice} from '@reduxjs/toolkit'


const initialState={
    currentUser:null,
    error:null,
    loading:null
};

const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        signInStart:(state)=>{
            state.loading=true;
        },
        signInSuccess:(state,action)=>{
            state.loading=false;
            state.currentUser=action.payload;
            state.error=null
        },
        signInFailure:(state,action)=>{
            state.loading=false;
            state.currentUser=action.payload
        },
        signOutUserStart: (state) => {
            state.loading = true;
          },
          signOutUserSuccess: (state) => {
            state.currentUser = null;
            state.loading = false;
            state.error = null;
          },
          signOutUserFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
          },
          deleteUserStart: (state) => {
            state.loading = true;
          },
          deleteUserSuccess: (state) => {
            state.currentUser = null;
            state.loading = false;
            state.error = null;
          },
          deleteUserFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
          },
    }
})

export const {signInStart,signInSuccess,signInFailure,signOutUserStart,signOutUserSuccess,signOutUserFailure,deleteUserStart,deleteUserSuccess,deleteUserFailure}=userSlice.actions;

export default userSlice.reducer;


