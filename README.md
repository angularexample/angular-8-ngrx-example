# angular-8-ngrx-example
Angular 8 NgRx Example application using Angular 8 and NgRx 8.

Created by AngularExample. [https://github.com/angularexample](https://github.com/angularexample)

The full source code is available at [https://github.com/angularexample/angular-8-ngrx-example](https://github.com/angularexample/angular-8-ngrx-example).

## Running Example

Click for running example:
[angular-8-ngrx-example](https://angularexample.github.io/angular-8-ngrx-example/)

### Screen Shot

![Angular 8 NgRx Example](https://github.com/angularexample/angular-8-ngrx-example/blob/master/src/assets/images/angular-8-ngrx-example.png)

## Same App In Angular 8 without NgRx

Here is the same app written in Angular 8 without NgRx:

* [angular-8-example-app](https://github.com/angularexample/angular-8-example-app)

## Same App In React and Polymer

Here is the same app written in React and Polymer:

* [react-example-app](https://github.com/reactjsexample/react-example-app)
* [polymer-3-example-app](https://github.com/polymerexample/polymer-3-example-app)

## Table of Contents
- [About The Author](#about-the-author)
- [Purpose Of This Project](#purpose-of-this-project)
- [Project Setup](#project-setup)
  * [How To Install](#how-to-install)
  * [How To Run](#how-to-run)
  * [How To Run Unit Tests](#how-to-run-unit-tests)
  * [How To Run End To End Tests](#how-to-run-end-to-end-tests)
- [Software Libraries Used](#software-libraries-used)

## About The Author

**JC Lango** is a UI Architect and UI Developer for large scale web applications at several Fortune 500 companies.

He is an expert in **Angular**, **Polymer**, and **React** and maintains these sites at Github:

* **AngularExample** [https://github.com/angularexample](https://github.com/angularexample)
* **PolymerExample** [https://github.com/polymerexample](https://github.com/polymerexample)
* **ReactJSExample** [https://github.com/reactjsexample](https://github.com/reactjsexample)

JC may be available to work remote, and can be contacted at these links:
 
* LinkedIn: [https://www.linkedin.com/in/jclango](https://www.linkedin.com/in/jclango)
* Email: [jobs@jclango.com](mailto:jobs@jclango.com)

## Purpose Of This Project

The purpose of this project is to provide an example of proper coding technique using NgRx 8 and newer.

NgRx is the Angular version of Redux. NgRx 8 has a lot of changes that require a new architecture. 

This NgRx 8 example uses best practices for NgRx 8.

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
NgRx 8
RxJS 6
```
---
