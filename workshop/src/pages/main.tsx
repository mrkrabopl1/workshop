import React , { ReactElement,useState } from "react"

import Icon from "../components/icons/iconeCore"
import PageSwitcher from '../components/PageSwitcher'
import Form from '../modules/forms/Form'

interface elemType{
    title:string,
    elem:{
        type:string,
        val:any
    },
    notify?:{
        color:string,
        text:string
    }
}
type formType = Array<elemType>


  
  let arr1:formType =[{ 
    title:"Name1",
    elem:{
      type:"row",
      val:{data:"hi",callbac:null}
    }
   
  },{ 
    title:"Phondsae",
    elem:{
      type:"input",
      val:{data:"hi1w",callbac:null}
    }
  }]

  type switchType={
    chosen:number,
    pages:{title:string,elem:ReactElement}[],
 
}
const Main:React.FC<any> = () => {

    let arr:formType =[{ 
        title:"Name",
        elem:{
          type:"row",
          val:{data:"hi",callbac:null}
        }
       
      },{ 
        title:"Phone",
        elem:{
          type:"input",
          val:{data:"hi",callbac:null}
        }
    }]
 
    let data:switchType = {chosen:0,pages:[{title:" Личные данные",elem:<Form  val={arr} />},{title:"Привет",elem:<Form  val={arr1} />}]}

    return (
     <div>
            <Icon iconSize={100}/>
            <PageSwitcher  data= {data}/>

     </div>
    )
}

export default Main