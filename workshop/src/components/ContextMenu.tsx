import React, { useEffect, useState } from 'react'
import { useAppDispatch } from '../store/hooks/redux'
import {fieldSlice} from '../store/reducers/fieldSlice'

import Row from './Row'
interface IFieldProps {
    x:number
    y: number

}

const ContextMenu: React.FC<IFieldProps> = ({x, y}) => {
    const [menuComand,setMenuComand] = useState("")
    const {addData} = fieldSlice.actions
    const dispatch = useAppDispatch()

    const addMethod=(args:any)=>{
    
    }

    const delMethod=(args:any)=>{
    
    }


    // useEffect(()=>{
    //     switch(menuComand){
    //         case "add":
    //             dispatch(addData("Y"))
    //             break
    //          case "clear":
    //             dispatch(clear())
    //             break

    //     }

    // },[menuComand])


    return( <div style={{position:"absolute",left:x+"px",top:y+"px"}}  >
       
     </div>)
}

    
   


export default ContextMenu