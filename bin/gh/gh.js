/*

              _        __
       ___   (_) ____ / /_ ___   ___ _  ____ ___ _  __ _
      / _ \ / / / __// __// _ \ / _ `/ / __// _ `/ /  ' \
     / .__//_/  \__/ \__/ \___/ \_, / /_/   \_,_/ /_/_/_/
    /_/                        /___/

                 A pictorial symbol for a word or phrase.

                                  A libraries.io project.

- Scrap github for org images
*/
const grab = require('../grab/grab.js')
const request = require('request')
const cheerio = require('cheerio')

module.exports = function (opts) {
  fetchOrgPage(opts, function (err, opts) {
    if (err) return console.error(err.message || err)
    grab(opts)
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
    if (!opts.url) return cb(new Error('No github org found for ' + org))
    cb(null, opts)
  })
}
