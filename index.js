const fs = require('fs')
const path = require('path')

module.exports = function (name, dir) {
  return fs.createReadStream(pathTo(name, 'png', dir))
}

module.exports.meta = function (name, dir) {
  return require(pathTo(name, 'json', dir))
}

module.exports.url = function (name, dir) {
  return require(pathTo(name, 'json', dir)).source.url
}

module.exports.list = function (dir) {
  dir = dir || __dirname
  return fs.readdirSync(dir)
    .filter(function (item) {
      return item.indexOf('.') === -1
    })
    .filter(function (item) {
      return ['LICENSE', 'node_modules'].indexOf(item) === -1
    })
}

function pathTo(name, ext, dir) {
  dir = dir || __dirname
  if (!ext) return path.join(dir, name)
  var file = name + '.' + ext
  return path.join(dir, name, file)
}
