var fs = require('fs')

function list (opts) {
  opts = opts || {}
  var dir = opts.dir || __dirname + '/../../data/'
  var files = fs.readdirSync(dir)
  return files.filter(function (item) {
    return ['.DS_Store', 'index.js'].indexOf(item) === -1
  })
}

function print (opts) {
  list(opts).forEach(function (item) {
    console.log(item)
  })
}

module.exports = list
module.exports.print = print
