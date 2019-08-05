# angular-8-ngrx-example
Angular 8 NgRx Example, application using Angular 8 and NgRx.lication design.

The full source code is available at [https://github.com/angularexample/angular-8-ngrx-example](https://github.com/angularexample/angular-8-ngrx-example).

## Table of Contents
- [Project Setup](#project-setup)
  * [How To Install](#how-to-install)
  * [How To Run](#how-to-run)
  * [How To Run Unit Tests](#how-to-run-unit-tests)
  * [How To Run End To End Tests](#how-to-run-end-to-end-tests)
- [Software Libraries Used](#software-libraries-used)
-  [About The Author](#about-the-author)


## Project Setup
### How To Install
Download the source code using git or else download and unzip the zip file.

Open a terminal window and go to the project root folder.

You need to have npm installed globally.

Run `npm i` to install the required libraries.

### How To Run
Run `ng serve` for a dev server.

Navigate to `http://localhost:4200/`.

The browser will automatically reload if you change any of the source files.

### How To Run Unit Tests
To run the unit tests, you need to stop the server.
 
If the server is running, stop the server from the terminal window by pressing *Control-C*.

To run the unit tests, Run the following command in the terminal window.

`ng test -- --no-watch --no-progress --browsers=ChromeHeadlessCI`

And if you're running on Windows,
include the `--disable-gpu` flag. See [crbug.com/737678](https://bugs.chromium.org/p/chromium/issues/detail?id=737678).

### How To Run End To End Tests
To run the unit tests using Angular *cli*, you need to stop the server.
 
If the server is running, stop the server from the terminal window by pressing *Control-C*.

To run the e2e tests using Angular cli, Run the following command in the terminal window.

`ng e2e -- --protractor-config=e2e/protractor-ci.conf.js`

And if you're running on Windows,
include the `--disable-gpu` flag. See [crbug.com/737678](https://bugs.chromium.org/p/chromium/issues/detail?id=737678).

## Software Libraries Used

The following main software libraries are used:
```text
Angular 8
Angular Material 8
Angular Flex-Layout 8
NgRx 8
RxJS 6
```

## About The Author
The author is JC Lango, who has over 7 years experience as a UI Architect and Angular Expert, on large scale web applications for mostly Fortune 500 companies.

JC may be available to work remote, and can be contacted at these links
 
LinkedIn: [www.linkedin.com/in/jclango](www.linkedin.com/in/jclango)
