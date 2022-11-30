import React from 'react'
import { configureStore, createSlice } from '@reduxjs/toolkit'

let userSlice=createSlice({
    name:'user',
    initialState:{
        user:null,
        status:''
    },
    reducers:{
        sigIn: (state, action)   => {
            state.user=action.payload
        },
        logOut:(  state ) => {
            state.user=null
        }
    }
})
export const {sigIn,logOut}=userSlice.actions;
export const store = configureStore({
    reducer:{
user:userSlice.reducer
    }
}) 
// => {
//   return (
//     <div>index</div>
//   )
// }
