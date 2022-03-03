const MESSAGES = {
  typography: '@vtb/ui-kit/tokens/typography',
  color: '@vtb/ui-kit/tokens/color',
  constant: '@vtb/ui-kit/tokens(opacity|zindex)',
};

function getIsContainedIncorrectValue({ node, context, regexp, error }) {
  const isValid = context
    .getSourceCode()
    .getTokens(node.quasi)
    .some(({ type, value }) => type === 'Template' && new RegExp(regexp).test(value));

  if (!isValid) return;

  context.report({
    node,
    message: `Импортируй ${error} из ${MESSAGES[error]}`,
  });
}

module.exports = {
  checkTypography: (context) => ({
    TaggedTemplateExpression: (node) =>
      getIsContainedIncorrectValue({
        node,
        context,
        regexp: 'line-height|letter-spacing|font-size',
        error: 'typography',
      }),
  }),

  checkColor: (context) => ({
    TaggedTemplateExpression: (node) =>
      getIsContainedIncorrectValue({
        node,
        context,
        regexp: '(color|background|background-color):\\s?(#|rgba)',
        error: 'color',
      }),
  }),
  checkConstant: (context) => ({
    TaggedTemplateExpression: (node) =>
      getIsContainedIncorrectValue({
        node,
        context,
        regexp: '(opacity|z-index):\\s?\\d',
        error: 'constant',
      }),
  }),
  checkTodo: (context) =>
    context
      .getAllComments()
      .filter(({ value }) => new RegExp('(todo|TODO|Todo):?(?!-[a-zA-Z0-9А-Яа-я])').test(value))
      .map(({ loc }) =>
        context.report({
          loc,
          message: 'Todo должно содержать фамилию (на английском) и/или номер задачи в описании через -',
        }),
      ),
};
