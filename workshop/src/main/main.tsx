import React ,  { useState } from 'react'
import Field from '../components/Field'
import KeyBoard from '../components/keyBoard/KeyBoard'

const Main:React.FC<any> = () => {

    return (
        <div >
            <Field height={200} width={24}/>
            <KeyBoard/>
        </div>
    )
}

export default Main