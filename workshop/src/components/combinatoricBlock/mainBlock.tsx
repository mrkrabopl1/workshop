import React, { useRef, useState } from 'react'
interface IFieldProps {
    text: string,
    height: number,
    low: number
}

const MainBlock: React.FC<IFieldProps> = ({ text, height, low }) => {

    return (
        <div style={{ display: "flex" }}>
            <div>
                {text}
            </div>
            <div>
                <div>
                    {height}
                </div>
                <div>
                    {low}
                </div>
            </div>
        </div>
    )
}

export default MainBlock;