import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import  axiosInstance from '../../Helpers/axiosInstance'
import {toast} from "react-hot-toast";

const initialState = {
    isLogginedIn : localStorage.getItem('isLogginedIn') || false,
    role: localStorage.getItem('role') || "",
    data: localStorage.getItem('data') || {}
};


export const createAccount = createAsyncThunk("/auth/signup", async (data) => {
    try {
        const response = axiosInstance.post("user/register", data);
        toast.promise(response, {
            loading: 'Wait! creating your account',
            success: (data) => {
                return data?.data?.message;
            },
            error: 'Failed to create your account'
        });
        return await response;
    } catch(error) {
        console.log(error);
        toast.error(error?.response?.data?.message);
    }
})


const authSlice = createSlice({
    name: 'auth' , 
    initialState,
    reducers:{},
});

export default authSlice.reducer;