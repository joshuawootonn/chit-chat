const express = require('express')
const app = express()



app.get('/', (req,res) => {
  res.send('HELLO WORLDS')
})

server = app.listen(4000)

const io = require('socket.io')(server)

io.on('connection',(socket) => {
  console.log('New User Connected')
  socket.emit('connection_success', "You connected successfully!")
  socket.on('disconnect', () => console.log('User Disconnected'))
})