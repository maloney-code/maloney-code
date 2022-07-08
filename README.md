

# MaloneyCode

## create workspace and first project
``` bash
  #install nx globally
  yarn add -g nx

  #create a workspace
  npx create-nx-workspace@latest
  yarn nx generate @nrwl/next:application sandbox --no-interactive --dry-run
 ```

  ## add tailwind support

 ``` bash
  # https://nx.dev/guides/using-tailwind-css-in-react
  # https://blog.nrwl.io/setup-next-js-to-use-tailwind-with-nx-849b7e21d8d0
  yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest
  yarn add -D classnames

```
## for updating dependencies

``` bash
  nx migrate latest
  nx migrate --run-migrations # --create-commits

  # to use a unsupported package version
  nx migrate @nrwl/workspace --to="jest@22.0.0,cypress:3.4.0"

  # to undo commit
  git reset --hard # Reset any changes
  git clean -fd # Delete newly added files and directories
```


## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@maloney-code/mylib`.

## Development server

Run `nx serve sandbox` or `nx serve` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `nx e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
