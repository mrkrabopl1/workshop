import {createSlice} from "@reduxjs/toolkit"
import dropFileType from '../../types/dropFile'

interface IField {
    [key: string]: number
}

const initialState:IField  ={
   
}

export const tableSlice = createSlice({
    name:"merch",
    initialState,
    reducers:{
        setChosen(state,action){
            state[action.payload.namespace] = action.payload.val
        },    
    }

});

export default tableSlice.reducer