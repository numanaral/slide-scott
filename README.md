# slide-scott

SlideScott Front End

-   Enforce code styling (eslint and prettier)
-   Precommit check (husky & lint-staged)

#### Eg failure on `git add . && git commit -m "test"` due to linting failure.

---

```js
// test.js
const hello = 5;
```

```
C:\Projects\GIT\slide-scott>git add .

C:\Projects\GIT\slide-scott>git commit -m "test"
husky > pre-commit (node v13.12.0)
[STARTED] Preparing...
[SUCCESS] Preparing...
[STARTED] Running tasks...
[STARTED] Running tasks for *.js
[STARTED] eslint --cache --fix
[FAILED] eslint --cache --fix [FAILED]
[FAILED] eslint --cache --fix [FAILED]
[SUCCESS] Running tasks...
[STARTED] Applying modifications...
[SKIPPED] Skipped because of errors from tasks.
[STARTED] Reverting to original state because of errors...
[SUCCESS] Reverting to original state because of errors...
[STARTED] Cleaning up...
[SUCCESS] Cleaning up...

× eslint --cache --fix:

C:\Projects\GIT\slide-scott\src\containers\App\test.js
  1:7  error  'hello' is assigned a value but never used  no-unused-vars

✖ 1 problem (1 error, 0 warnings)

husky > pre-commit hook failed (add --no-verify to bypass)
```
