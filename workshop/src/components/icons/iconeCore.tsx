import React ,{useRef, useState} from "react"
import { useAppSelector,useAppDispatch } from '../../store/hooks/redux'


// const form={
//     square:1,
//     round:2
// }

const Icon:React.FC<any>=(backGround:string)=>{
    const {src,position,size} = useAppSelector(state =>state.iconReducer)
    const iconStyle = {
        width:"50px",
        height:"50px",
        backgroundSize: `${size*25/150}px`,
        backgroundImage:`url(${src})`,
        backgroundPosition:`${position.x*25/150}px ${position.y*25/150}px`
    }
    return(
            <div style = {iconStyle}></div>
    )
}

export default Icon