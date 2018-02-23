var path = require("path");
var glob = require("globby");
var readFile = require("fs-readfile-promise");
require("loud-rejection")();
var ACCEPT_FOLDER = "fixtures/accept/**/*.css";
var REJECT_FOLDER = "fixtures/reject/**/*.css";

function getFileContents(globPattern) {
  return glob(globPattern, {
    cwd: __dirname
  }).then(function(files) {
    return Promise.all(
      files.map(function(file) {
        return readFile(path.join(__dirname, file), "utf8");
      })
    );
  });
}

var testRule = require("stylelint-test-rule-tape");
var prettierRule = require("..");

Promise.all([
  getFileContents(ACCEPT_FOLDER),
  getFileContents(REJECT_FOLDER)
]).then(function(contents) {
  var tests = {
    ruleName: prettierRule.ruleName,
    config: {},
    accept: contents[0],
    reject: contents[1]
  };
  testRule(prettierRule.rule, tests);
});

// testRule(prettierRule.rule, {
//   ruleName: prettierRule.ruleName,
//   config: "",
//   accept: [
//     {
//       code: `.foo {
//   bar: baz;
// }`
//     }
//   ],
//   reject: [{ code: ".Foo { bar: baz}" }]
// });
