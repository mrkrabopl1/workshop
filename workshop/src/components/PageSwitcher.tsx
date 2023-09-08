import React, { ReactElement, useRef, useState } from "react"
import Button from "./Button"

type switchType = {
    chosen: number,
    pages: { title: string, elem: ReactElement }[],

}

const PageSwitcher: React.FC<{ data: switchType }> = ({ data }) => {
    let { chosen, pages } = { ...data }

    let [chose, setChose] = useState<number>(chosen)
    const createPult = (data: any[]) => {
        return (
            data.map((val, i) => {
                return <Button key={i} text={val.title} onClick={() => {
                    setChose(i)
                }} />
            })
        )

    }


    let arrRef = useRef<any>([])
    arrRef.current = []

    return (
        <div>
            <div>{createPult(pages)}</div>
            {pages[chose].elem}
        </div>
    )
}

export default PageSwitcher