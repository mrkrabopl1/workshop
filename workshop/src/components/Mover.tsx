import React, { useEffect, useRef, useState ,useCallback} from 'react'
type KeyBoardOptions = {
    width:number,
    style:number,
    startPosition:{
        x:number,
        y:number
    }
}



const MoveWrap:React.FC<any>=(content)=>{
    let keyBoardRef = useRef<HTMLDivElement|null>(null)
    let startPosition={x:0,y:0}
    let [KBP,setKeyBoardPosition] = useState(startPosition)
    let [clicked,setClicked] = useState<Boolean>(false)
   

    useEffect(()=>{
        const keyBoardMove =function(e:MouseEvent) {
            let offsetLeft = keyBoardRef.current?.offsetLeft
            let offsetTop = keyBoardRef.current?.offsetHeight
            if(offsetLeft!== undefined && offsetTop!==undefined){
                console.log( keyBoardRef.current?.offsetWidth)
                let x = e.clientX 
                let data = {
                    x:x,
                    y:e.clientY
                }
    
                setKeyBoardPosition(data)
            }
          
        }
      
        if(clicked){
            window.addEventListener("mousemove",keyBoardMove)
        }else{
            console.log('r')
            
                window.removeEventListener("mousemove",keyBoardMove)
            
           
        }

        return()=>  {

        console.log("Event is deleted")
        window.removeEventListener("mousemove",keyBoardMove)
    }
         
            
    

    },[clicked])
 
    return (
        <div 
        onMouseDown={()=>{setClicked(true)}}  
        onMouseUp={()=>{setClicked(false)}} style={{ top:KBP.y -10+"px",left:KBP.x-20 +"px"}}>
            {content}
        </div>
    )
      
    
}

export default MoveWrap