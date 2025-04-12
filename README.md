# TripMapperDemo
TripMapperDemo is a dynamic visual mapping tool built with Angular that allows users to plot and differentiate multiple trips between locations based on specific rules. The application visually distinguishes between continued, non-continued, and repeated trips using levels and directional indicators.
* Key Features
- Input fields for Start Point and End Point.
- Each location is represented using the first three characters of the name (e.g., Ban for Bangalore).
- Visual representation of trips using straight lines or arrows.

* Trip visualization logic:
- Continued Trip (e.g., Bangalore → Chennai → Ooty): Shown on Level 1 with a straight line
- Non-Continued Trip (e.g., Bangalore → Chennai, Ooty → Bangalore): Shown on Level 1 with an arrow
- Consecutive trips with the same start and end point: Shown on Level 2

* Supports adding unlimited trips, with responsive layout adjusting to fit within defined dimensions

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.7.

## Development server

To start a local development server, run:

```bash
ng serve
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

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
