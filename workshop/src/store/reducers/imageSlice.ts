import {createSlice} from "@reduxjs/toolkit"
import dropFileType from '../../types/dropFile'
interface IField {
    imgSrc:string
}

const initialState :dropFileType ={
   src:"",
   size:{width:0,height:0}
}

export const imageSlice = createSlice({
    name:"icon",
    initialState,
    reducers:{
        setSrcImg(state,action){
            state.src = action.payload
        },
        setSizeImg(state,action){
            state.size = action.payload
        },
        setImg(state,action){
            state.src = action.payload.src
            state.size = action.payload.size
        }
     
    }

});

export default imageSlice.reducer