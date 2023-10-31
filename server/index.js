const http = require('http');
const server = http.createServer();

const io = require('socket.io')(server, {
  cors: { origin: '*' },
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('message', (message) => {
    console.log(message);
    io.emit('message', `${socket.id.substr(0, 2)} said ${message}`);
  });
});

server.listen(8080, () => console.log('server is running on port 8080'));
