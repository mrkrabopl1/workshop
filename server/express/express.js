const express = require('express')
const path = require('path')
const mime = require('mime-types')
const imageSize = require('image-size')

const cors = require('cors')
const fs = require('fs')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload');
const app = express()




app.use(cors())

app.use("/express",express.static(__dirname));
app.use(fileUpload())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
const port = 8000
app.post('/', (req, res) => {

    
    let file = req.files.file
    console.log(file)
    console.log(req.files.file)
    file.mv('./express/' + file.name,(res1)=>{
        console.log(mime.lookup('./express/' + file.name))
        fs.readFile('./express/' + file.name, {encoding: 'base64'},(err,data)=>{
            let mimeType = mime.lookup('./express/' + file.name)
            const dimensions = imageSize('./express/' + file.name)
            let stringData = "data:"+mimeType+";base64,"+data
            res.send({src:stringData,size:{width:dimensions.width,height:dimensions.height}})
        })

    }
    )
    // fs.readFile("./"+file.name,(data)=>{
    //             console.log(data)
    // })
 
})

app.listen(port, (req) => {
  console.log(`Example app listening on port ${port}`)
})