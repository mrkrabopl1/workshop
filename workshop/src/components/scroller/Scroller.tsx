import React, { ReactElement, useEffect, useRef, useState } from 'react'

import ScrollerThumb from './ScrollThubm'
import ForwardRefWrap from 'src/components/wraps/ForwardRef'

type propsScrollerType = {
    content:ReactElement
}

let styleWrapper:any = {
     overflow:"hidden",
     position:"relative",
     height:"440px",
     width:"200px"
}




const  Scroller: React.FC<propsScrollerType> = (props) => {
    let {content} = {...props}

    let [contTop,setContTop] = useState(0)
    let [contLeft,setContLeft] = useState(0)

    let contentRef = useRef<HTMLDivElement>(null)

    let kVertSize = useRef(0);
    let kVertPos = useRef(0);
    let kHorSize = useRef(0);
    let kHorPos = useRef(0);
    let [horizontal,setHorizontal] = useState(false)
    let [vertical,setVertical] = useState(false)
    let scroller = useRef<HTMLDivElement>(null)
    let scrollCont = useRef<HTMLDivElement>(null)


    useEffect(()=>{
    
        if(scroller.current&&scrollCont.current){
                if(scrollCont.current.clientWidth>scroller.current.clientWidth){
                    kHorSize.current =scroller.current.clientWidth/scrollCont.current.clientWidth; 
                    setHorizontal(true)
                }
                if(scrollCont.current.clientHeight>scroller.current.clientHeight){
                    kVertSize.current =scroller.current.clientHeight/scrollCont.current.clientHeight; 
                    setVertical(true)
                }
        }
       
    },[])


    const styleScroller:any = {
        position:"relative",
        width:"100%",
        height:"100%",
        overflow:"hidden"
    }



    const styleContent:any = {
        position:"absolute",
        top:contTop+"px",
        left:contLeft+"px"
      
    }


    const scrollVertical = (deltaScroll:number,proportion:boolean=false) =>{
        if(scrollCont.current && scroller.current){
            let maxScroll =scroller.current?.clientHeight -  scrollCont.current?.clientHeight 
            if(proportion){
                deltaScroll = maxScroll*deltaScroll
            }
            if(deltaScroll + contTop > 0){
                kVertPos.current = 0
                setContTop(0)
            }else if (deltaScroll + contTop < maxScroll){
                kVertPos.current = 1
                setContTop(maxScroll)
            }else{
                kVertPos.current = (contTop + deltaScroll)/maxScroll
                //console.log(contTop,maxScroll)
                setContTop(contTop + deltaScroll)
            }
            }
       
    }




    const scrollHorizontal = (deltaScroll:number,proportion:boolean=false) =>{
        console.log("gfdgdfgd")
        if(scrollCont.current && scroller.current){
            let maxScroll =scroller.current?.clientWidth -  scrollCont.current?.clientWidth
            if(proportion){
                deltaScroll = maxScroll*deltaScroll
            }
            if(deltaScroll + contLeft > 0){
                kHorPos.current = 0
                setContLeft(0)
            }else if (deltaScroll + contLeft < maxScroll){
                kHorPos.current = 1
                setContLeft(maxScroll)
            }else{
                kHorPos.current = (contLeft + deltaScroll)/maxScroll
                setContLeft(contLeft + deltaScroll)
            }  
           
        
        }
    }

    return(
        <div id={"Scroller"} onWheel={(e)=>{
            e.stopPropagation();
            let deltaScroll = e.deltaY>0?-10:10
            scrollVertical(deltaScroll)
            }} ref={scroller} style={styleScroller}>
            <div id = {"Wrap"} ref={scrollCont} style={styleContent}>
               {content}
            </div>
            {vertical?<ScrollerThumb callback={ scrollVertical} isVertical={true} kSize={kVertSize.current} kPos={kVertPos.current}/>:null}
            {horizontal?<ScrollerThumb callback={ scrollHorizontal} isVertical={false} kSize={kHorSize.current} kPos={kHorPos.current}/>:null}
          
        </div>
    )
}


export default Scroller