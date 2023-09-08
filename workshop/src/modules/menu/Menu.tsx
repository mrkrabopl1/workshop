import React, { ReactElement, useRef, useState } from 'react'
import { userSlice } from 'src/store/reducers/userSlice'
import Icon from 'src/components/icons/iconeCore'
import { useAppSelector,useAppDispatch } from 'src/store/hooks/redux'
import { NavLink} from 'react-router-dom'
import LineSwitcher from 'src/components/switcher/LineSwitcher'

import global from "src/global.css"
type propsRowType = {
    data:any,
    callback:(...args:any)=>void|null
}

let imgStyle:any = {
    width:"200px",
    height:"200px",
    borderRadius:"50%",
    position:"absolute",
    left:"5%",
    top:"100%"

}
let menuStyle:any = {
    display:"flex",
    justifyContent:"right",
    position:"relative",
    borderBottom:"2px solid blue"

}

const Menu: React.FC<any> = (props) => {
    const {isLog} = useAppSelector(state =>state.userReducer)
    return(
        <div className='test' style={menuStyle}>
            <img style ={imgStyle} src="public/mondelbrot.jpg" alt="" />
            <NavLink to="/home" className={global.link} >Home</NavLink>
            <NavLink to="/services" className={global.link} >Услуги</NavLink><br/>
           <LineSwitcher/>
           {isLog? 
                <NavLink to="/profile" className={global.link} >{<Icon iconSize={200}/>}</NavLink>:
                <NavLink to="/login" className={global.link} >Вход</NavLink>

           } 

        </div>
    )
}


export default Menu