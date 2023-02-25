import { configureStore } from '@reduxjs/toolkit'
import data from './store/dataSlice.js'
import user from './store/userSlice.js'
import cart from './store/cartSlice.js'

export default configureStore({
    reducer: {
        data : data.reducer,
        user : user.reducer,
        cart : cart.reducer
    }
})