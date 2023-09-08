import React ,{useRef, useState} from "react"
import Row  from  '../../components/Row'
import Button  from  '../../components/Button'
import { useAppSelector,useAppDispatch } from '../../store/hooks/redux'
import  { checkLogin,checkMail,checkTel } from "../../providers/logProvider"
import Form  from "../forms/Form"
import {userSlice } from '../../store/reducers/userSlice'
import {useNavigate
  } from "react-router-dom";


// const form={
//     square:1,
//     round:2
// }
type TimeOutType = ReturnType<typeof setTimeout>

const RegistrForm:React.FC<any>=()=>{
    const nav = useNavigate()
    const {setLog} = {...userSlice.actions}
    let [userName,setUserName] = useState<string>("")
    let timeOut = useRef<TimeOutType|null>(null)
    let [warn,setWarn] = useState<string>("")
    let [loged,setLoged] = useState<Boolean>(false)
    let [password,setPassword] = useState<string>("")
    let dispatch = useAppDispatch()
    const onClick=function(){
        let data = {
            login:userName,
            password:password
        }
        checkLogin(data,(res)=>{
            if(res.status===200){
                let data = {
                    login:userName,
                    password:password
                }
                dispatch(setLog(true)
                )
            
                 nav("/profile")
            }else{
                setUserName("Alredy exist")
                console.log(userName)
            }

        })
    }
   
        type elemType={
          title:string,
          elem:{
              type:string,
              val:any
          }
      }
      type formType = Array<elemType>

    let arr:formType =[ { 
        title:userName,
        elem:{
          type:"input",
          val:{data:"hi",callback:(e: React.ChangeEvent<HTMLInputElement>)=>{
            if(timeOut.current){
                clearTimeout(timeOut.current)
            }
            timeOut.current = setTimeout(()=>{
                if(e.target.value.length<5){
                    setWarn("Login name must be longer then 5 symbols")
                }else{
                     setWarn("Login name must be longer then 5 symbols")
                    setUserName(e.target.value)
                }
            },1000) 
        }
        }
      }
    },
      { 
        title:"Password",
        elem:{
          type:"input",
          val:{data:"hi",callback:(e: React.ChangeEvent<HTMLInputElement>)=>{setPassword(e.target.value)}}
        }
      }
    
    ]
    return(
            <div>
                <Form val={arr}/>
                <div style={{color:"red"}}>{warn}</div>
                <Button text={"Вход"} onClick={onClick}></Button>
            </div>
    )
    
}

export default RegistrForm