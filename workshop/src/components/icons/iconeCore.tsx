import React ,{useRef, useState} from "react"
import { useAppSelector,useAppDispatch } from 'src/store/hooks/redux'
import {userSlice } from 'src/store/reducers/userSlice'

type iconType = {
    iconSize:number
}
const Icon:React.FC<iconType>=(data)=>{
    const {iconSize}={...data}
    const {icon,image} = useAppSelector(state =>state.userReducer)
    const iconStyle = {
        width:iconSize+"px",
        height:iconSize+"px",
        backgroundSize: `${icon.imgWidth*iconSize/icon.size}px`,
        backgroundImage:`url(${image.src})`,
        backgroundPosition:`${icon.position.x*iconSize/2/icon.size}px ${icon.position.y*iconSize/2/icon.size}px`
    }
    return(
            <div  style = {iconStyle}></div>
    )
}

export default Icon