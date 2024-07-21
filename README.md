# 1stAngularProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.1.

# Angular-SPA-Health-Challenge-Tracker

## Prerequisites

- Node.js (v14 or later)
- Angular CLI (v14+)

# Frontend Development Challenge in Angular for Fyle

## This is a simple Single Page Application (SPA) built with Angular. It includes features such as user input for workouts, a list of workouts with filtering, and pagination functionalities.

## Installation

Clone the repository and navigate into the project directory:

```bash
git clone https://github.com/hridaybasa/Angular-SPA-Health-Challenge-Tracker.git
cd Angular-SPA-Health-Challenge-Tracker
npm install
```

To run the application locally:

```bash
ng serve
```

To build the application for production:

```bash
ng build --prod
```
# Code Coverage
```
Chrome 126.0.0.0 (Windows 10) WorkoutDetailsComponent should load and aggregate workouts on init FAILED
        Error: NG0302: The pipe 'paginate' could not be found in the 'WorkoutDetailsComponent' component. Verify that it is declared or imported in this module. Find more at https://angular.dev/errors/NG0302
        error properties: Object({ code: -302 })
            at getPipeDef (node_modules/@angular/core/fesm2022/core.mjs:29467:15)
            at ɵɵpipe (node_modules/@angular/core/fesm2022/core.mjs:29408:19)
            at templateFn (ng:///WorkoutDetailsComponent.js:94:9)
            at executeTemplate (node_modules/@angular/core/fesm2022/core.mjs:11620:9)
            at renderView (node_modules/@angular/core/fesm2022/core.mjs:12827:13)
            at renderComponent (node_modules/@angular/core/fesm2022/core.mjs:12773:5)
            at renderChildComponents (node_modules/@angular/core/fesm2022/core.mjs:12875:9)
            at renderView (node_modules/@angular/core/fesm2022/core.mjs:12855:13)
            at ComponentFactory.create (node_modules/@angular/core/fesm2022/core.mjs:17042:17)
            at initComponent (node_modules/@angular/core/fesm2022/testing.mjs:1976:51)
Chrome 126.0.0.0 (Windows 10) WorkoutDetailsComponent should create FAILED                                                           
        Error: NG0302: The pipe 'paginate' could not be found in the 'WorkoutDetailsComponent' component. Verify that it is declared or imported in this module. Find more at https://angular.dev/errors/NG0302
        error properties: Object({ code: -302 })
            at getPipeDef (node_modules/@angular/core/fesm2022/core.mjs:29467:15)
            at ɵɵpipe (node_modules/@angular/core/fesm2022/core.mjs:29408:19)
            at templateFn (ng:///WorkoutDetailsComponent.js:94:9)
            at executeTemplate (node_modules/@angular/core/fesm2022/core.mjs:11620:9)
            at renderView (node_modules/@angular/core/fesm2022/core.mjs:12827:13)
            at renderComponent (node_modules/@angular/core/fesm2022/core.mjs:12773:5)
            at renderChildComponents (node_modules/@angular/core/fesm2022/core.mjs:12875:9)
            at renderView (node_modules/@angular/core/fesm2022/core.mjs:12855:13)
            at ComponentFactory.create (node_modules/@angular/core/fesm2022/core.mjs:17042:17)
            at initComponent (node_modules/@angular/core/fesm2022/testing.mjs:1976:51)
Chrome 126.0.0.0 (Windows 10) WorkoutDetailsComponent should filter workouts by workout type FAILED                                  
        Error: NG0302: The pipe 'paginate' could not be found in the 'WorkoutDetailsComponent' component. Verify that it is declared or imported in this module. Find more at https://angular.dev/errors/NG0302
        error properties: Object({ code: -302 })
            at getPipeDef (node_modules/@angular/core/fesm2022/core.mjs:29467:15)
            at ɵɵpipe (node_modules/@angular/core/fesm2022/core.mjs:29408:19)
            at templateFn (ng:///WorkoutDetailsComponent.js:94:9)
            at executeTemplate (node_modules/@angular/core/fesm2022/core.mjs:11620:9)
            at renderView (node_modules/@angular/core/fesm2022/core.mjs:12827:13)
            at renderComponent (node_modules/@angular/core/fesm2022/core.mjs:12773:5)
            at renderChildComponents (node_modules/@angular/core/fesm2022/core.mjs:12875:9)
            at renderView (node_modules/@angular/core/fesm2022/core.mjs:12855:13)
            at ComponentFactory.create (node_modules/@angular/core/fesm2022/core.mjs:17042:17)
            at initComponent (node_modules/@angular/core/fesm2022/testing.mjs:1976:51)
Chrome 126.0.0.0 (Windows 10) WorkoutDetailsComponent should filter workouts by user name FAILED
        Error: NG0302: The pipe 'paginate' could not be found in the 'WorkoutDetailsComponent' component. Verify that it is declared or imported in this module. Find more at https://angular.dev/errors/NG0302
        error properties: Object({ code: -302 })
            at getPipeDef (node_modules/@angular/core/fesm2022/core.mjs:29467:15)
            at ɵɵpipe (node_modules/@angular/core/fesm2022/core.mjs:29408:19)
            at templateFn (ng:///WorkoutDetailsComponent.js:94:9)
            at executeTemplate (node_modules/@angular/core/fesm2022/core.mjs:11620:9)
            at renderView (node_modules/@angular/core/fesm2022/core.mjs:12827:13)
            at renderComponent (node_modules/@angular/core/fesm2022/core.mjs:12773:5)
            at renderChildComponents (node_modules/@angular/core/fesm2022/core.mjs:12875:9)
            at renderView (node_modules/@angular/core/fesm2022/core.mjs:12855:13)
            at ComponentFactory.create (node_modules/@angular/core/fesm2022/core.mjs:17042:17)
            at initComponent (node_modules/@angular/core/fesm2022/testing.mjs:1976:51)
Chrome 126.0.0.0 (Windows 10): Executed 10 of 10 (4 FAILED) (0.186 secs / 0.157 secs)                                                
TOTAL: 4 FAILED, 6 SUCCESS

=============================== Coverage summary ===============================
Statements   : 38.29% ( 18/47 )
Branches     : 0% ( 0/12 )
Functions    : 25% ( 3/12 )
Lines        : 35.55% ( 16/45 )
================================================================================
```
