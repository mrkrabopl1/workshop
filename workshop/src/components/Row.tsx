import React, { ReactElement, useRef, useState } from 'react'

type propsRowType = {
    data:any,
    callback:(...args:any)=>void|null
}


const Row: React.FC<propsRowType> = (props) => {
    let {data,callback} = {...props}
    return (
       <div onClick={(e)=>{if(callback){callback(e)}}}>{data}</div>
    )
}


export default Row