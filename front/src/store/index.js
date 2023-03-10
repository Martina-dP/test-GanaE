import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from "../reducer/index"

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger],
})


export default store;