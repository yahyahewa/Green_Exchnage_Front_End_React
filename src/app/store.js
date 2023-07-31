import { configureStore } from "@reduxjs/toolkit";
import {api} from "./api/api"

export  default configureStore({
    reducer:{
        [api.reducerPath]:api.reducer
    }
    ,middleware:(gdmw)=>gdmw().concat(api.middleware)
})