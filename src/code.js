#!/usr/bin/env node

const $ = require('gogocode')

function question(query) {
  query = null
  const answer = 42

  return answer
}

const code = `
  const moment = require('moment');
  var a = 1;
  const b = 2;
  function log (x, y = 'World') {
    console.log('a')
    console.log(a, x, y);
  }
`

const newCode = $(code).replace('a', 'c').generate()

console.log(newCode)
