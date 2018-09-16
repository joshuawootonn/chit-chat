server.route({
  method: 'GET',
  path: '/',
  handler: (request, h) => {

      return 'Hello, world!';
  }
});

server.route({
  method: 'GET',
  path: '/{name}',
  handler: (request, h) => {

      return 'Hello, ' + encodeURIComponent(request.params.name) + '!';
  }
});
