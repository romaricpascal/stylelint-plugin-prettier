// Abbreviated asynchronous example
var stylelint = require("stylelint");

var ruleName = "prettier/prettier";
var messages = stylelint.utils.ruleMessages(ruleName, {
  expected: "Expected ..."
});
// Prettier is pretty heavy to load, so lazy loading it
// when first rule gets executed
var prettier;
module.exports = stylelint.createPlugin(
  ruleName,
  function() /* primaryOption,
  secondaryOptionObject */
  {
    return function(root, result) {
      if (!prettier) {
        prettier = require("prettier");
      }

      var isFormattingOK = prettier.check(root.source.input.css, {
        parser: "scss"
      });

      if (!isFormattingOK) {
        stylelint.utils.report({
          ruleName: ruleName,
          result: result,
          node: root,
          line: 0,
          column: 0,
          message: "Formatting doesn't match Prettier's"
        });
      }
    };
  }
);

module.exports.ruleName = ruleName;
module.exports.messages = messages;
