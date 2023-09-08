import React, { ReactElement, useRef, useState } from 'react'

type propsRowType = {
    callback:(...args:any)=>void|null
}


const MailInput: React.FC<propsRowType> = (props) => {
    let {callback} = {...props}
    return (
        <input type='email' onChange={(e)=>{if(callback){callback(e.target.value)}}}/>
    )
}

export default MailInput