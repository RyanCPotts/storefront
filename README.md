# Project Overview

## Folder Structure

- `/Components`: Reusable UI components.
- `/store`: Redux logic, including actions, reducers, and slices.
- `/__tests__`: Unit tests.


___

LENOVO THINKPAD@DESKTOP-6D5B94P MINGW64 ~/projects/storefront (redux)
$ npm test

> redux-demo@0.0.0 test
> react-scripts test
 PASS  src/store/categories/categories.test.js
 FAIL  src/Components/Categories/Categories.test.jsx
  ● <Categories /> › renders category names

    TestingLibraryElementError: Unable to find an element with the text: /Fruit/. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.

    Ignored nodes: comments, script, style
    <body>
      <div>
        <div>
          <h2>
            Categories
          </h2>
          <ul />
        </div>
      </div>
    </body>

      39 |
      40 |     // Check if categories are rendered in the document
    > 41 |     expect(screen.getByText(/Fruit/)).toBeInTheDocument();
         |                   ^
      42 |     expect(screen.getByText(/Vegetable/)).toBeInTheDocument();
      43 |   });
      44 |

      at Object.getElementError (node_modules/@testing-library/dom/dist/config.js:37:19)
      at node_modules/@testing-library/dom/dist/query-helpers.js:76:38
      at node_modules/@testing-library/dom/dist/query-helpers.js:52:17
      at getByText (node_modules/@testing-library/dom/dist/query-helpers.js:95:19)
      at Object.<anonymous> (src/Components/Categories/Categories.test.jsx:41:19)

  ● <Categories /> › handles category click interaction

    TestingLibraryElementError: Unable to find an element with the text: /Fruit/. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.

    Ignored nodes: comments, script, style
    <body>
      <div>
        <div>
          <h2>
            Categories
          </h2>
          <ul />
        </div>
      </div>
    </body>

      56 |     renderWithStore(store);
      57 |
    > 58 |     const fruitCategory = screen.getByText(/Fruit/);
         |                                  ^
      59 |     fireEvent.click(fruitCategory);
      60 |
      61 |     // Test what should happen after the click

      at Object.getElementError (node_modules/@testing-library/dom/dist/config.js:37:19)
      at node_modules/@testing-library/dom/dist/query-helpers.js:76:38
      at node_modules/@testing-library/dom/dist/query-helpers.js:52:17
      at getByText (node_modules/@testing-library/dom/dist/query-helpers.js:95:19)
      at Object.<anonymous> (src/Components/Categories/Categories.test.jsx:58:34)

One of your dependencies, babel-preset-react-app, is importing the
"@babel/plugin-proposal-private-property-in-object" package without
declaring it in its dependencies. This is currently working because
"@babel/plugin-proposal-private-property-in-object" is already in your
node_modules folder for unrelated reasons, but it may break at any time.

babel-preset-react-app is part of the create-react-app project, which
is not maintianed anymore. It is thus unlikely that this bug will
ever be fixed. Add "@babel/plugin-proposal-private-property-in-object" to
your devDependencies to work around this error. This will make this message
go away.

 FAIL  src/Components/Products/Products.test.jsx
  ● Test suite failed to run

    Jest encountered an unexpected token

    Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.

    Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.

    By default "node_modules" folder is ignored by transformers.

    Here's what you can do:
     • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.
     • If you are trying to use TypeScript, see https://jestjs.io/docs/getting-started#using-typescript
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/configuration
    For information about custom transformations, see:
    https://jestjs.io/docs/code-transformation

    Details:

    C:\Users\LENOVO THINKPAD\projects\storefront\src\store\actions.jsx:10
    const API_URL = import.meta.env.VITE_API_SERVER;
                           ^^^^

    SyntaxError: Cannot use 'import.meta' outside a module

      2 | import { useDispatch, useSelector } from "react-redux";
      3 | import {Card, Typography, Button} from '@mui/material'
    > 4 | import { addToCart, addToCartAndUpdateStock} from '../../store/actions';
        | ^
      5 | import { PanoramaWideAngleSelectRounded } from '@mui/icons-material';
      6 | import {Link} from 'react-router-dom'
      7 |

      at Runtime.createScriptFromCode (node_modules/jest-runtime/build/index.js:1728:14)
      at Object.<anonymous> (src/Components/Products/index.jsx:4:1)
      at Object.<anonymous> (src/Components/Products/Products.test.jsx:2:1)

One of your dependencies, babel-preset-react-app, is importing the
"@babel/plugin-proposal-private-property-in-object" package without
declaring it in its dependencies. This is currently working because
"@babel/plugin-proposal-private-property-in-object" is already in your
node_modules folder for unrelated reasons, but it may break at any time.

babel-preset-react-app is part of the create-react-app project, which
is not maintianed anymore. It is thus unlikely that this bug will
ever be fixed. Add "@babel/plugin-proposal-private-property-in-object" to
your devDependencies to work around this error. This will make this message
go away.

Test Suites: 2 failed, 1 passed, 3 total
Tests:       2 failed, 2 passed, 4 total
Snapshots:   0 total
Time:        23.564 s
Ran all test suites related to changed files.

Watch Usage
 › Press a to run all tests.
 › Press f to run only failed tests.
 › Press q to quit watch mode.
 › Press i to run failing tests interactively.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press Enter to trigger a test run.

