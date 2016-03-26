var test = require('tape')
var pictorgram = require('./index.js')

test('pictorgram.meta', function (t){
  t.plan(1)
  var ruby = pictorgram.meta('ruby')
  var expected = require('./vendor/assets/images/ruby/ruby.json')
  t.equals(ruby, expected)
})

test('pictorgram.url', function (t){
  t.plan(1)
  var ruby = pictorgram.url('ruby')
  var expected = require('./vendor/assets/images/ruby/ruby.json').source.url
  t.equals(ruby, expected)
})

test('pictorgram.list', function (t){
  t.plan(5)
  var list = pictorgram.list()
  t.equals(list[0], 'actionscript', 'actionscript is first alphabetically.')
  t.equals(list[list.length - 1], 'xml', 'xml is last alphabetically.')
  t.equals(list.indexOf('LICENSE'), -1, 'No LICENSE')
  t.equals(list.indexOf('package.json'), -1, 'No files with dots in the name')
  t.equals(list.indexOf('.gitignore'), -1, 'No files with dots at the front')
})
