import { get, isFunction } from 'lodash'

const obj = {
  foo: {
    bar: {
      fizz: buzz,
    },
  },
}

const fizz = get(obj, 'foo.bar.fizz')

console.log(fizz)
console.log(isFunction(obj))
