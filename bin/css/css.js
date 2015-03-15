var fs = require('fs')
var Handlebars = require('handlebars')
var cssesc = require('cssesc')

module.exports = function () {
  var baseUrl = 'http://librariesio.github.io/pictogram/data/'
  var tpl = Handlebars.compile(fs.readFileSync(__dirname + '/pictogram.css.hbs', 'utf8'))
  var list = fs.readdirSync(__dirname + '/../../data/')
  var data = list
    .filter(function (item) {
      return item !== 'index.js'
    })
    .map(function (item) {
      return {
        name: cssesc(item),
        url : baseUrl + item + '/' + item + '.png'
      }
    })
  var res = tpl(data)
  console.log(res)
  fs.writeFileSync('pictogram.css', res)
}
