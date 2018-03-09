const path = require("path");
const fs = require("fs");

const FOLDERS = ["fixtures/accept", "fixtures/reject", "fixtures/fixed"];
const FILES = [["basic.css"], ["basic.css"]];

const testRule = require("../../../test/testRule");
const rule = require("..");

const contents = FILES.map((fileList, index) =>
  fileList.map(file => {
    return {
      fileName: file,
      contents: fs.readFileSync(
        path.join(__dirname, FOLDERS[index], file),
        "utf-8"
      )
    };
  })
);

const tests = {
  accept: contents[0].map(file => ({
    code: file.contents
  })),
  reject: contents[1].map(file => ({
    code: file.contents
  }))
};

testRule(
  rule,
  Object.assign({}, tests, {
    ruleName: rule.ruleName
  })
);
