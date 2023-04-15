import React ,{useRef, useState} from "react"
import Row  from  '../../components/Row'
import Button  from  '../../components/Button'
import { useAppSelector,useAppDispatch } from '../../store/hooks/redux'


// const form={
//     square:1,
//     round:2
// }

const LoggingForm:React.FC<any>=()=>{

    let [userName,setUserName] = useState<String>("")
    let [password,setPassword] = useState<String>("")

    const rowOptionsName = {
        tag:"input",
        data:"",
        callback:setUserName
    }

    const rowOptionsPass = {
        tag:"input",
        data:"",
        callback:setPassword
    }
  
    return(
            <div>
                <Row {...rowOptionsName}></Row>
                <Row {...rowOptionsPass} ></Row>
            </div>
    )
}

export default LoggingForm