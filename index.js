// Abbreviated asynchronous example
var stylelint = require("stylelint");

var ruleName = "prettier/prettier";
var messages = stylelint.utils.ruleMessages(ruleName, {
  expected: "Expected ..."
});

module.exports = stylelint.createPlugin(
  ruleName,
  function() /* primaryOption,
  secondaryOptionObject */
  {
    return function() {};
  }
);

module.exports.ruleName = ruleName;
module.exports.messages = messages;
