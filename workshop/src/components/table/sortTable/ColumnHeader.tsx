import React, { ReactElement, useRef, useState } from 'react'
import s from "./style.module.css"

type sortedType = {
    index: number,
    direction: boolean
}

type columnType = {
    setSortColumn: ({ }: sortedType) => void,
    index: number
}




const ColumnHeader: React.FC<columnType> = (props) => {
    let {setSortColumn, index, children } = { ...props }
    return (
        <div onClick={() => {
            let obj = {
                index: index,
                direction: true
            }
            setSortColumn(obj)
        }}>

            {children}

        </div>

    )
}

export default ColumnHeader