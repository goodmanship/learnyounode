const net = require('net')
const strftime = require('strftime')

function listener(socket) {
  const date = strftime('%Y-%m-%d %H:%M', new Date())
  socket.end(date + '\n')
}
const server = net.createServer(listener)
server.listen(process.argv[2])
