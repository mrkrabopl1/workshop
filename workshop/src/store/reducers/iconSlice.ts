import {createSlice} from "@reduxjs/toolkit"
import dropFileType from '../../types/dropFile'
interface IField {
    imgSrc:string
}

const initialState  ={
   src:"",
   position:{x:0,y:0},
   size:0
}

export const iconSlice = createSlice({
    name:"icon",
    initialState,
    reducers:{
        setSrcImg(state,action){
            state.src = action.payload
        },
        setSizeImg(state,action){
            state.size = action.payload
        },
        setIcon(state,action){
            state.src = action.payload.src
            state.size = action.payload.size
            state.position = action.payload.position
        }
     
    }

});

export default iconSlice.reducer