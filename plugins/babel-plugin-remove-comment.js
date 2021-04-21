module.exports = ({ types: t }) => {
  return {
    visitor: {
      Program(path) {
        path.traverse({
          enter(path) {
            t.removeComments(path.node)
          },
        })
      },
    },
  }
}
