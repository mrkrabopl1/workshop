import React, { ReactElement, useRef, useState,useEffect} from 'react'
import Combobox from 'src/components/combobox/Combobox'
type propsRowType = {
    callback:(...args:any)=>void|null,
    left:boolean
}


const enumNum = ["+7","+995"]


const EnumInput: React.FC<propsRowType> = (props) => {

    let [comboboxData,setComboboxData] = useState("")
    let [inputData,setInputData] = useState("")

    useEffect((  )=>{
        if(comboboxData && inputData){
                callback({
                    enumData:comboboxData,
                    inputData:inputData
                })
        }
    },[comboboxData,inputData])
        
    let wrpaStyle = {
        display:"flex",
        with:"100%"
    }
  
    let {left,callback} = {...props}
    return (
        <div style={wrpaStyle}>
            {left?<div style={{width:"10%"}}> <Combobox data={enumNum}/></div>:null}

            <input type='text' onChange={(e)=>{if(callback){callback(e.target.value)}}}/>
            {!left?<div style={{width:"10%"}}> <Combobox data={enumNum}/></div>:null}
        </div>
    
    )
}

export default EnumInput