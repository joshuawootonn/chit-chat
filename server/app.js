const express = require('express')
const app = express()



app.get('/', (req,res) => {
  res.send('HELLO WORLDS')
})

server = app.listen(4000)

const io = require('socket.io')(server)

io.on('connection',(socket) => {
  console.log('New User Connected')
})