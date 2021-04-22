module.exports = {
  meta: {
    docs: {
      description: '最多参数',
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
}
