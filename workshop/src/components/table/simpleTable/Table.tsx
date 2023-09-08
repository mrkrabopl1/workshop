import React, { ReactElement, useEffect, useRef, useState } from 'react'
import s from "./style.module.css"
import Column from './Column'
import { useAppSelector, useAppDispatch } from 'src/store/hooks/redux'
import { tableSlice } from '../../../store/reducers/tableSlice'
import RadioHolder from 'src/components/radioHolder/RadioHolder'


type tableType = {
    table: {
        [key: string]: string[]
    },
    name:string
}

type sortingType = (tableArr: string[][], id: number) => void

type sortedType = {
    index: number,
    direction: boolean
}




const Table: React.FC<tableType> = (props) => {
    let { table, name } = { ...props }
    return (
        <div className={s.tableWrap}>
               {
                Object.entries(table).map((val, id) => {
                    return <Column key={id} table={val[1]} >
                        <span>{val[0]}</span>
                    </Column  >
                })
            }
         </div>
    
    )
}

export default Table