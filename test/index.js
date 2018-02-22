var testRule = require("stylelint-test-rule-tape");
var prettierRule = require("..");

testRule(prettierRule.rule, {
  ruleName: prettierRule.ruleName,
  config: "",
  accept: [
    {
      code: `.foo {
  bar: baz;
}`
    }
  ],
  reject: [{ code: ".Foo { bar: baz}" }]
});
