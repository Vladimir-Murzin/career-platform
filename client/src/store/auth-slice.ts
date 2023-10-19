import { FetchStatus } from "../types/common.types"
import { createSlice } from '@reduxjs/toolkit'
import { registerThunk } from "./auth-thunk"

export interface AuthState {
    user: {
        name: string,
        lastName: string,
        email: string,
        location: string
    },
    token: string,
    registerStatus: FetchStatus,
}

const initialState: AuthState = {
    user: {
        name: '',
        lastName: '',
        email: '',
        location: '',
    },
    token: '',
    registerStatus: FetchStatus.Initial,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(registerThunk.pending, (state) => {
          state.registerStatus = FetchStatus.Fetching;
          state.token = '';
          state.user = {
            name: '',
            lastName: '',
            email: '',
            location: '',
          };
        })
        builder.addCase(registerThunk.fulfilled, (state, action) => {
            state.registerStatus = FetchStatus.Success;
            state.token = action.payload.data.token;
            state.user = action.payload.data.user;
        })
        builder.addCase(registerThunk.rejected, (state, action) => {
            state.registerStatus = FetchStatus.Error;
            state.token = '';
            state.user = {
                name: '',
                lastName: '',
                email: '',
                location: '',
            }
        })
      },
})

export default authSlice.reducer;