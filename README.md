# stylelint-plugin-prettier

> **This plugin is a stale work in progress, prefer the [stylelint-prettier](https://github.com/prettier/stylelint-prettier) plugin backed by the Prettier team. No further development will happen on this repository.**

Stylelint plugin to check (and fix) formatting with Prettier

## TODO

 - [x] Provide a new "prettier/prettier" rule
 - [x] Detect broken formatting with out-of-the-box Prettier
 - [x] Improve testing
    - [ ] ~Remove `stylelint-test-rule-tape`, no need for its default tests~ 
              Not the source of default tests actually. They were coming from Stylelint's
              createRuleTester
    - [x] Read test CSS from files, eg. in `fixtures/accept` and `fixtures/reject` folders
  - [ ] Use prettier for fixing formatting
 	- [ ] Global autofixing
   	- [ ] `disableFix` option
 - [ ] Provide recommended config (using stylelint-config-prettier?)
 - [ ] Add `options` option to pass prettier options
 - [ ] Load Prettier config from .prettierrc
 - [ ] Provide more specific error message? Is it needed as prettier or `--fix` will just run over the whole file?
