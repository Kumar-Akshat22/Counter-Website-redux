import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './slices/CounterSlice'

// A store is a collection of slices
// It is also a centralized storage for the data
export const store = configureStore({

    reducer:{
        counter : CounterSlice.reducer
    },
})