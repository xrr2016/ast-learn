module.exports = ({ types: t }) => {
  return {
    visitor: {
      BinaryExpression(path) {
        let { node } = path
        const { left, right } = node
        if (node.operator !== '**') return

        const newNode = t.callExpression(
          t.memberExpression(t.identifier('Math'), t.identifier('pow')),
          [left, right]
        )
        path.replaceWith(newNode)
      },
    },
  }
}
