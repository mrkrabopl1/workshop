import React , { DragEvent,useEffect,useState }  from 'react'
import {imgImport} from "../../providers/imgProvider"
import s from "./dropZone.module.css"
import dropFileType from '../../types/dropFile'


const reader = new FileReader()




type callbackType = (val:dropFileType)=>void
interface IDropZone {
    
    onDrop:callbackType
}


const DropZone: React.FC<any> = (props:IDropZone) => {
    const {onDrop} = {...props}
    const [dropFile,setDropFile] = useState<dropFileType|null>(null);
    const handleDrop = function(e: DragEvent<HTMLDivElement>) {
        e.preventDefault();
        e.stopPropagation();
      
        console.log(e.dataTransfer)
        let files:FileList =e.dataTransfer.files
        
        for(let i =0;i<files.length;i++){
            fileParser(files[i])
        }
    }
    

    useEffect(()=>{
        if(dropFile){
            onDrop(dropFile)
        }

    },[dropFile])

    const fileParser = (file:File)=>{
        imgImport(file,setDropFile)
        reader.onload = function(){
            console.log("fnslkflskdm")
            console.log("pls",reader.result)
    
        };
        reader.readAsDataURL(file)
    }

    console.log("file",dropFile,"FILE  ")
    
    
    return (
        <div style={{backgroundImage:`url(${dropFile?.src} )`}} className={s.main} 
        onDragEnter={(e)=>{e.preventDefault()}}
        onDragOver={(e)=>{e.preventDefault(); e.stopPropagation()}}
        onDrop={handleDrop}>
            <button onClick={()=>{

            }}>   </button>
        </div>
    )
  
   
}

export default DropZone