import React, { ReactElement, useEffect, useRef, useState } from 'react'

import Combobox from '../combobox/Combobox'
import Column from '../table/simpleTable/Column'
import  { tableImport } from "../../providers/tableInfoProvider"

type ComboboxType = { headers: string[]}

const defaultStyle: any = {
    border: "2px solid blue",
    position: "relative"

}

const defauBtntStyle = {

    backgroundColor: "transparent",
    right: 0,
    position: "absolute"


}

const AsyncComboboxColumn: React.FC<ComboboxType> = ({headers}) => {
    let arrRef = useRef<any>([])

    let [chosenHeader,setChosenHeader] = useState<string>(headers[0])
    let [tableInnfo,setTableInfo] = useState<string[]|[]>([])

    useEffect(()=>{
        tableImport(chosenHeader,setTableInfo)
    },[chosenHeader])
   
    let [active, setActive] = useState(false);
    let rowArray: ReactElement[] = []
    
    return (
        <div style={{ width: "100%" }}>
            <Column table={tableInnfo}>
                <Combobox data={headers}></Combobox>
            </Column>
         
        </div>
    )
}


export default AsyncComboboxColumn