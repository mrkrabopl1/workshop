import React, { ReactElement, useEffect, useRef, useState } from 'react'
import PricesBlock from './PricesBlock'
import s from "./style.module.css"
import {useAppSelector} from 'src/store/hooks/redux'
import RadioHolder from 'src/components/radioHolder/RadioHolder'
import merchType from 'src/types/merchType'

import { Children } from 'react';

const PRICE_RADIO = "priceRadio"

type MerchType = {
    [key: string]: merchType,
}

type PriceHolderType = {
    elems: MerchType
}

const PriceHolder: React.FC<PriceHolderType> = (props) => {
    // let data:any[] = []
    let { elems } = { ...props }
    let arrOfElems = Object.entries(elems)
    let radioState = useAppSelector(state => state.radioReducer)

    function setPriceBlocks() {
        let arr = arrOfElems.map((val, id) => {
            return <PricesBlock 
                active={radioState[PRICE_RADIO] === id}
                size={val[0]}
                price={val[1].price}
                availability={val[1].availability}
                discount={val[1].discount}
                />
        })

        return arr
    }


    return (
        <RadioHolder className={s.priceHolder} name={PRICE_RADIO}>
            {setPriceBlocks()}
        </RadioHolder>
    )

}



export default PriceHolder