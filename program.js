const http = require('http')
http.get(process.argv[2], response => {
  response.setEncoding('utf8')
  let chars = '';
  response.on('data', data => {
    chars += data
  })
  response.on('end', () => {
    console.log(chars.length)
    console.log(chars)
  })
  response.on('error', console.error)
}).on('error', console.error)