import React, { ReactElement, RefObject, useRef, useState } from 'react'

type propsRowType = {
    data:number,
    callback:(...args:any)=>void|null
}


const ForwardRefWrap= React.forwardRef((props:{content:ReactElement},ref:React.Ref<HTMLDivElement>) => {
    let {content} = {...props}
    return (
        <div ref={ref}>{content}</div>
    )
})
export default ForwardRefWrap