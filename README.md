# AngularExpress

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

##
NAS Wallet - 1. NAS DApp 201805
https://pacific-plains-55185.herokuapp.com/
https://github.com/MingJing2015/NAS-DApp/tree/master/NAS-DApp


Look Mean.js Document:
•	Copy file server.js from mongoexpress app to root of angular-express app.
•	Change static location from client to src around line 20
•	Copy file .bowerrc from mongoexpress app to root of angular-express app.
•	Edit .bowerrc change client to src
•	Copy folder db, routes and views from mongoexpress app to root of angular-express app.
•	Edit routes/students.js and make the URLs consistent by making all endpoints /api/students

•	( /students => /api/students )

•	Change the “start” script in your package.json to: "start": "node server.js"



## Heroku (first time)
Download and install Heroku-CLI from: npm install (  npm install -g heroku ), then publish server end to Heroku  [ brew install heroku/brew/heroku     - for Mac Pro]

    git init
    git add .
    git commit -m "initial commit"
    heroku login
    heroku create	
    git push heroku master
    heroku open


## Local Debug way: 
1. ng serve   -  localhost:4200
2. nodemon    -  Server started on port number 3000


##1. Before Deploy to heroku need : 
1. In student.service.ts: 
    private studentsUrl = '/api/students';                              // For internet  
    //private studentsUrl = 'http://127.0.0.1:3000/api/students';       // For local debug, need open CORS on Chrome 

2. In card.service.ts
    private cardsUrl = '/api/cards';                            // For Internet 
    //private cardsUrl = 'http://127.0.0.1:3000/api/cards';     // For local debug, need open CORS on Chrome  

3.  git add .
    git commit -m "initial create"
    git push heroku master
    heroku open




