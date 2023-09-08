import React ,  { ReactElement,useState,useRef } from 'react'
import style from './app.module.scss'
import Main from './main/main'
import global from "src/global.css"
import Profile from './pages/profile'
import Menu from './modules/menu/Menu'
import Canvas from './components/canvas/canvas2D'
import KeyBoard from './components/keyBoard/KeyBoard'
import UniversalField from './components/universalField/UniversalField'
import DropZone from './components/dropZone/DropZone'
import IconPicker from './modules/iconPicker/iconPicker'
import Scroller from "src/components/scroller/Scroller"
import ImagePresantation from './components/imagesPresantation/ImagesPresentation'
import Window from './window/Window'
import Combobox from './components/combobox/Combobox'
import RunningLine from 'src/components/runningLine/RunningLine'
import Baraban from 'src/components/baraban/Baraban'
import Form from './modules/forms/Form'
import RadioHolder from './components/radioHolder/RadioHolder'
import NameBorder from './components/wraps/NameBorder'
import LoggingForm from './modules/forms/LoggingForm'
import Switcher from './components/switcher/LineSwitcher'
import GravityCanvas from 'src/components/canvas/gravity'
import PriceHolder from './modules/PriceHolder/PriceHolder'
import AsyncComboboxColumn from './components/comboboxColumn/AsyncCombobxColumn'
import PageSwitcher from './components/PageSwitcher'
import MerchBlock from './components/contentCell/MerchBlock'
import ContentSlider from './components/contentSlider/ContentSlider'
import Table from './components/table/sortTable/Table'
import {Route,BrowserRouter as Router,Routes,
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Calendar from './modules/calendar/calendar'

  //{keybord?<Route path="/" element={<KeyBoard />} />:<></>}
const App:React.FC<any> = () => {
  type elemType={
    title:string,
    elem:{
        type:string,
        val:any
    }
}
type formType = Array<elemType>

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


    let data:switchType = {chosen:0,pages:[{title:" Личные данные",elem:<Form  val={arr} />},{title:"Привет",elem:<Form  val={arr1} />}]}

    let div = useRef(null)
    let barabanProps = {
      line : "Tghfffffffffffffffffffffffffffffffffffffffffffffffdntertttttteeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeertest",
      isVertical:false
    }

    let refBlock = useRef(null)

 
     
    
   
        
    //<ContentSlider content={[<MerchBlock data = {{name:"Air Jordan",imgs:["public/snick1.jpg","public/snick2.jpg"]}}/>,<MerchBlock data = {{name:"Air Jordan",imgs:["public/snick1.jpg","public/snick2.jpg"]}}/>,<MerchBlock data = {{name:"Air Jordan",imgs:["public/snick1.jpg","public/snick2.jpg"]}}/>,<MerchBlock data = {{name:"Air Jordan",imgs:["public/snick1.jpg","public/snick2.jpg"]}}/>,<MerchBlock data = {{name:"Air Jordan",imgs:["public/snick1.jpg","public/snick2.jpg"]}}/>,<MerchBlock data = {{name:"Air Jordan",imgs:["public/snick1.jpg","public/snick2.jpg"]}}/>]}/>
    return (
        <Router>
        <div id={"kk"} >
          <Routes>
          <Route path="/" element={<AsyncComboboxColumn headers={["test","test2","test4"]} />}></Route>
          <Route path="/Scroller" element={<div style={{height:"200px",width:"200px"}}><Scroller  content={<div className={global.back}style={{width:"500px",height:"600px"}} ref = {div}></div>}/></div>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/iconPicker" element={<IconPicker />} />
          <Route path="/login" element={<LoggingForm />} />
           </Routes>
        </div>
    </Router>
        
       
    )
}

export default App