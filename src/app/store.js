import { configureStore } from "@reduxjs/toolkit"
import userReducer from '../slices/userSlice'
import usersReducer from '../slices/usersSlice'

export default configureStore({
    reducer: {
        user: userReducer,
        users: usersReducer
    },
})


