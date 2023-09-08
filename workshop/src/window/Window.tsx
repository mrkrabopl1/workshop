import React ,{ReactComponentElement, ReactElement, useRef, useState} from "react"


type windowType ={
    component:ReactElement
}
const Window:React.FC<windowType>=(props)=>{
    const {component}={...props}
    const windowStyle:any = {
        position:"absolute",
        margin:"auto",
        width:"200px"
    }
    return(
            <div  style={windowStyle} >
                {component}
            </div>
    )
}

export default Window