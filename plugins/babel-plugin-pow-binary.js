module.exports = ({ types: t }) => {
  return {
    visitor: {
      CallExpression(path) {
        const {
          node: { callee, arguments },
        } = path
        const {
          object: { name: objName },
          property: { name: propName },
        } = callee
        if (objName !== 'Math' || propName !== 'pow') return

        path.replaceWith(t.binaryExpression('**', ...arguments))
      },
    },
  }
}
