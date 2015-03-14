/*
- Scrap github for org images
*/
const pictogram = require('./pictogram')
const request = require('request')
const cheerio = require('cheerio')

module.exports = function (opts) {
  fetchOrgPage(opts, function (err, opts) {
    if (err) return console.err(err)
    pictogram(opts)
  })
}

function fetchOrgPage (opts, cb) {
  var org = opts.org || opts.name
  var url = 'https://github.com/' + org
  opts.referrer = url
  request(url, function (err, resp, body) {
    if(err) return cb(err)
    var $ = cheerio.load(body)
    var avatar = $('.org-header .avatar')
    opts.url = avatar.attr('src')
    cb(null, opts)
  })
}


