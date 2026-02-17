import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import uiReducer from "./slices/UI_Slices.js";

const store = configureStore({
    reducer:{
        auth:authReducer,
        ui:uiReducer,
    },
});

export default store;