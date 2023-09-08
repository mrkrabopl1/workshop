import React , { ReactElement,useState } from "react"
import Icon from "../components/icons/iconeCore"
import PageSwitcher from '../components/PageSwitcher'
import Form from '../modules/forms/Form'


type elemType={
    title:string,
    elem:{
        type:string,
        val:any
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

  type switchType={
    chosen:number,
    pages:{title:string,elem:ReactElement}[],
 
}
const Profile:React.FC<any> = () => {

 
    let data:switchType = {chosen:0,pages:[{title:" Личные данные",elem:<Form  val={arr} />},{title:"Привет",elem:<Form  val={arr1} />}]}

    return (
     <div id="Profile">
            <Icon iconSize={300}/>
            <PageSwitcher  data= {data}/>

     </div>
    )
}

export default Profile