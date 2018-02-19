// Abbreviated asynchronous example
var stylelint = require("stylelint")

var ruleName = "prettier/prettier"
var messages =  stylelint.utils.ruleMessages(ruleName, {
  expected: "Expected ...",
})

module.exports = stylelint.createPlugin(ruleName, function(primaryOption, secondaryOptionObject) {
  return function(postcssRoot, postcssResult) {
    var validOptions = stylelint.utils.validateOptions(postcssResult, ruleName)
    if (!validOptions) { return }

    return new Promise(function(resolve) {
      // some async operation
      setTimeout(function() {
        // ... some logic ...
        stylelint.utils.report({ .. })
        resolve()
      }, 1)
    })
  }
})

module.exports.ruleName = ruleName
module.exports.messages = messages