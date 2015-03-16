/*

              _        __
       ___   (_) ____ / /_ ___   ___ _  ____ ___ _  __ _
      / _ \ / / / __// __// _ \ / _ `/ / __// _ `/ /  ' \
     / .__//_/  \__/ \__/ \___/ \_, / /_/   \_,_/ /_/_/_/
    /_/                        /___/

                 A pictorial symbol for a word or phrase.

                                  A libraries.io project.

- re-grab a grabbed pictogram
*/
const grab = require('../grab/grab.js')
const picto = require('../../data/index.js')

module.exports = function (opts) {
  var meta = picto.meta(opts.name)
  grab({
    name: opts.name,
    url: meta.source.url,
    referrer:meta.source.referrer,
    force: true
  })
}
