var test = require('tape')

var css = require('../../../bin/css/css.js')

test('pictorgram.prepareList', function (t){
  t.plan(3)
  var list = css.prepareList(['.DS_Store', 'index.js', 'c++', 'scala'])

  // weed out bad things
  t.equals(list.length, 2)

  // escape names
  t.equals(list[0].name, 'c++')
  t.equals(list[0].cssIdentifier, 'c\\+\\+')
})
