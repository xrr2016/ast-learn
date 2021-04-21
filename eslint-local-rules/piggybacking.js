module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'disallow unnecessary semicolons',
      category: 'Possible Errors',
      recommended: true,
      url: 'https://eslint.org/docs/rules/no-extra-semi'
    },
    fixable: 'code',
    schema: [] // no options
  },
  create(context) {
    var globalScope

    return {
      Program: function () {
        globalScope = context.getScope()
      },
      MemberExpression: function (node) {
        if (node.object.name === 'window' && !isGlobalProperty(node.property)) {
          context.report(
            node,
            "'{{propertyName}}' piggybacks on '{{objectName}}' to extend the global scope",
            { propertyName: node.property.name, objectName: node.object.name }
          )
        }
      }
    }

    function isGlobalProperty(node) {
      return globalScope.variables.some(function (variable) {
        return variable.name === node.name
      })
    }
  }
}
