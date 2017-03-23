const fs = require('fs')
const http = require('http')

function listener(req, res) {
  const src = fs.createReadStream(process.argv[3])
  src.pipe(res)
}
const server = http.createServer(listener)
server.listen(process.argv[2])
