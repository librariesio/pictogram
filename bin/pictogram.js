const fs = require('fs')
const path = require('path')
const async = require('async')
const request = require('request')

// check if dir
// make if false or force
// fetch url
// write name + headers + source

module.exports = function (opts) {
  async.waterfall([
    mkdir.bind(null, opts),
    fetchImage,
    writeMeta
  ], function (err, res) {
    if (err) return console.error(err.message || err)
    console.log('ok')
  })
}

function mkdir (opts, cb) {
  var filepath = path.join(process.cwd(), opts.name)
  filepath = path.normalize(filepath)
  if(fs.existsSync(filepath)) {
    if (opts.force) return cb(null, filepath, opts)
    return cb(new Error('Directory exists. Use -f to force. ' + filepath))
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
    cb
  )
}
