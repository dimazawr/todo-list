# Todo list app

## Description

A good old todo app, but with some additional features such as record todos and play todos.

https://todo-list.dimazawr.vercel.app

####  Background

Some time ago I found on the internet a screenshot of an assignment task for a React developer position in some company. 

![Screenshot](/assignment_screenshot.jpg?raw=true "Optional Title")

Finally I decided to give it a shot and that task became an inspiration for this small project, where I combined a React based app with my first steps in the TypeScript.



## Installation

Clone or download app repository to your computer.

In the project's folder open a new terminal tab and run 
 `npm install`

## Usage

### `npm start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### User flow

#### Todo actions

Click 'Add todo' button to add todo

Click :pencil: to edit your todo

Click :wastebasket: to delete your todo



#### Recording actions

Click   :black_circle:  button to start record your Todo

Click   :black_medium_square: to stop recording

Click  :arrow_forward: to play your recording

Click :wastebasket: to delete your record


If user recorder their actions, clicked :black_medium_square: and then clicked :black_circle:, the previous record would be deleted from the record history and new one will be recorded instead.


## Architecture


* React
* TypeScript
* Redux / React-Redux
* Redux-thunk
* SCSS

