const fs = require('node:fs')

const readFile = (fileName) =>{
    return new Promise((resolve,reject)=>{
        fs.readFile(fileName,(err,result)=>{
            if(err){
                reject(err)
                return;
            }
            resolve(result.toString('utf-8'))
        })
    })
}
readFile('./text.txt').then((data)=>console.log(data)).catch((err)=>console.log(err))