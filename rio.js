const fs = require('fs')
const path = require('path')
function filteredFiles(list, ext) {
  return list.filter(fileName => path.extname(fileName).slice(1) === ext)
}
function files(dir, ext, callback) {
  fs.readdir(dir, 'utf8', (err, list) => {
    if (err) return callback(err)
    let shortList = filteredFiles(list, ext)
    callback(null, shortList)
  })
}
module.exports = files
