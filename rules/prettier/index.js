const ruleName = "prettier/prettier";
const stylelint = require("stylelint");
// Prettier is pretty heavy to load, so lazy loading it
// when rule first gets executed
let prettier;
module.exports = function(expectation, options, context) {
  // console.log(arguments);
  return function(root, result) {
    if (!prettier) {
      prettier = require("prettier");
    }

    var isFormattingOK = prettier.check(root.source.input.css, {
      parser: "scss"
    });

    if (!isFormattingOK) {
      if (context && context.fix) {
        // TODO: Fix the things
      }

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
};

module.exports.ruleName = ruleName;
