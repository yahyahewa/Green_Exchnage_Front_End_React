import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const api=createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({
        baseUrl:import.meta.env.VITE_BACK_END,
    })
    ,tagTypes:["non_refresh"],
    endpoints:()=>({})
})