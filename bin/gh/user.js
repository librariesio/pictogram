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
const pictureTube = require('picture-tube')
const request = require('request')
const cheerio = require('cheerio')

module.exports = function (opts) {
  scrapeUserPage(opts, function (err, opts) {
    if (err) return console.error(err.message || err)

    var tube = pictureTube()
    tube.pipe(process.stdout)
    request(opts.url).pipe(tube)
  })
}

function scrapeUserPage (opts, cb) {
  var url = 'https://github.com/' + opts.name
  opts.referrer = url
  request(url, function (err, resp, body) {
    if(err) return cb(err)
    var $ = cheerio.load(body)
    var avatar = $('.js-username .avatar')
    opts.url = avatar.attr('src')
    if (!opts.url) return cb(new Error('No github user found for ' + opts.name))
    cb(null, opts)
  })
}
