import React, { useRef, useState } from 'react'


interface IButton {
    text: string;
    onClick:(e:React.MouseEvent)=>any;
}

const proxyClick=function(e:React.MouseEvent,clickMethod:(e:React.MouseEvent)=>any){
    e.stopPropagation();
    clickMethod(e)
}

const Button:  React.FC<IButton> = ({ text,onClick }) => {
    let [color,setColor] = useState("green")
  

    return (<button style={{backgroundColor:color , display:"inine-block"}} 
        onMouseDown={e=>{proxyClick(e,onClick)}}>
        {text}
    </button>)
}

export default Button