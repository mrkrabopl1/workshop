import React, { ReactElement, useEffect, useRef, useState } from 'react'

type ComboboxType = { data: string[], onChange?: (data: string) => void }

const defaultStyle: any = {
    border: "2px solid blue",
    position: "relative"

}

const defauBtntStyle = {

    backgroundColor: "transparent",
    right: 0,
    position: "absolute"


}

const Combobox: React.FC<ComboboxType> = ({ data, onChange }) => {
    let arrRef = useRef<any>([])
    let [val, setVal] = useState<string>(data[0]);

    let [active, setActive] = useState(false);
    let rowArray: ReactElement[] = []
    const createCombobox: (data: Array<string>) => ReactElement[] = (data: Array<string>) => {
        arrRef.current = []

        let valArr: ReactElement[] = []

        arrRef.current = arrRef.current.slice(0, data.length);
        if (active) {
            data.map((val, i) => {

                valArr.push(<div ref={el => arrRef.current[i] = el} style={defaultStyle} onClick={() => {
                    setVal(val)
                    if (onChange) {
                        onChange(val)
                    }
                    console.log(arrRef.current)
                }}>
                    {val}
                </div>)
                console.log(arrRef.current)

            })
        }

        return valArr

    }

    return (
        <div style={{ width: "100%" }}>
            <div onClick={() => { setActive(!active) }} style={defaultStyle}>
                {val}
                <span style={{ position: "absolute", right: "0", paddingRight: "5px" }}>{active ? "\u1433" : "\u142F"}</span>
            </div>
            {createCombobox(data)}
        </div>
    )
}


export default Combobox