import React, { ReactElement, useEffect, useRef, useState } from 'react'

import Combobox from '../combobox/Combobox'
import Column from '../table/simpleTable/Column'


type tableType = {
    table: {
        [key: string]: string[]
    }
}

const SyncComboboxColumn: React.FC<tableType> = ({table}) => {
    let headers = Object.keys(table);
    let [chosenHeader,setChosenHeader] = useState<string>(headers[0]);
    let [tableInnfo,setTableInfo] = useState<string[]|[]>([]);

    useEffect(()=>{
        setTableInfo(table[chosenHeader])
    },[chosenHeader])
   
    
    return (
        <div style={{ width: "100%" }}>
            <Column table={tableInnfo}>
                <Combobox data={headers} onChange={setChosenHeader}></Combobox>
            </Column>
         
        </div>
    )
}


export default SyncComboboxColumn