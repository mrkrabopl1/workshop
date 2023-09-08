import React, { useRef, useState } from "react"
import Row from '../../components/Row'
import Button from '../../components/Button'
import { useAppSelector, useAppDispatch } from '../../store/hooks/redux'
import { checkLogin,checkMail,checkTel } from "../../providers/logProvider"
import Form from "../forms/Form"
import { userSlice } from '../../store/reducers/userSlice'
import {
    useNavigate
} from "react-router-dom";


// const form={
//     square:1,
//     round:2
// }
type TimeOutType = ReturnType<typeof setTimeout>

const LoggingForm: React.FC<any> = () => {
    const nav = useNavigate()
    const { setLog } = { ...userSlice.actions }
    let [userName, setUserName] = useState<string>("")
    let [password, setPassword] = useState<string>("")
    let [mail, setMail] = useState<string>("")
    let [phone, setPhone] = useState<string>("")
    let [userNotify,setUserNotify]= useState<{text:string,color:string}>({text:"",color:"black"})
    let [passNotify,setPassNotify]= useState<{text:string,color:string}>({text:"",color:"black"})
    let [mailNotify,setMailNotify]= useState<{text:string,color:string}>({text:"",color:"black"})
    let [phoneNotify,setPhoneNotify]= useState<{text:string,color:string}>({text:"",color:"black"})
    
    let timeOut = useRef<TimeOutType | null>(null)
    let [warn, setWarn] = useState<string>("")
    let dispatch = useAppDispatch()
    const onClick = function () {
        let data = {
            login: userName,
            password: password
        }
      
    }

    const checkPhoneValid = (val:{enumData:string,inputData:string})=>{
        if (Number(val.inputData)){
            if(val.inputData.length ==10){
                let data = {
                    tel: val.enumData+val.inputData,
                }
                checkTel(data,(res)=>{

                })
            }
        }
    }


    const checkValid = (val:string)=>{
        if (val.length < 5) {
            setUserName("")
            setUserNotify({
                text:"Login name must be longer then 5 symbols",
                color:"red"
               })
        } else {
            let data = {
                login: userName,
            }
            
            checkLogin(data, (res) => {
                if (res.status === 200) {
                    //dispatch(setLog(true))
                    
                    setUserName(val)
                    setUserNotify({
                        text:'\u2713',
                        color:"green"
                       })
                   // nav("/profile")
                } else {
                   setUserName("")
                   setUserNotify({
                    text:"Alredy exist",
                    color:"red"
                   })
                }
    
            })
            setUserName(val)
        }
}


    type elemType = {
        title: string,

        elem: {
            type: string,
            val: any
        },
        notify?:{
            text:string,
            color:string
        }
    }
    type formType = Array<elemType>

    let arr: formType = [{
        title: "Login",
        notify:userNotify,
        elem: {
            type: "input",
            val: {
                data: "", callback: (val:string) => {
                    if (timeOut.current) {
                        clearTimeout(timeOut.current)
                    }
                    timeOut.current = setTimeout(() => {
                        checkValid(val)
                    }, 1000)
                }
            }
        }
    },
    {
        title: "Password",
        notify:passNotify,
        elem: {
            type: "input",
            val: { data: "", callback: (e: React.ChangeEvent<HTMLInputElement>) => { 
                if (e.target.value.length < 5) {
                    setPassword("")
                    setWarn("Login name must be longer then 5 symbols")
                } else{
                    setPassword(e.target.value) } 
                }
                
              
            }
        }
    },

    {
        title: "Mail",
        notify:mailNotify,
        elem: {
            type: "mail",
            val: { data: "", callback: setMail } 
        }
    },
    {
        title: "Telephone",
        notify:phoneNotify,
        elem: {
            type: "enum",
            val: { data: "",left:true, callback:  checkPhoneValid}
        }
    }

    ]
    return (
        <div>
            <Form val={arr} />
            <Button text={"Вход"} onClick={onClick}></Button>
        </div>
    )

}

export default LoggingForm