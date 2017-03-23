const http = require('http')
const map = require('through2-map')

function listener(req, res) {
  if (req.method !== 'POST') return res.end('send me a POST\n')
  req.pipe(map(chunk => chunk.toString().toUpperCase())).pipe(res)
}
const server = http.createServer(listener)
server.listen(process.argv[2])
