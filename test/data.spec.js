var test = require('tape')

test('pictorgram meta', function (t){
  var pictorgram = require('../data/index.js')
  var ruby = pictorgram.meta('ruby')
  t.equals(ruby, require('../data/ruby/ruby.json'))
})