const http = require('http')
let responses = ['', '', '']
let done = [false, false, false]
function hitIt(url, i) {
  http.get(url, response => {
    response.setEncoding('utf8')
    response.on('error', console.error)
    response.on('data', data => responses[i] += data)
    response.on('end', () => {
      done[i] = true
      if (done.every(x => x)) responses.forEach(r => console.log(r))
    })
  })
}
process.argv.slice(2).forEach(hitIt)
