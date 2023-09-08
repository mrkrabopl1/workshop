import React, { ReactElement, useEffect, useRef, useState } from 'react'

type propsBarabanType = {
    line: string,
    isVertical: boolean
}

let styleWrapper: any = {
    overflow: "hidden",
    position: "relative",
    height: "440px",
    width: "200px"
}




const RunningLine: React.FC<propsBarabanType> = (props) => {
    let { line, isVertical } = { ...props }
    let patronsRef = useRef<HTMLDivElement>(null)
    let [posFirstTop, setPosFirstTop] = useState(0)
    let [posSecondTop, setPosSecondTop] = useState(0)
    let [posFirstLeft, setPosFirstLeft] = useState(0)
    let [tick, setTick] = useState(true)
    let [posSecondLeft, setPosSecondLeft] = useState(0)
    let [patronsTop, setPatronsTop] = useState(0)
    let wrapper = useRef<HTMLDivElement>(null)
    let lineRef = useRef<HTMLDivElement>(null)


    useEffect(() => {
        if (wrapper.current && lineRef.current) {
            if (isVertical) {
                let delta = wrapper.current.clientHeight - lineRef.current.clientHeight

                if (delta >= 0) {
                    setPosSecondTop(0 - lineRef.current.clientHeight)
                } else {
                    setPosSecondTop(delta - lineRef.current.clientHeight)
                    setPosFirstTop(delta)
                }
                verticalAnimate(verticalDraw, 5000)
            } else {
                let delta = wrapper.current.clientWidth - lineRef.current.clientWidth

                if (delta >= 0) {
                    setPosSecondLeft(-lineRef.current.clientWidth)
                } else {
                    setPosSecondLeft(delta - lineRef.current.clientWidth)
                    setPosFirstLeft(delta)
                }
                verticalAnimate(horizontalDraw, 5000)
            }


        }

    }, [tick])




    function verticalDraw(pos: number) {
        if (wrapper.current && lineRef.current) {
            let delta = wrapper.current.clientHeight - lineRef.current.clientHeight
            if (delta > 0) {
                setPosFirstTop(pos * (wrapper.current.clientHeight))
                setPosSecondTop(pos * (wrapper.current.clientHeight) - delta - wrapper.current.clientHeight)
            } else {
                setPosFirstTop(pos * (lineRef.current.clientHeight) + delta)
                setPosSecondTop(pos * (lineRef.current.clientHeight) + delta - lineRef.current.clientHeight)

            }

        }

    }


    function horizontalDraw(pos: number) {
        if (wrapper.current && lineRef.current) {
            let delta = wrapper.current.clientWidth - lineRef.current.clientWidth
            if (delta > 0) {
                setPosFirstLeft(pos * (wrapper.current.clientWidth))
                setPosSecondLeft(pos * (wrapper.current.clientWidth) - delta - lineRef.current.clientWidth)
            } else {
                setPosFirstLeft(pos * (lineRef.current.clientWidth) + delta)
                setPosSecondLeft(pos * (lineRef.current.clientWidth) + delta - lineRef.current.clientWidth)

            }

        }

    }


    function verticalAnimate(draw: (data: number) => void, duration: number) {

        let start = performance.now();
        requestAnimationFrame(function animate(time) {
            let progress = (time - start) / duration

            if (progress > 1) {
                setTick(!tick)
                return
            } else {
                requestAnimationFrame(animate)
            }

            draw(progress)

        });
    }

    let styleFirst: any = {
        position: "absolute",
        left: posFirstLeft + "px",
        top: posFirstTop + "px",
        textAlign: "center"
    }


    let styleSecond: any = {
        position: "absolute",
        left: posSecondLeft + "px",
        top: posSecondTop + "px",
        textAlign: "center"
    }


    if (isVertical) {
        styleFirst.width = "10px"
        styleSecond.width = "10px"
        styleFirst.wordBreak = "break-all"
        styleSecond.wordBreak = "break-all"

    }
    return (
        <div ref={wrapper} style={styleWrapper}>
            <div ref={lineRef} style={styleFirst} >
                {line}
            </div>
            <div style={styleSecond} ref={patronsRef}>
                {line}
            </div>
        </div>
    )
}


export default RunningLine