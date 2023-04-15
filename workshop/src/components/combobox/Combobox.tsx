import React, { ReactElement } from 'react'

type ComboboxType ={}

const createCombobox:(data:Set<string>)=>ReactElement[] = (data:Set<string>)=>{
        let valArr:ReactElement[] = []
        data.forEach(val=>{
            valArr.push(<div>
                val
            </div>)
        })
        return valArr
}

const Combobox: React.FC<ComboboxType> = ()=> {
    let data = new Set(["ggg","kkk"])
        return(
           <div>
            createCombobox(data)
           </div>
        )
}


export default Combobox