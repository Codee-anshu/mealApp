import favoriteReducer from './slices/favoriteSlice'

const { configureStore } = require("@reduxjs/toolkit");



export const store = configureStore({
    reducer : favoriteReducer
})
