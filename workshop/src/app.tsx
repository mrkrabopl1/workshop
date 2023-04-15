import React ,  { useState } from 'react'
import style from './app.module.scss'
import Main from './main/main'
import Profile from './main/main'
import KeyBoard from './components/keyBoard/KeyBoard'
import UniversalField from './components/universalField/UniversalField'
import DropZone from './components/dropZone/DropZone'
import IconPicker from './modules1/iconPicker/iconPicker'
import Window from './window/Window'
import Combobox from './components/combobox/Combobox'
import LoggingForm from './modules1/forms/LoggingForm'
import {Route,BrowserRouter as Router,Routes,
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  //{keybord?<Route path="/" element={<KeyBoard />} />:<></>}
const App:React.FC<any> = () => {
    let [keybord,turnKeyboad]=useState<Boolean>(false)


    return (
        <Router>
        <div>
          <Routes>
          <Route path="/" element={<Combobox  />} />
        
           </Routes>
        </div>
    </Router>
        
       
    )
}

export default App