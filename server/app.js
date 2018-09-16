const Hapi = require('hapi');
const Bcrypt = require('bcrypt')




const users = {
  john: {
      username: 'john',
      password: '$2a$10$iqJSHD.BGr0E2IxQwYgJmeP3NvhPrXAeLSaGCj6IR/XU5QtjVu5Tm',   // 'secret'
      name: 'John Doe',
      id: '2133d32a'
  }
};

const validate = async (request, username, password, h) => {
 
  if (username === 'help') {
      return { response: h.redirect('https://hapijs.com/help') };     // custom response
  }

  const user = users[username];
  if (!user) {
      return { credentials: null, isValid: false };
  }

  const isValid = await Bcrypt.compare(password, user.password);
  const credentials = { id: user.id, name: user.name };

  return { isValid, credentials };
};





const main = async () => {
 
  const server = Hapi.server({
    port: 4000,
    host: 'localhost'
});

  await server.register(require('hapi-auth-basic'));

  server.auth.strategy('simple', 'basic', { validate });
  server.auth.default('simple');

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
  
        return 'Hello, world!';
    }
  });

  const io = require('socket.io')(server.listener)
  io.on('connection',(socket) => {
    console.log('New User Connected')
    socket.emit('connection_success', "You connected successfully!")
    socket.on('disconnect', () => console.log('User Disconnected'))
    
    socket.on('new_message', (data) => {    
      io.sockets.emit('new_message', data)
    })
  })

  await server.start();

  return server;
};

main()
.then((server) => console.log(`Server listening on ${server.info.uri}`))
.catch((err) => { console.error(err); process.exit(1);});






