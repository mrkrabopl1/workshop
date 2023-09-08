import MoveWrap from "src/components/Mover"
import React, { useEffect, useState, useRef } from 'react'
import DropZone from "src/components/dropZone/DropZone"
import Button from "src/components/Button"
import Icon from "src/components/icons/iconeCore"
import { useAppSelector, useAppDispatch } from 'src/store/hooks/redux'
import { userSlice } from 'src/store/reducers/userSlice'
import dropFileType from 'src/types/dropFile'
import s from "./iconPicker.module.css"


const IconPicker: React.FC<any> = () => {
    const dispatch = useAppDispatch()
    const [cords, setCords] = useState({ x: 0, y: 0 })
    const { icon, image } = useAppSelector(state => state.userReducer)
    let [iconSize, setIconSize] = useState(icon.size)
    const { setIcon, setImg } = { ...userSlice.actions }
    const [dropAreaShow, switchDropAreaShow] = useState(true)
    const block = useRef<HTMLDivElement>(null)

    const setCenter = () => {
        let width = image.size.width
        let height = image.size.height
        if (width >= height) {
            setIconSize(height / 2)
            setCords({ x: (width - height) / 2, y: 0 })
        } else {
            setIconSize(width / 2)
            setCords({ x: 0, y: (height - width) / 2 })
        }
    }

    const calculateXCoords = () => {
        if (cords.x > iconSize && cords.x < (image.size.width - iconSize)) {
            return -cords.x * icon.size / iconSize + icon.size
        } else if (cords.x <= iconSize) {
            return 0
        }
        else {
            return -image.size.width * icon.size / iconSize + 2 * icon.size
        }
    }

    const calculateYCoords = () => {
        if (cords.y > iconSize && cords.x < (image.size.height - iconSize)) {
            return -cords.y * icon.size / iconSize + icon.size
        } else if (cords.y <= iconSize) {
            return 0
        }
        else {
            return -image.size.width * icon.size / iconSize + 2 * icon.size
        }
    }


    const setImage = function (data: dropFileType) {
        dispatch(setImg(data))
        switchDropAreaShow(false)
    }
    return (
        <div>
            {dropAreaShow ? <DropZone onDrop={setImage} /> : null}

            <Icon iconSize={100} />
            <Button text={"Центр"} onClick={() => setCenter()} />
            <div style={{
                width: 2 * icon.size + "px",
                height: 2 * icon.size + "px",
                borderRadius: "100%",
                backgroundSize: image.size.width * icon.size / iconSize + "px",
                backgroundPosition: `${calculateXCoords()}px ${calculateYCoords()}px`,
                backgroundImage: `url(${image.src})`
            }} >

            </div>
            <div ref={block}
                onWheel={(e) => {
                    console.log(e.deltaY)
                    if (e.deltaY > 0) {
                        setIconSize(iconSize + 10)
                    } else {
                        if (iconSize > 10) {
                            setIconSize(iconSize - 10)
                        }
                    }
                }}
                onMouseMove={(e) => {
                    if (block.current) {
                        setCords({ x: e.clientX, y: e.pageY - block.current.offsetTop })
                    }

                }}

                onClick={() => {
                    let x = calculateXCoords()
                    let y = calculateYCoords()
                    let width = image.size.width * icon.size / iconSize
                    dispatch(setIcon({ imgWidth: width, position: { x: x, y: y }, size: width }))
                }}

                style={{
                    width: image.size.width + "px",
                    height: image.size.height + "px",
                    backgroundImage: `url(${image.src})`
                }}  >
                <svg width="100%" height="100%">
                    <defs width="100%" height="100%">
                        <mask id="mask" x="0" y="0" width="100%" height="100%">
                            <rect fill="white" x="0" y="0" width="100%" height="100%" />
                            <circle cx={cords.x > iconSize ? cords.x : iconSize} cy={cords.y > iconSize ? cords.y : iconSize} r={iconSize} />
                        </mask>

                    </defs>
                    <rect style={{ fill: "black", mask: `url("#mask")` }} x="0" y="0" width="100%" height="100%" fill-opacity="0.55" />
                </svg>

            </div>

        </div>)
}

export default IconPicker