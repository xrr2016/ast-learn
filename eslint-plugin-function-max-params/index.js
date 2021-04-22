module.exports = {
  rules: {
    'function-max-params': {
      meta: {
        docs: {
          description: '函数参数最多 3 个',
        },
      },
      create: function (context) {
        function getFunctionParamsLoc(node) {
          const paramsLength = node.params.length
          return {
            start: node.params[0].loc.start,
            end: node.params[paramsLength - 1].loc.end,
          }
        }
        return {
          FunctionDeclaration: (node) => {
            if (node.params.length > 3) {
              context.report({
                loc: getFunctionParamsLoc(node),
                node,
                message: '参数最多不能超过3个',
              })
            }
          },
        }
      },
    },
  },
}
