module.exports = ({ types: t }) => {
  return {
    visitor: {
      Program(path) {
        path.traverse({
          enter(path) {
            if (t.isMemberExpression(path.node)) {
              const { node } = path
              const {
                object: { name },
              } = node

              if (name !== 'console') return

              path.parentPath.remove()
            }
          },
        })
      },
    },
  }
}
