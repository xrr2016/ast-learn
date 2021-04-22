export default function transformer(file, api) {
  const j = api.jscodeshift
  const root = j(file.source)

  root.find(j.JSXIdentifier).forEach((p) => {
    const { node } = p
    if (node.name !== 'Fragment') return

    j(p.parent).remove()
  })

  return root.toSource()
}
