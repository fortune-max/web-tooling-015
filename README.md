# web-tooling-015 - Final Project (Dynamic Website)

The aim of this project was to leverage on as many of the new tools learned during the course - M6: Web Tooling and Modern Setup.

Some of these were:

-   Prettier
-   ESLint
-   Husky
-   Lint-Staged
-   nvmrc
-   Github Actions
-   Vercel/Netlify (SSG)
-   Figma
-   Storybook
-   React (not strictly part of the course, but I was interested in getting my hands dirty).
-   Several others in the form of web apps and resources:
    -   https://www.radix-ui.com/
    -   https://ariakit.org/
    -   https://headlessui.com/
    -   https://commitlint.js.org/#/ (lint runner)
    -   https://gitmoji.dev/ (commit standard)
    -   https://github.com/pmndrs/react-three-fiber
    -   https://alexsidorenko.com/
    -   https://overreacted.io/
    -   https://playwright.dev/
    -   https://dribbble.com
    -   https://dan.church (on Internet Archive)
    -   https://testingjavascript.com/ (Kent C. Dodds)
    -   https://todomvc.com (Todo app in JS frameworks)
    -   https://github.com/welldone-software/why-did-you-render (For debugging needless rerenders React)
    -   https://github.com/gvergnaud/hotscript ((over-)extending Typescript to form computed types)
    -   https://remix.run (An alternative to microfrontends (?))
    -   https://github.com/vercel/satori (Convert HTMl and CSS to SVG assets)
    -   https://www.remotion.dev/ (Create videos programmatically using React)

The idea I came up with for my aimed to use as much tooling as possible, in a creative way.

It borrows ideas from Web 2.0 and r/place (and pxls.space) by allowing users dictate whatever they want to see on the site, provided they can fit it creatively into a single React component.

The website is hosted at https://web-tooling-015.vercel.app.

It's Storybook is hosted at https://web-tooling-015-storybook.vercel.app.

There are two conditions for the submitted component to be valid.

The default export should be named DynamicComponent and it should contain data-testid="dynamic-component" as an attribute for at least one rendered html tag. This is to ensure during testing that the Component can be rendered on a page.

Its dependencies include:

-   Prettier & ESLint: to properly format the one-liner react component to readable text in preview as well as act as a buffer for error checking before deploying.
-   Github Actions: To run pushed code to verify it is renderable and properly linted.
-   Vercel: For making the app accessible over the Internet and keeping it up to date whenever the repo is updated.
-   Husky: For running tests and linting before committing to ensure pushed code follows guidelines (and prevent possible merge conflict headaches for everyone else).
-   Lint-staged: Limits the number of files to be linted to just those which were modified.
-   nvmrc: To ensure the node version used matches the one used in development.
-   Storybook: For previewing components in Isolation and understanding their behaviour with different props.

To run the app, first clone the repo, then `npm install` to install dependencies. Then `npm start` to run the project.

The custom npm scripts are:

-   npm run lint: which runs prettier then eslint
-   npm test: which runs the tests to ensure Component renders and tests the Todo demo component
-   prepare: which installs husky when `npm install` is executed
-   npm run build-storybook: which generates a storybook folder containing files which can then be served using any basic http server (static storybook)
-   npm run storybook: which monitors the stories and serves them as they are updated (dynamic storybook)

The git hooks used are

-   npx lint-staged: which runs lint-staged on all commited files on pre-commit
-   npm test -- --watchAll=false: which runs all tests and continues with commit if they pass. The watchAll parameter makes the test not run in monitor mode and hence run only once.

The github actions configured are similar to the git hooks except the lint runs on the whole project as opposed to just committed files.
