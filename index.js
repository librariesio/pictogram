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
  return fs.readdirSync(path.join(dir, 'vendor', 'assets', 'images'))
    .filter(function (item) {
      return item.indexOf('.') === -1
    })
}

function pathTo(name, ext, dir) {
  dir = dir || __dirname
  if (!ext) return path.join(dir, 'vendor', 'assets', 'images', name)
  var file = name + '.' + ext
  return path.join(dir, 'vendor', 'assets', 'images', name, file)
}
