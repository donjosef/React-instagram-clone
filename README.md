# React instagram clone

This project is inspired by Lambda school [React Insta Clone](https://github.com/LambdaSchool/React-Insta-Clone).
It is intended to strengthen my knowledge of React and its core concepts(managing state, use props received by a common parent container component through different child, map and lists, component life cycle, hoc).
It renders three different posts with dummy data, and there is the possibility to add/delete a comment, put a like to a post, search for a particular post by the name of the user and simulate a login functionality through local Storage.

## Main tasks divided by branches

### Master

* Render a header with a logo and a search bar
* Render three different posts based on state
* Add the functionality to add a comment to any of the posts. For now hard coding a static username.

### Assignment-2

* Increment the likes when clicking on heart icon
* Get the Search Bar to filter posts by the post's username
* Delete a comment

### Assignment-3

* Create a Login component
* Create a hoc component that returns either the App or the Login based on whether the user types a random username that gets stored in local Storage
* Various tweak to styles for responsivness

## Installing and running

1. run `npm install` in your terminal
2. run `npm start` to start the application
3. A web page will open automatically in your browser at port 3000 with the home page of the application.

### Built with

This project was bootstraped with [create react app](https://github.com/facebook/create-react-app)
