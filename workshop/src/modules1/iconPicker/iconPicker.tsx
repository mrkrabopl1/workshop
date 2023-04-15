import MoveWrap from "../../components/Mover"
import React, { useEffect, useState ,useRef} from 'react'
import DropZone from "../../components/dropZone/DropZone"
import Button from "src/components/Button"
import Icon from "../../components/icons/iconeCore"
import { useAppSelector,useAppDispatch } from '../../store/hooks/redux'
import { imageSlice } from '../../store/reducers/imageSlice'
import { iconSlice } from '../../store/reducers/iconSlice'
import dropFileType from '../../types/dropFile'
import  s from "./iconPicker.module.css"


const IconPicker : React.FC<any> = () => {
    const dispatch = useAppDispatch()
    const [cords,setCords]=useState({x:0,y:0})
    let [iconSize,setIconSize]=useState(150)
    const {src,size} = useAppSelector(state =>state.imageReducer)
    const {setImg} = {...imageSlice.actions}
    const {setIcon} = {...iconSlice.actions}
    const [dropAreaShow,switchDropAreaShow] = useState(true)

    const block = useRef<HTMLDivElement>(null)

    


    const calculateXCoords = ()=>{
        if(cords.x>iconSize && cords.x<(size.width-iconSize)){
                return -cords.x * 150 / iconSize +150
        }else if(cords.x<=iconSize){
                return 0
        }
        else{
            return -size.width*  150 / iconSize + 2*150
        }
    }

    const calculateYCoords = ()=>{
        if(cords.y>iconSize && cords.x<(size.height-iconSize)){
                return -cords.y * 150 / iconSize +150
        }else if(cords.y<=iconSize){
                return 0
        }
        else{
            return -size.width*  150 / iconSize + 2*150
        }
    }



    const setImage = function(data:dropFileType){
            dispatch(setImg(data))
            switchDropAreaShow(false)
    }
    return(
        <div>
            {dropAreaShow?<DropZone onDrop={setImage}/>:null}
            <Icon/>
            <div style={ { width:"300px", height:"300px",borderRadius:"100%",backgroundSize:size.width * 150 / iconSize+"px", backgroundPosition:`${calculateXCoords()}px ${calculateYCoords()}px` , backgroundImage:`url(${src})` }} >

            </div>
            <div ref = {block} 
            onWheel={(e)=>{
                console.log(e.deltaY)
                if(e.deltaY>0){
                    setIconSize(iconSize+10) 
                }else{
                    if(iconSize>10){
                        setIconSize(iconSize-10) 
                    }
                }
            }} 
            onMouseMove={(e)=>{
                if(block.current){
                    setCords({x:e.clientX,y:e.pageY - block.current.offsetTop})
                }
                
            }} 

            onClick={()=>{
                let x = calculateXCoords()
                let y = calculateYCoords()
                let width = size.width * 150 / iconSize
                let iconSrc = src
                dispatch(setIcon({src:iconSrc,position:{x:x,y:y},size:width}))
               

            }}

            style={{ 
                width:size.width+"px",
                height :size.height+"px",
                backgroundImage:`url(${src})`
                }}  >
                  <svg width="100%" height="100%">
                    <defs width="100%" height="100%">
                        <mask id="mask" x = "0"  y = "0"  width="100%" height="100%">
                        <rect fill="white"  x = "0"  y = "0"  width="100%" height="100%" />
                        <circle cx={cords.x>iconSize?cords.x:iconSize} cy={cords.y>iconSize?cords.y:iconSize} r={iconSize}  />
                        </mask>
                        
                    </defs>
                    <rect style={{fill:"black",mask:`url("#mask")`}}   x = "0"  y = "0"  width="100%" height="100%" fill-opacity="0.55"/>
                  </svg>

            </div>
           
        </div>)
}

export default IconPicker