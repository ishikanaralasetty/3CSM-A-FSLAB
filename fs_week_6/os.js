const os=require('os')
const path=require('path')


const 


//-------os module-------
console.log("os info")
console.log("platform:",os.platform())
console.log("cpu arch:",os.arch())
console.log("cpu info:",os.cpus()[0].model,`(${os.cpus().length} cores)`)
console.log("total mem:",(os.totalmem()/(1024**3)).toFixed(2),"gb")
console.log("free mem:",(os.freemem()/(1024**3)).toFixed(2),"gb")


//----path module------
