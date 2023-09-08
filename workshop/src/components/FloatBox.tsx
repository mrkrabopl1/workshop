import React, { ReactElement, useRef, useState } from 'react'

type propsRowType = {
    data:number,
    callback:(...args:any)=>void|null
}


const FloatBox: React.FC<propsRowType> = (props) => {
    let {data,callback} = {...props}
    return (
        <input value={data} type='number' onChange={(e)=>{if(callback){callback(e.target.value)}}}/>
    )
}

export default FloatBox