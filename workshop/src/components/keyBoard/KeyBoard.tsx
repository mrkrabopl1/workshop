import React, { useEffect, useRef, useState ,useCallback} from 'react'
import Button from '../Button'
import ASSETS from './assts'


import s from "./keyBoard.module.css"

type KeyBoardOptions = {
    width:number,
    style:number,
    startPosition:{
        x:number,
        y:number
    }
}



type method = (...args:any)=>any 
const KeyBoard:React.FC<any>=(options:KeyBoardOptions,connector:(data:string)=>{}|null)=>{
    let keyBoardRef = useRef<HTMLDivElement|null>(null)
    const createKeyBoard = function(data:string[][]){   
        return (
            data.map((val=>{
                return createRow(val)
            }))
        )
    }
    const createRow=function(arr:Array<string>){
        let ref = useRef("")
        return (
            <div style={{display:"flex",justifyContent:"center"}}>{
                arr.map((val=>{
                    return <Button  text={val} onClick={(e)=>{
                        ref.current = val,
                        connector?connector(val):null
                    }}/>
                }))
                }
            </div>
        )
      
    }

    return (
        <div   ref ={keyBoardRef} className= {s.main}>
            {createKeyBoard(ASSETS.eng)}
        </div>
    )
      
    
}

export default KeyBoard