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
    const [sortColumn,setSortColumn] = useState<sortedType|null>(null)
    const sorting: sortingType = (arr, id) => {
        for (let i = 0; i < arr.length; i++) {
            if(id === i){
                continue
            }

            arr[i].sort((a, b) => {
                if (arr[id][arr[i].indexOf(a)] > arr[id][arr[i].indexOf(b)])
                    return 1;
                if (arr[id][arr[i].indexOf(a)] < arr[id][arr[i].indexOf(b)])
                    return -1;
                return 0;
            })

        }

        arr[id].sort((a, b) => {
            if (a > b)
                return 1;
            if (a < b)
                return -1;
            return 0;
        })

    }

    let { table, name } = { ...props }
    if(sortColumn){
        sorting(Object.values(table), sortColumn.index)
    }
    return (
        <div className={s.tableWrap}>
               {
                Object.entries(table).map((val, id) => {
                    return <Column setSortColumn = {setSortColumn} key={id} index={id} table={val[1]} >
                        <span>{val[0]}</span>
                    </Column  >
                })
            }
         </div>
    
    )
}

export default Table