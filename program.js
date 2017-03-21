const fs = require('fs')
const path = require('path')
function filter(fileName) {
  return path.extname(fileName).slice(1) === process.argv[3]
}
function filteredFiles(err, list) {
  if (err) return console.log(err)
  list.filter(filter).forEach(f => console.log(f))
}
fs.readdir(process.argv[2], 'utf8', filteredFiles)
