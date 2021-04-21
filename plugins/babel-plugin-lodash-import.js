module.exports = ({ types: t }) => {
  return {
    visitor: {
      ImportDeclaration(path) {
        let { node } = path
        if (node.source.value !== 'lodash') return
        const val = node.source.value

        node.specifiers.forEach((spec) => {
          if (t.isImportSpecifier(spec)) {
            const { local } = spec

            path.insertBefore(
              t.importDeclaration(
                [t.importDefaultSpecifier(local)],
                t.stringLiteral(`${val}/${local.name}`)
              )
            )
          }
        })

        path.remove()
      },
    },
  }
}
