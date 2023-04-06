# playwright-ct-vite-reproduction

This reproduction is for a bug that appears in the terminal when running playwright component tests.

## Getting started

From the monorepo root directory, run:

```bash
pnpm i
```

Now, run playwright component tests via:

```bash
pnpm --filter "@ct/components" test:units
```

## Error

> Invalid option in transform() call: "jsxSideEffects"

The error appears when adding `"vite": "^2.8.6"` to the `peerDependencies` of `@ct/components`.

![Playwright components test fail with Invalid option in transform() call: "jsxSideEffects"](./playwright-ct-error-terminal.png)

Additionally, for the repro this bug appeared for first, playwright keeps using an old version of vite (2.9.15) to build for production although the only remaindings of this version in the whole monorepo appear in the `pnpm-lock` file. I wonder how to tell playwright which vite to use because using a more recent version of vite seem to fix the issue.
