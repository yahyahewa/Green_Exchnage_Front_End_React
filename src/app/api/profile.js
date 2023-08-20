import { api } from "./api";

const userApi=api.injectEndpoints({
    endpoints:(builder)=>({
        uploads:builder.mutation({
            query:(files,token)=>{
                const formData=new FormData();
                if(files.length>0){
                    for(let file of files){
                        formData.append("photos",file)
                    }

                    return{
                        url:"api/user/uploads",
                        method:"POST",
                        headers:{Authorization: `Bearer ${token}`},
                        body:formData
                    }
                }
            }
        }),
        
        getUserProducts: builder.query({
            query: (id,token) => ({
                url: `api/product/user/${id}`,
                headers: {
                    Authorization: `Bearer ${token}`,
                } })
        })
    })
})

export const {
    useUploadsMutation,
    useGetUserProductsQuery
}=userApi;