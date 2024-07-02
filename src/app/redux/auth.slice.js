import { createSlice } from "@reduxjs/toolkit";
const AuthSlice = createSlice({
    name:'auth',
    initialState:{
        token:'',
        isAuth:false,
        user:null
    },
    reducers:{
Login : (state,action) => {
 state.isAuth = true;
 state.token = action.payload?.token;
 state.user  = action.payload?.user
       },
 Refresh : (state,action) => {
 state.isAuth = action.payload?.isAuth;
 state.token = action.payload?.token;
 state.user  = action.payload?.user
         },
 Logout:(state) => {
 state.isAuth = false;
 state.token = '';
 state.user  = null
         }
    }
})
export const {Login,Logout,Refresh} = AuthSlice.actions
export default AuthSlice.reducer
