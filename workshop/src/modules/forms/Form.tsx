import React, { useRef, useState } from "react"
import { useAppSelector, useAppDispatch } from '../../store/hooks/redux'
import { getViewer } from "src/utils/ViewerFactory"

type rowType = {
    title: string,
    elem: {
        type: string,
        val: any
    },
    notify?:{
        color:string,
        text:string
    }
}
type formType = Array<rowType>

const createForm = function (arr: formType) {
    let viwerArr = []
    for (let i = 0; i < arr.length; i++) {
        viwerArr.push(
        <div key={i}>
            <div>{arr[i].title} </div>
            {getViewer(arr[i].elem)}
            {arr[i].notify!=undefined?<span style={{color:arr[i].notify?.color}}>{arr[i].notify?.text}</span>:null}
        </div>)
    }
    return viwerArr
}

const Form: React.FC<{ val: formType }> = (data) => {
    let { val } = { ...data }

    return (
        <div>
            {createForm(val)}
        </div>
    )
}

export default Form