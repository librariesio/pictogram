const fs = require('fs')
const path = require('path')

module.exports = function (name) {
  return fs.createReadStream(pathTo(name, 'png'))
}

module.exports.meta = function (name) {
  return require(pathTo(name, 'json'))
}

module.exports.url = function (name) {
  return require(pathTo(name, 'json')).source.url
}

module.exports.list = function () {
  return fs.readdirSync(__dirname).filter(function (item) {
    return ['.DS_Store', 'index.js'].indexOf(item) === -1
  })
}

function pathTo(name, ext) {
  var dir = path.join(__dirname, name)
  if (!ext) return dir
  var file = name + '.' + ext
  return path.join(dir, file)
}
