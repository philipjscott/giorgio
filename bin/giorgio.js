#! /usr/bin/env node

const lib = require('../src/index')
const file = process.argv[2]

if (!file) {
  console.error('ERROR: No file specified. Please enter path to a .grg file')
} else {
  lib(file)
}
