const Hapi = require('hapi');


const server = Hapi.server({
    port: 4000,
    host: 'localhost'
});

const io = require('socket.io')(server.listener)

require('route')

const init = async () => {

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();



io.on('connection',(socket) => {
  console.log('New User Connected')
  socket.emit('connection_success', "You connected successfully!")
  socket.on('disconnect', () => console.log('User Disconnected'))
  
  socket.on('new_message', (data) => {    
    io.sockets.emit('new_message', data)
  })
})


