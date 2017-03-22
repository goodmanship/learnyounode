const rio = require('./rio')

function printout(err, list) {
  if (err) console.log(err)
  list.forEach(f => console.log(f))
}
rio(process.argv[2], process.argv[3], printout)