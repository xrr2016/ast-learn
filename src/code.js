#!/usr/bin/env node

const $ = require('gogocode')
const code = `
  function ask() {
    const answer = 42
    return answer
  }
`
const newCode = $(code)
  .replace('ask', 'question')
  .replace('answer', 'result')
  .generate()

console.log(newCode)

// 输出
// function question() {
//   const result = 42
//   return result;
// }
