const express = require('express')
const fs = require('fs')

const app = express();
const data = require('./data/data.js')

app.get('/',(req,res)=>{
  res.sendFile(__dirname + '/index.html')
})
//setup videoplayer route
app.get('/searchId/:id',(req,res)=>{
  const {id} = req.params;
  console.log(id)
})
app.get('/videoplayer',(req,res)=>{
  //get range
  let range = req.headers.range;
  //get params
  const id = req.params.id;
  //set video path
  const videoPath = './Videos/Simpson.mp4'
//  console.log(videoPath.substring(16,17))
  //set video size
  const videoSize = fs.statSync(videoPath).size;//used to get size of video
  //set chunk size
  const chunkSize = 1 * 1e6;
  //create start and end
  const start = Number(range.replace(/\D/g,""))
  const end = Math.min(start + chunkSize,videoSize-1)
  //calculate content length and set it to a size
  const content_Length = end - start + 1;
  const headers = {
    "Content-Range":`bytes ${start}-${end}/${videoSize}`,
    "Accept-Ranges":"bytes",
    "Content-Length":content_Length,
    "Content-Type":"video/mp4"
  }
  res.writeHead(206,headers)
  const stream = fs.createReadStream(videoPath,{start,end})
  stream.pipe(res)
})

app.listen(8080,()=>console.log('Server running..Streaming Video in progress'))