const dns = require("node:dns")

dns.lookupService("127.0.0.1","2000",(err,host,service)=>{
    console.log(host,service)
})