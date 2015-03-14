#!/usr/bin/env node

const pictogram = require('./pictogram')

const opts =
  require('nomnom')
    .script("pictogram")
    .options({
      name: {
        required: true,
        position: 0,
        help: "the concept"
      },
      url: {
        required: true,
        position: 1,
        help: 'the image url'
      },
      referrer: {
        required: true,
        position: 2,
        help: 'the page you found the image on'
      },
      force: {
        flag: true,
        abbr: 'f',
        help: 'to hell with the consequences'
      }

    })
    .nocolors()
    .nom()

pictogram(opts)
