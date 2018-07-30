# MyReads Project

MyReads is a web application that allows us to keep track of the books that:

 * we are currently reading 
 * want to read
 * and have read

Every book features a button for shelf change the shelf of the book. 
To add a new book, click the purple `+` button

![myreads](https://user-images.githubusercontent.com/18640359/43385165-b3307018-93e8-11e8-93a1-37daacdbbe3c.PNG)


![myreadssearch](https://user-images.githubusercontent.com/18640359/43385170-b54516f6-93e8-11e8-90c8-87b8ec074c17.PNG)

## Getting started

 * Download or clone this repository
 * Install all project dependencies with `npm install`
 * Start the development server with `npm start`
 * A new browser window should automatically open, displaying the app. If it doesn't, navigate to `http://localhost:3000/` in your browser

## Dependencies 

* [Node.js](https://github.com/nodejs/node)
* [npm](https://github.com/npm/cli) or [yarn](https://github.com/yarnpkg/yarn)
* [Starter template](https://github.com/udacity/reactnd-project-myreads-starter)
* [React-router-dom package](https://www.npmjs.com/package/react-router-dom)

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Backend Server

To simplify your development process, a backend server was provided. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
