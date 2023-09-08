import React, { useRef, useState } from "react"
import { useAppSelector, useAppDispatch } from 'src/store/hooks/redux'
import { userSlice } from 'src/store/reducers/userSlice'
import s from "./style.module.css"
import loop from "../../../public/zoom.svg"

type iconType = {
    image: string
}
const ImagePresantationBlock: React.FC<iconType> = (data) => {
    const { image } = { ...data }
    let [hover,setHover] = useState<Boolean>(false)

    return (
        <div style={{height:"100%"}} className={s.imgCompponentWrap} onMouseOut={() => {setHover(false)}} onMouseOver={() => {setHover(true)}}>
            <img style={{display:hover?"block":"none"}} className={s.loop} src={loop} alt="React Logo" />
            <img style={{objectFit: "contain",width:"100%", height:"100%" }} src={image} alt="" />
        </div>
    )
}

export default ImagePresantationBlock