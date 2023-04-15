import React, { useRef, useState } from 'react'
import ContextMenu from '../ContextMenu'
import { useAppSelector,useAppDispatch } from '../../store/hooks/redux'
import { fieldSlice } from '../../store/reducers/fieldSlice'
import s from "./universalField.module.css"
interface IFieldProps {
    height:number
    width: number

}


type InpType = (type:string,val:any)=>any


const dataParser:(type:string,val:any)=>any = (type,val)=>{
    
}

const UniversalField: React.FC<any> = () => {
    const dispatch = useAppDispatch()

    const {addData} = {...fieldSlice.actions}
    const [focus,setFocused] = useState<Boolean>(false)
    const htmlElRef = useRef<HTMLInputElement|null>(null)
    const blink = useRef<Boolean>(false)
    const setFocus = () => {


        setFocused(true)
        htmlElRef.current &&  htmlElRef.current.focus()
    }
    const setBlur = () => {


        setFocused(false)
        
    }


    const focusStyle = {
        width:"100px",
        border:"solid 2px grey"
    }
   

    const {data} = useAppSelector(state =>state.fieldReducer)
    return (
        <div  className={s.main} style={focus?focusStyle:{width:"200px"}} onClick={()=>setFocus()}> 
            {data[0].val}
           
            <span className={focus?s.cursor:s.tp}>|</span>
            <input onBlur={(e)=>{
                setBlur()
            }} onInput={e=> dispatch(addData({type:"string",val:htmlElRef.current?.value}))} style={{opacity:0,width:"0px"}} ref={htmlElRef} />
        </div>
    )
}

export default UniversalField
