import axios from "axios";



const tableImport = function (header: string, callback: (val: any) => void) {


    let json = JSON.stringify({header:header})

    axios.post(`http://127.0.0.1:8000/table`, json, { headers: { "content-type": "application/json" } }).then((res: any) => {
        callback(res.data)
    })
}



export { tableImport }