#!/usr/bin/env node

const pictogram = require('./pictogram')
const request = require('request')
const cheerio = require('cheerio')
const async = require('async')

const opts =
  require('nomnom')
    .script("pictogram")
    .options({
      name: {
        required: true,
        position: 0,
        help: "the concept"
      },
      github: {
        abbr: 'g',
        help: 'the github org name'
      },
      force: {
        flag: true,
        abbr: 'f',
        help: 'to hell with the consequences'
      }

    })
    .nocolors()
    .nom()


function fetchOrgPage (opts, cb) {
  var url = 'https://github.com/' + opts.github
  opts.referrer = url
  request(url, function (err, resp, body) {
    if(err) return cb(err)
    var $ = cheerio.load(body)
    var avatar = $('.org-header .avatar')
    opts.url = avatar.attr('src')
    cb(null, opts)
  })
}

fetchOrgPage(opts, function (err, opts) {
  if (err) return console.err(err)
  pictogram(opts)
})

