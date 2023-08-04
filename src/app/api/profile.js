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
        })
    })
})

export const {
    useUploadsMutation
}=userApi;