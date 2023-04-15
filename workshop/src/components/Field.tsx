import React, { useRef, useState } from 'react'
import ContextMenu from './ContextMenu'
import { useAppSelector } from '../store/hooks/redux'
import MainBlock from './combinatoricBlock/mainBlock'
interface IFieldProps {
    height:number
    width: number

}

const Field: React.FC<IFieldProps> = ({height, width}) => {
    const [showMenu,setShowMenu] = useState<boolean>(false)
    const coordinate = useRef({x:0,y:0})
    const {data} = useAppSelector(state =>state.fieldReducer)
    const createFieldData = (data:any[])=>{
        let dataArr =[]
        for (let i=0;i<data.length;i++){
                if(typeof data[i] == "object"){
                    dataArr.push( <MainBlock text="C" height={5} low={2} />)
                }else{
                    dataArr.push(<div>{data[i]}</div>)
                }
        }
        return dataArr
    }
    return (    <div style={{display:"flex", width:width+"px",height:height+"px"}}  onContextMenu={e=>{
        e.stopPropagation()
        e.preventDefault()
        coordinate.current.x = e.clientX
        coordinate.current.y = e.clientY
        setShowMenu(!showMenu)


    }} >
     {createFieldData(data)} 
     {showMenu?<ContextMenu x = {coordinate.current.x} y = {coordinate.current.y}/>:<></>}
    </div>)
}

export default Field