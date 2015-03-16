/*

              _        __
       ___   (_) ____ / /_ ___   ___ _  ____ ___ _  __ _
      / _ \ / / / __// __// _ \ / _ `/ / __// _ `/ /  ' \
     / .__//_/  \__/ \__/ \___/ \_, / /_/   \_,_/ /_/_/_/
    /_/                        /___/

                 A pictorial symbol for a word or phrase.

                                  A libraries.io project.

 - check if dir
 - make if false or force
 - fetch url
 - write name + headers + source
 */
const fs = require('fs')
const path = require('path')
const async = require('async')
const request = require('request')

module.exports = function (opts /* {name: '', url: '', referrer:''} */) {
  async.waterfall([
    mkdir.bind(null, opts),
    fetchImage,
    writeMeta
  ], function (err, filepath, opts) {
    if (err) return console.error(err.message || err)
    console.log('Created pictogram for %s in %s', opts.name, opts.file)
  })
}

function mkdir (opts, cb) {
  var filepath = path.join(process.cwd(), opts.name)
  filepath = path.normalize(filepath)
  if(fs.existsSync(filepath)) {
    if (opts.force) return cb(null, filepath, opts)
    return cb(new Error(opts.name + ' directory exists. Use -f to force. '))
  }
  fs.mkdir(filepath, function(err) {
    cb(err, filepath, opts)
  })
}

function fetchImage (filepath, opts, cb) {
  var tmpFile =  path.join(filepath, opts.name + '.tmp')
  var dest = fs.createWriteStream(tmpFile)
  dest.on('error', cb)
  dest.on('finish', function (err) {
    // mv tmp file
    var type = opts.headers['content-type'] // eugh... this magic bean was set on during the `response` event
    var ext = (type && type.split('/')[1]) || 'png'
    var filename = opts.name + '.' + ext
    opts.file = path.join(opts.name, filename)
    fs.rename(tmpFile, path.join(filepath, filename), function () {
      cb(err, filepath, opts)
    })
  })

  var src = request(opts.url)
    .on('error', cb)
    .on('response', function(resp) {
      opts.headers = resp.headers
    })

  src.pipe(dest)
}

function writeMeta (filepath, opts, cb) {
  var meta = {
    name: opts.name,
    source: {
      url: opts.url,
      referrer: opts.referrer,
      headers: opts.headers
    }
  }
  var filename = opts.name + '.json'
  fs.writeFile(
    path.join(filepath, filename),
    JSON.stringify(meta, null, 2),
    "utf8",
    function (err, res) {
      cb(err, filepath, opts)
    }
  )
}
