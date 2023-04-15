import React, { ReactElement, useRef, useState } from 'react'

type propsRowType = {
    tag:string,
    data:any,
    callback:(...args:any)=>void
}

const createRowContent:(tag:string,val:any)=>ReactElement = function(tag,val){

    switch (tag){
        case "input":
            return <input type="text" value={val} />
        default:
            return <div>{val}</div>
    } 

}

const Row: React.FC<propsRowType> = (props) => {
    let {tag,data,callback} = {...props}
  

    return (
       createRowContent(tag,data)
    )
}


export default Row