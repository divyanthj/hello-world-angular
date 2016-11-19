# Introduction

This is a sample hello-world project with angular using Jasmine and Karma for unit testing and protractor for end to end testing.

# Installation

1. Install Node modules `npm install`
2. Install Bower components `bower install`

# Running

1. In command prompt, do `npm start` to start web server
2. Go to `http://localhost:8080` to run the app

# Testing

1. For unit tests, do `karma start helloWorld.conf.js`
2. For end-to-end tests with protractor
    1. Be sure protractor is installed globally. Do `npm install protractor -g`
    2. Make sure your web server is running with `npm start`
    3. Run tests with `npm test`
