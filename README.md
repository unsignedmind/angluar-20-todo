# Angular20TodoApp

This project is a minimal demonstration shop built with **Angular 20**. It
showcases a simple product catalogue, a cart with local storage persistence and
checkout flow. The codebase was generated using
[Angular CLI](https://github.com/angular/angular-cli) version 19.2.14.

## Features

- Product listing and detail pages
- Cart drawer with quantity management
- Checkout form with order confirmation
- Toast notifications
- Server‑side rendering (SSR) support

## Development server

Install dependencies and start the dev server with:

```bash
npm install
# initialize git hooks
npx husky install
npm start
npm run start:backend # starts the product API
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

### Running with SSR

After building you can serve the server‑side rendered bundle using the following
script:

```bash
npm run serve:ssr:angular-20-todo-app
```

The app will start on `http://localhost:4000/` by default.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Product API

This repository includes a tiny Node.js backend under the `backend/` folder. The Angular app relies on this API for product and cart data.

Start the backend in a separate terminal with:

```bash
npm run start:backend

The development server is configured to proxy `/api` requests to `http://localhost:3000`, so running `npm start` in another terminal will serve the frontend and forward API calls automatically.
```

The API exposes the following endpoints:

- `GET /api/products` – list products
- `GET /api/products/:id` – get a single product
- `GET /api/cart` – view the current cart
- `POST /api/cart` – add a product to the cart (`{ productId, quantity }`)
- `PUT /api/cart/:id` – update quantity
- `DELETE /api/cart/:id` – remove from cart
- `POST /api/checkout` – finalize an order

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Available npm scripts

The `package.json` exposes a couple of handy commands:

| Script                                  | Description                                          |
| --------------------------------------- | ---------------------------------------------------- |
| `npm start`                             | Alias for `ng serve`. Starts the development server. |
| `npm run build`                         | Builds the browser and server bundles.               |
| `npm test`                              | Runs unit tests with Karma.                          |
| `npm run watch`                         | Rebuilds on file changes.                            |
| `npm run serve:ssr:angular-20-todo-app` | Starts the built SSR server.                         |

## Contributing

Contributions are welcome! Please adhere to the project's coding style (two
spaces for indentation and single quotes in TypeScript) and include relevant
tests when adding new features. Feel free to open issues or submit pull
requests for improvements or bug fixes.
After cloning, run `npx husky install` to enable git hooks.
