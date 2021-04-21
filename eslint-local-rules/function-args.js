module.exports = {
  meta: {
    docs: {
      description: 'disallow identifiers',
      category: 'Possible Errors',
      recommended: false
    },
    schema: []
  },
  create: function (context) {
    return {
      Identifier: function (node) {
        context.report({
          node: node,
          message: 'Identifiers not allowed for Super Important reasons.111'
        })
      }
    }
  }
}
