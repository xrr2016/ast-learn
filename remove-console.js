export default function ({ types: t }) {
  return {
    visitor: {
      Identifier(path, state) {
        if (path.node.operator !== '===') {
          return
        }
        path.node.left = t.identifier('sebmck')
        path.node.right = t.identifier('dork')
      },
      ASTNodeTypeHere(path, state) {},
    },
  }
}
