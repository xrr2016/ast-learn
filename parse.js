const { Parser } = require('acorn')
const code = 'const answer = 42'
const ast = Parser.parse(code, {
  ecmaVersion: 'latest',
})

console.log(ast)
