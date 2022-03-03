const checkFunction = require('./lintMethods');

module.exports = {
  'no-typography': {
    create: checkFunction.checkTypography,
  },
  'no-color': {
    create: checkFunction.checkColor,
  },
  'no-number-for-opacity/z-index': {
    create: checkFunction.checkConstant,
  },
  'no-todo-without-name': {
    create: checkFunction.checkTodo,
  },
};
