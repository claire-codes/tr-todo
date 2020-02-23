# Todo App

This is a simple todo list app.

It allows you to add items, mark as complete or delete items from your list. The items will persist when you refresh the page as they are stored in localstorage.

The style is inspired by [Untitled Goose Game](https://goose.game/) and this [Glitch app](https://untitled-goose-meme.glitch.me/).

The app is hosted on AWS at [http://techreturners-todo-list-app.s3-website-eu-west-1.amazonaws.com/](http://techreturners-todo-list-app.s3-website-eu-west-1.amazonaws.com/).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to develop

- When working on the project locally, run `yarn start` from the command line to run the app in development mode. The page reloads when you save a file.

- To build and deploy, run the command `yarn build && yarn deploy` from the command line. This will push the updated project to AWS.
