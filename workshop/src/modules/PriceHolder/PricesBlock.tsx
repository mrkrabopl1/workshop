import React, { ReactElement, useRef, useState } from 'react'
import s from "./style.module.css"
import doneSvg from "../../../public/done.svg"

type merchType = {active:boolean,size:string,price:number,availability:boolean,discount?:number}




const PricesBlock: React.FC<merchType> = (props) => {
    let {price,size,active,availability} = {...props}
    let [test,setTest] = useState(false)
    return (
        <div className={s.priceBlock} >
            <div className={s.sizeHolder}>{"US "+size}</div>
            <div className={s.avelibleHolder}><div>{price}</div>{availability?<img className={s.done} src={doneSvg} alt="" />:null}</div> 
            {active?<div className={s.priceUnderline}></div>:null}
        </div>
            
    )
}

export default PricesBlock