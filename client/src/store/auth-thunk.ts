import { createAsyncThunk } from "@reduxjs/toolkit"
import { register } from "../api/auth-api"


export const registerThunk = createAsyncThunk(
    'auth/registerThunk',
    async (registerInfo: { name: string, lastName: string, email: string, password: string }) => {
      const response = await register(registerInfo)
      return response;
    }
  )