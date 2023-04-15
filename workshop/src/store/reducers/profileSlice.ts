import {createSlice} from "@reduxjs/toolkit"

interface IField {
    data:any[],
    operations:[]
}

const initialState :IField ={
    data:[],
    operations:[]
}

export const fieldSlice = createSlice({
    name:"fieldData",
    initialState,
    reducers:{
        addData(state,action){
            state.data.push(action.payload)
        },
        clear(state){
            state.data = []
            state.operations = []
        }
    }

});

export default fieldSlice.reducer