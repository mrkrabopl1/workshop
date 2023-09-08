import React, { ReactElement, useState, useRef, useEffect } from "react"
import Form from "src/modules/forms/Form"
const GravityCanvas: React.FC<any> = () => {


    let canvasRef = useRef<HTMLCanvasElement>(null)
    let canvasGraph = useRef<HTMLCanvasElement>(null)
    let canvas: HTMLCanvasElement
    let canvasGr: HTMLCanvasElement
    let [mouseDown, setMouseDown] = useState(false)


    let [H, setH] = useState(1)
    let [g, setG] = useState(9.8)
    let [m, setM] = useState(50)

    let fallTime = 0


    let v = 0

    let diffTime = 0
    let hPass = 0

    let Cx = 0.9

    let p = 1.25

    let kU = 0.9

    let a = g

    let s = 1




    let [startCords, setStartCords] = useState({ x: 0, y: 0 })
    let [imageData, setImageData] = useState<any>(null)
    let context: CanvasRenderingContext2D | null
    let contextGr: CanvasRenderingContext2D | null

    const fallDraw = (k: number) => {
        if (context && canvasRef.current&&canvasGraph.current) {
            let heihgt = canvasRef.current?.clientHeight
            context?.clearRect(0, 0, canvasRef.current?.clientWidth, canvasRef.current?.clientHeight)
            context?.beginPath()
            console.log(v * 2, heihgt * k)
            contextGr?.lineTo(v * 2, heihgt * k);
            contextGr?.stroke()
            context?.arc(canvasRef.current?.clientWidth / 2, heihgt * k - 20, 20, 0, 2 * Math.PI, false);

            context.fillStyle = 'green';
            context.fill();
        }


    }
    useEffect(() => {
        fallTime = Math.pow(2 * H / g, 0.5) * 1000
        if (canvasRef.current && canvasGraph.current) {
            canvas = canvasRef.current
            context = canvas.getContext('2d')

            canvasGr = canvasGraph.current
            contextGr = canvasGr.getContext('2d')
            contextGr?.beginPath()
            contextGr?.moveTo(0, 0)
            animateFall(fallDraw, 0)

        }
    }, [g, H, m])


    let fallConvertor = (timePass: number) => {




        return (a * timePass * timePass / 2) / H
    }



    function animateFall(draw: (data: number) => void, startH: number) {

        let start = performance.now();
        hPass = startH

        let stop = false

        if (startH / H > 0.99) {
            stop = true
        }

        diffTime = start

        requestAnimationFrame(function animate(time) {

            let timePass = time / 1000 - diffTime / 1000

            console.log(timePass)

            let a = (m * g - Cx * v * s * p * v / 2) / m
            v = v + a * timePass
            hPass = v * timePass + hPass
            // timeFraction изменяется от 0 до 1



            let progress = hPass / H;
            if (progress > 1) progress = 1;

            // вычисление текущего состояния анимации

            draw(progress); // отрисовать её

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                if (stop) {
                    return
                }
                backwordAnimate(fallDraw)
            }
            diffTime = time

        });
    }


    function backwordAnimate(draw: (data: number) => void) {

        let start = performance.now();
        hPass = 0
        diffTime = start
        v = v * kU
        requestAnimationFrame(function animate(time) {
            let timePass = time / 1000 - diffTime / 1000
            let a = -(m * g + Cx * v * s * p * v / 2) / m
            v = v + a * timePass
            hPass = v * timePass + hPass
            // timeFraction изменяется от 0 до 1
            let progress = 1 - hPass / H

            if (v < 0) v = 0;

            // вычисление текущего состояния анимации
            draw(progress); // отрисовать её

            if (v > 0) {
                requestAnimationFrame(animate);
            } else {
                animateFall(fallDraw, H - hPass)
            }
            diffTime = time

        });
    }

    type elemType = {
        title: string,

        elem: {
            type: string,
            val: any
        },
        notify?: {
            text: string,
            color: string
        }
    }
    type formType = Array<elemType>

    let arr: formType = [{
        title: "g",
        elem: {
            type: "float",
            val: {
                data: g, callback: setG
            }
        }
    },
    {
        title: "H",
        elem: {
            type: "float",
            val: { data: H, callback: setH }


        }
    },
    {
        title: "m",
        elem: {
            type: "float",
            val: { data: m, callback: setM }
        }
    },
    ]

    return (
        <div>
            <button onClick={() => setH(H + 1)}>Restart</button>
            <Form val={arr} />
            <div style={{ width: "200px", display: "inline-block" }}></div>
            <canvas style={{ border: "solid red 2px" }} ref={canvasRef} />
            <canvas style={{ border: "solid red 2px" }} ref={canvasGraph} />

        </div>

    )
}

export default GravityCanvas