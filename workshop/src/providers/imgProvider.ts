import axios from "axios";



const imgImport = function (val:any,callback:(val:any)=>void){
    console.log(val)
    const formData = new FormData()
    formData.append("file",val)
//     axios.get(`https://jsonplaceholder.typicode.com/users`)
// .then(res => {
//   const persons = res.data;
// })
//,{headers:{"content-type":"multipart/form-data"}}
axios.post(`http://127.0.0.1:8000/`,formData ,{headers:{"content-type":"multipart/form-data"}}).then((res:any)=>{
 callback(res.data) 
}
)

}



export {imgImport}