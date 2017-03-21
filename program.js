const fs = require('fs')
function logLines(err, data) {
  console.log(data.split('\n').length - 1)
}
fs.readFile(process.argv[2], 'utf8', logLines)
