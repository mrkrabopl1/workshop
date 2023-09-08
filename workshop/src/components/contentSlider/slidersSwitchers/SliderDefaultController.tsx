import React, { ReactElement, useEffect, useRef, useState } from 'react'
import Button from '../../Button'


type ContentSliderType = {
        currentPosition:number,
        positions:number,
        callback:(duration:number,stepDiff:number)=>void
}

const SliderDefaultController: React.FC<ContentSliderType> = (data) => {
    const {currentPosition,positions,callback} = {...data}

    return (
        <div><Button text='left' onClick={()=>callback(2,1)} />
                {currentPosition}/{positions}
        <Button text='right' onClick={()=>callback(2,-1)} />
        </div>
    )
}


export default SliderDefaultController