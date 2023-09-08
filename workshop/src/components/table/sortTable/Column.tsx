import React, { ReactElement, useRef, useState } from 'react'
import s from "./style.module.css"
import ColumnHeader from './ColumnHeader'
import { useAppSelector, useAppDispatch } from 'src/store/hooks/redux'
type columnType = {
    table: string[],
    index: number,
    setSortColumn:({}:any)=>void
}




const Column: React.FC<columnType> = (props) => {

    const dispatch = useAppDispatch()
    let { table, index, setSortColumn, children} = { ...props }
    let [test, setTest] = useState(false)
    return (
        <div className={s.priceBlock} >

            <ColumnHeader setSortColumn = {setSortColumn} index={index} >
                {children}
            </ColumnHeader>
            {table.map((val, id) => {
                return <div key={id}>{val}</div>
            })}

        </div>

    )
}

export default Column