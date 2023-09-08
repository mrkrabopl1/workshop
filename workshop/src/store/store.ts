import {combineReducers, configureStore} from "@reduxjs/toolkit"
import fieldReducer from "./reducers/fieldSlice"
import appReducer from "./reducers/appSlice"
import imageReducer from "./reducers/imageSlice"
import iconReducer from "./reducers/iconSlice"
import userReducer from "./reducers/userSlice"
import radioReducer from "./reducers/radioSlice"
const rootReducer = combineReducers({
    fieldReducer,
    appReducer,
    imageReducer,
    iconReducer,
    userReducer,
    radioReducer
})

export const setupStore = () =>{
    return configureStore({
        reducer:rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppState = ReturnType<typeof setupStore>
export type AppDispatch = AppState["dispatch"]

export default {}