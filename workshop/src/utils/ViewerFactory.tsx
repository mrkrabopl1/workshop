import Input from 'src/components/Input'
import Row from 'src/components/Row'
import FloatBox from 'src/components/FloatBox'
import EnumInput from 'src/components/EnumInput'
import MailInput from 'src/components/MailInput'
import React ,{useRef, useState} from "react"


type elemType={
    type:string,
    val:any
}
const getViewer = function(props:elemType){
    switch(props.type){
        case "input":
            return <Input{...props.val}/>
        case "row":
            return <Row{...props.val}/>
        case "float":
            return <FloatBox{...props.val}/>
        case "enum":
            return <EnumInput{...props.val}/>
        case "mail":
            return <MailInput{...props.val}/>     
    }
}

export {getViewer}