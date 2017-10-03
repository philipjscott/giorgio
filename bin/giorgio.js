#! /usr/bin/env node

const argv = require('yargs').argv
const lib = require('../lib/index')
const chokidar = require('chokidar')
const file = process.argv[2]

if (!file) {
  console.error('ERROR: No file specified. Please enter path to a .grg file.')
} else {
  lib(file)
  if (argv.watch) {
    watch(file)
  }
}

function watch(file) {
  chokidar.watch(file, {
    ignored: /(^|[\/\\])\../,
    persistent: true
  }).on('change', (path, stats) => {
    console.log("File change detected! Re-submitting to George...")
    lib(file)
  })
}
