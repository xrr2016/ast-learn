export default function transformer(file, api) {
  const j = api.jscodeshift

  return j(file.source)
    .find(j.CallExpression, {
      callee: {
        type: 'MemberExpression',
        object: { type: 'Identifier', name: 'console' },
      },
    })
    .remove()
    .toSource()
}
