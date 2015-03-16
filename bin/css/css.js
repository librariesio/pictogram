var fs = require('fs')
var Handlebars = require('handlebars')
var cssesc = require('cssesc')

function generateCss () {
  var baseUrl = 'http://librariesio.github.io/pictogram/data/'
  var list = fs.readdirSync(__dirname + '/../../data/')
  var data = prepareList(list, baseUrl)
  var res = toCss(data)
  fs.writeFileSync('pictogram.css', res)
}

function prepareList (list, baseUrl) {
  return list
    .filter(function (item) {
      return ['.DS_Store', 'index.js'].indexOf(item) === -1
    })
    .map(function (item) {
      return {
        name: item,
        cssIdentifier: cssesc(item, {'isIdentifier': true}),
        url : baseUrl + item + '/' + item + '.png'
      }
    })
}

function toCss (data) {
  var tpl = Handlebars.compile(fs.readFileSync(__dirname + '/pictogram.css.hbs', 'utf8'))
  return tpl(data)
}

module.exports = generateCss
module.exports.toCss = toCss
module.exports.prepareList = prepareList
