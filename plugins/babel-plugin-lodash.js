module.exports = ({ types: t }) => {
  let _loadash = Object.create(null)

  return {
    visitor: {
      ImportDeclaration(path) {
        let { node } = path
        if (node.source.value !== 'lodash') {
          return
        }
        node.specifiers.forEach((spec) => {
          if (t.isImportSpecifier(spec)) {
            console.log(spec)
          } else if (t) {
          }
        })

        path.remove()
      },
    },
  }
}
