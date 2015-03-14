var test = require('tape')

var pictorgram = require('../data/index.js')

test('pictorgram.meta', function (t){
  t.plan(1)
  var ruby = pictorgram.meta('ruby')
  var expected = require('../data/ruby/ruby.json')
  t.equals(ruby, expected)
})

test('pictorgram.url', function (t){
  t.plan(1)
  var ruby = pictorgram.url('ruby')
  var expected = require('../data/ruby/ruby.json').source.url
  t.equals(ruby, expected)
})