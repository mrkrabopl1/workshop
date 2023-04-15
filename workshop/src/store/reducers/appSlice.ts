import {createSlice} from "@reduxjs/toolkit"

interface IField {
    keyboard:boolean
}

const initialState :IField ={
   keyboard:false
}

export const appSlice = createSlice({
    name:"fieldData",
    initialState,
    reducers:{
        setKeyboard(state,action){
            state.keyboard = action.payload
        }
     
    }

});

export default appSlice.reducer