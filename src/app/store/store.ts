import { configureStore } from '@reduxjs/toolkit'
import cart from '../../features/basketSlice/ui/basketSlice'

export const store = configureStore({
    reducer: { cart },
})