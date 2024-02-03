import { createSlice } from "@reduxjs/toolkit";
import fetchAllUsers from "../reducers/userReducer";

const initialState = {
    users: [],
    isLoading: false,
    isError: '',

};

const userSlice = createSlice({
    initialState,
    name: "users",
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllUsers.pending, (state) => {
            state.isLoading = true;
            state.isError = '';
            state.users = [];
        })
        builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = '';
            state.users = action.payload;
        })
        builder.addCase(fetchAllUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.payload;
            state.users = [];
        })
    }
})

const userReducer = userSlice.reducer;
export default userReducer;