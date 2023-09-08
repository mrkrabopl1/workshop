import React, { ReactElement, useState, useRef, useEffect } from "react"

import Combobox from "../../components/combobox/Combobox"

let monthArr = ["January","February","Mart","April","May","June","July","August","September","October","November","December"]
let blockArr:any[] = []
const creteCalendarForm = (year:number,month:string,blockArr:any[])=>{
        let monthId = monthArr.indexOf(month)
        let dayLength = new Date(year,monthId,0).getDate()
        for (let i = 1 ;i<=dayLength;i++){
            blockArr.push(
                <div style={{display:"inline-block"}}>
                    {i}
                </div>
            )
        }
        return blockArr  
}
const Calendar: React.FC<any> = () => {
    let[month,setMonth] =useState("December")
    let[year,setYear] =useState(1996)
    useEffect(()=>{
        creteCalendarForm(year,month,blockArr)
    },[month,year])
    return (
        <div>
            <Combobox data={monthArr} onChange={setMonth}/>
            <div>
                {blockArr}
            </div>
        </div>
    )
}

export default Calendar