import React ,{ReactComponentElement, ReactElement, useRef, useState} from "react"


type windowType ={
    component:ReactElement
}
const Window:React.FC<windowType>=(props)=>{
    const {component}={...props}
    return(
            <div style={{width:"200px"}} >
                {component}
            </div>
    )
}

export default Window