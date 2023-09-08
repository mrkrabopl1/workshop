import React, { ReactElement, useRef, useState } from 'react'

type propsRowType = {
    callback:(...args:any)=>void|null
}


const Input: React.FC<propsRowType> = (props) => {
    let {callback} = {...props}
    return (
        <input type='text' onChange={(e)=>{if(callback){callback(e.target.value)}}}/>
    )
}

export default Input