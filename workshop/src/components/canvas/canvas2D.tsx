import React, { ReactElement, useState, useRef, useEffect } from "react"
const Canvas: React.FC<any> = () => {


    let canvasRef = useRef<HTMLCanvasElement>(null)
    let canvas: HTMLCanvasElement
    let [mouseDown, setMouseDown] = useState(false)



    let [startCords, setStartCords] = useState({ x: 0, y: 0 })
    let [imageData, setImageData] = useState<any>(null)
    let context: CanvasRenderingContext2D | null
    useEffect(() => {
        if (canvasRef.current) {
            canvas = canvasRef.current
            context = canvas.getContext('2d')
            createSections(6)
        }
    }, [mouseDown])

    const convertMouseCordsToCanvasCoord = function (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) {
        console.log(canvas)
        if (context && mouseDown) {
            let x = e.clientX - canvas.offsetLeft
            let y = e.clientY - canvas.offsetTop
            context.lineTo(x, y)
            context.stroke();
        }
    }
    const createRect = function (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) {
        if (context && mouseDown) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            if (imageData) {
                context.putImageData(imageData, 0, 0)
            }
            context.beginPath();
            let x = e.clientX - canvas.offsetLeft
            let y = e.clientY - canvas.offsetTop
            context.rect(startCords.x, startCords.y, x - startCords.x, y - startCords.y);
            context.stroke();
        }
    }



    const centrCoord = () => {
        let x = canvas.width / 2
        let y = canvas.height / 2
        return { x: x, y: y }
    }


    const createSections = (n: number) => {
        if (context) {
            let center = centrCoord()
            context.beginPath();

            let step = 360 / n;
            for (let i = 0; i < n; i++) {
                let flag = 1
                let flag2 = 1
                if (step * i > 90 && step * i <= 270) {
                    flag = -1
                }
                if (step * i > 180) {
                    flag2 = -1
                }
                context.moveTo(center.x, center.y);
                var vx = Math.cos(step * i* Math.PI/180) * canvas.width / 2

                // считаем синус текущего значения угла
                // и умножаем на значение радиуса
                var vy = Math.sin(step * i* Math.PI/180) * canvas.width / 2
            
                let h = Math.tan(step * i* Math.PI/180) * canvas.width / 2
                context.lineTo(canvas.width / 2 + vx, canvas.height / 2 -vy);
                context.stroke();

            }
        }





    }


    const createLine = function (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) {
        if (context && mouseDown) {
            if (context && mouseDown) {
                context.clearRect(0, 0, canvas.width, canvas.height);
                if (imageData) {
                    context.putImageData(imageData, 0, 0)
                }
                context.beginPath();
                context.moveTo(startCords.x, startCords.y);
                let x = e.clientX - canvas.offsetLeft
                let y = e.clientY - canvas.offsetTop
                context.lineTo(x, y);
                context.stroke();
            }
        }
    }

    const setStartPosition = function (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) {
        console.log(e)
        if (context) {
            if(context){
                let imgData = context.getImageData(0, 0, canvas.width, canvas.height)
                setImageData(imgData)
            }
            context.lineWidth = 2;
            let x = e.clientX - canvas.offsetLeft
            let y = e.clientY - canvas.offsetTop
            setStartCords({ x: x, y: y })
            context.moveTo(x, y);

        }
    }

    return (
        <div>
            <div style={{ width: "200px", display: "inline-block" }}></div>
            <canvas style={{ border: "solid red 2px" }}
                onMouseDown={(e) => {
                    setMouseDown(true)
                    setStartPosition(e)
                }}
                onMouseUp={() => {
                    if (context) {
                        let imgData = context.getImageData(0, 0, canvas.width, canvas.height)
                        setImageData(imgData)
                    }

                    setMouseDown(false)
                }
                }
                onMouseMove={(e) => {
                    createLine(e)
                }}
                onMouseOut={() => setMouseDown(false)}

                ref={canvasRef} />
        </div>

    )
}

export default Canvas