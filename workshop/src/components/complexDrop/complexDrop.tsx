import React, { ReactElement, useEffect, useRef, useState } from 'react'
import s from "./style.module.css"
import {useAppDispatch } from 'src/store/hooks/redux'
import {complexDropSlice } from 'src/store/reducers/complexDropSlice'
import global from "src/global.css"

interface dataInterface {
    [key: string]: string[];
}

interface propsType {
    data: dataInterface
}


let mainFieldStyle: any = {
    position: "relative",
    display: "flex",
    height: "200px", width: "100%"
}

let animateDropStyle: any = {
    display: "block",
    position: "absolute",
    width: "100%",
    top: "100%",
    zIndex:200
}


const ComplexDrop: React.FC<propsType> = (props) => {
    let mainRef = useRef(null)

    
    let dispatch = useAppDispatch()
    let { data } = { ...props }

    let [showDrop, setShowDrop] = useState<boolean>(false)
    let [chosen, setChosen] = useState<string | null>(null)
    let timeoutRef = useRef<any>(null)
    const { setName ,clear} = { ...complexDropSlice.actions }
    // useEffect(()=>{
    //     if(chosen){

    //     }

    // },[chosen])
    const createCont = () => {
        let arr: any = []

        Object.keys(data).forEach((val) => {
            arr.push(
                <div
                    className={s.mainElem}
                    onMouseLeave={() => { setChosen(val); timeoutRef.current = setTimeout(() => { console.log("gfd"); setShowDrop(false) }, 100) }}
                    onMouseEnter={() => {
                            if (timeoutRef.current) {
                                clearTimeout(timeoutRef.current);
                            }
                            setChosen(val);
                            setShowDrop(true)
                    }}>
                    {val}
                </div>
            )
        })
        return arr
    }

    const createDropContent = () => {
        if (chosen) {
            let arr: any = []
            let dropData = data[chosen]
            if (dropData.length > 0) {
                dropData.forEach((val) => {
                    arr.push(<div onClick={()=>{dispatch(setName(val))}} >{val}</div>)
                })
                // setShowDrop(true)
            } else {
                // setShowDrop(false)
            }
            return arr
        }

    }

    return (
        <div ref={mainRef} className={s.complexDrop} >
            {createCont()}
            <div 
            onMouseEnter={() => { clearTimeout(timeoutRef.current); console.log("ou2t") }}
            onMouseLeave={()=>{setShowDrop(false)} }
             style={showDrop ? animateDropStyle : { display: "none" }} className='dropField' >
                {createDropContent()}
            </div>
        </div>
    )
}


export default ComplexDrop

function setNameComplexDrop(arg0: string): any {
    throw new Error('Function not implemented.')
}
