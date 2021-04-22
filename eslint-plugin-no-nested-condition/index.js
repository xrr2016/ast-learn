module.exports = {
  rules: {
    'no-nested-condition': {
      meta: {
        type: 'suggestion',
        docs: {
          description: '不允许嵌套的条件语句',
        },
      },
      create(context) {
        return {
          IfStatement(node) {
            const { consequent } = node
            const { body } = consequent

            if (body[0] && body[0].type === 'IfStatement') {
              console.log(body[0])

              context.report({
                node: body[0],
                message: '不允许嵌套的条件语句',
              })
            }
          },
        }
      },
    },
  },
}
