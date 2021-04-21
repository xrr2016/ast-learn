module.exports = ({ types: t }) => {
  return {
    visitor: {
      BinaryExpression(path) {
        if (path.node.operator !== '===') {
          return
        }
        console.log('left: ', path.node.left)
        console.log('right: ', path.node.right)
        path.node.left = t.identifier('sebmck')
        path.node.right = t.identifier('dork')
      },
    },
  }
}
