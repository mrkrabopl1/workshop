import React, { ReactElement, useEffect, useRef, useState } from 'react'

type propsBarabanType = {
    dataArr:any[],
    callback?:(...args:any)=>void

}

let styleBaraban:any = {
     overflow:"hidden",
     position:"relative"
}




const  Baraban: React.FC<propsBarabanType> = (props) => {
    let {dataArr} = {...props}
    let patronsRef = useRef<HTMLDivElement>(null)
    let [patronsHeight,setPatronsHeight] = useState(0)
    let [patronHeight,setPatronHeight] = useState(0)
    let [barabanHeight,setBarabanHeight] = useState(0)
    let [topArr,setTopArr] = useState([...dataArr])
    let [bottomArr,setBottomArr] = useState<string[]>([])
    let [patronsTop,setPatronsTop] = useState(0)
    let [patronsBottomTop,setPatronsBottomTop] = useState(0)
    let barabanRef = useRef<HTMLDivElement>(null)
    let patronRef = useRef<HTMLDivElement>(null)
    let styleTopPatrons:any = {
        top:patronsTop+"px",
        position:"absolute"
    }

    let styleBottomPatrons:any = {
        top:patronsBottomTop+"px",
        position:"absolute"
    }

    useEffect(()=>{
        if(patronsRef.current){
            setPatronsHeight(patronsRef.current.clientHeight)
            setPatronHeight(patronsRef.current.children[0].clientHeight) 
        }

    },[])


    const scroll = function(e:any){
      let delta = e.deltaY>0?10:-10
      setPatronsTop(patronsTop+delta)
    
    }


  


    const circleScroller = function(e:any){
        if(patronsRef.current&&barabanRef.current){
            let deltaScroll = e.deltaY>0?-10:10
            let delta = patronsTop + patronsHeight - barabanRef.current.clientHeight
            console.log(delta)
          
            setPatronsTop(patronsTop+deltaScroll)
            if(patronsTop+deltaScroll>barabanRef.current.clientHeight||patronsTop+deltaScroll + patronsHeight === 0) {
                setTopArr(dataArr.slice(0,dataArr.length))
                setBottomArr([])
                setPatronsTop(0)
                return
            }
            if(deltaScroll<=0 && delta<=0){
                setTopArr([...dataArr])
                let pos = Math.abs(patronsTop/patronHeight)
                let bottomPos = Math.ceil(pos) 
                let timeArr =dataArr.slice(0,bottomPos)
                setBottomArr(timeArr)
                setPatronsBottomTop(barabanRef.current.clientHeight+ delta + deltaScroll)

            }else if (deltaScroll>0 && delta>0){
                let pos = Math.abs((patronsHeight-delta)/patronHeight)
                let bottomPos = Math.floor(pos) 
                let timeArr = dataArr.slice(bottomPos,dataArr.length)
                setTopArr(dataArr.slice(0,bottomPos))
                setBottomArr(timeArr)
                setPatronsBottomTop(-patronHeight*timeArr.length + delta )
            }else if (deltaScroll<0 && delta>0){
                let pos = Math.abs((patronsHeight-delta)/patronHeight)
                let bottomPos = Math.ceil(pos) 
                let timeArr = dataArr.slice(bottomPos,dataArr.length)
                setTopArr(dataArr.slice(0,bottomPos))
                setBottomArr(timeArr)
                setPatronsBottomTop(patronsTop -patronHeight*timeArr.length +  deltaScroll)
            }else if (deltaScroll>0 && delta<0){
                let pos = Math.abs((patronsHeight+delta)/patronHeight)
                let bottomPos = Math.ceil(pos) 
                let timeArr = dataArr.slice(0,bottomPos)
                setBottomArr(timeArr)
                setPatronsBottomTop(barabanRef.current.clientHeight+ delta + deltaScroll)
            }
        }
    }


    let topPatrons = topArr.map(val=><div>{val}</div>)
    let bottomPatrons = bottomArr.map(val=><div>{val}</div>)
    return(
        <div  onWheel={(e)=>circleScroller(e)} ref={barabanRef} style={styleBaraban}>
            <div style= {styleTopPatrons} ref={patronsRef}>
                {topPatrons}
            </div>
            <div style= {styleBottomPatrons}>
                {bottomPatrons}
            </div>
        </div>
    )
}


export default Baraban