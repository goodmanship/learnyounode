const http = require('http')
const url = require('url')

function parsetime(d) {
  return {
    'hour': d.getHours(),
    'minute': d.getMinutes(),
    'second': d.getSeconds()
  }
}

function unixtime(d) {
  return {
    'unixtime': d.getTime()
  }
}

function listener(req, res) {
  if (req.method !== 'GET') return res.end('send me a GET and I\'ll tell you\n')
  const reqUrl = url.parse(req.url, true)
  let d = new Date(reqUrl.query['iso'])
  if (reqUrl.pathname == '/api/parsetime') {
    r = parsetime(d)
  } else if (reqUrl.pathname == '/api/unixtime') {
    r = unixtime(d)
  }
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(r))
}

const server = http.createServer(listener)
server.listen(process.argv[2])
