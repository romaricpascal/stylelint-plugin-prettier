# stylelint-plugin-prettier

Stylelint plugin to check (and fix) formatting with Prettier

## TODO

[x] Provide a new "prettier/prettier" rule
[x] Detect broken formatting with out-of-the-box Prettier
[ ] Improve testing
    [ ] Remove `stylelint-test-rule-tape`, no need for its default tests
    [ ] Read test CSS from files, eg. in `fixtures/accept` and `fixtures/reject` folders
[ ] Use prettier for fixing formatting
[ ] Provide recommended config (using stylelint-config-prettier?)
[ ] Load Prettier config from .prettierrc
[ ] Provide more specific error message? Is it needed as prettier or `--fix` will just run over the whole file?