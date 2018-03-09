// Abbreviated asynchronous example
var stylelint = require("stylelint");
const rule = require("./rules/prettier");

module.exports = stylelint.createPlugin(rule.ruleName, rule);
