// import {createSlice} from "@redux.js/toolkit";

// const UI_Slices = createSlice({

//     name:"UI",
//     initialState:{
//         authModalOpen:false,
//         authMode:"Login",//login,signup,forgot
//     },

//     reducers:{
//         openAuthModal:(state,action)=>{
//             state.authModalOpen = true;
//             state.authMode = action.paylaod || "Login";
//         },

//         closeAuthModal:(state)=>{
//             state.authModalOpen = false;
//             state.authModal = "Login";
//         },
//         switchAuthModal:(state,action)=>{
//             state.athMode = action.paylaod;
//         },
//     },
    
// });


// export const{openAuthModalopen,closeAuthModal, switchAuthModal} = 
//     UI_Slices.actions;

//     export default UI_Slices.reducers;
    
    

import { createSlice } from "@reduxjs/toolkit";

const UI_Slices = createSlice({
  name: "UI",
  initialState: {
    authModalOpen: false,
    authMode: "Login", // login, signup, forgot
  },

  reducers: {
    openAuthModal: (state, action) => {
      state.authModalOpen = true;
      state.authMode = action.payload || "Login";
    },

    closeAuthModal: (state) => {
      state.authModalOpen = false;
      state.authMode = "Login";
    },

    switchAuthModal: (state, action) => {
      state.authMode = action.payload;
    },
  },
});

export const { openAuthModal, closeAuthModal, switchAuthModal} =
  UI_Slices.actions;

export default UI_Slices.reducer;
