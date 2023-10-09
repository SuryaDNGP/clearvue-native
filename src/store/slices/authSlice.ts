import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    isLoading: false,
    error: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        
    }
})