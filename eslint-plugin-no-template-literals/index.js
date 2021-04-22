module.exports = {
  rules: {
    'no-template-literals': {
      create(context) {
        return {
          TemplateLiteral(node) {
            context.report(node, '不使用模板字符串')
          },
        }
      },
    },
  },
}
