# Todolist App

This is a Todolist application built in React.js with Vite and Material-UI 5. It communicates with a Todolist API in Java created with Spring and Maven.

## Features

- Add, edit, and remove tasks from your list.
- Mark tasks as completed or pending.
- View your tasks in an organized list.

## Requirements

Make sure you have the following requirements installed:

- Node.js
- npm (Node.js package manager)

## How to Run

1. Clone this repository:

   ```shell
   git clone https://github.com/nelson2804/todolist-web.git
   cd todolist-app
Install the dependencies:

shell
Copy code
npm install
Start the application:

shell
Copy code
npm run dev
The application will be available at http://localhost:3000 in your web browser.

API Configuration
Make sure to configure the Todolist API URL in the application's configuration file. This will allow the application to communicate with the Java API.

javascript
Copy code
// src/config.js
export const API_URL = 'http://localhost:8080/api'; // Change the URL as needed
Contribution
Feel free to contribute to this project. You can open issues or send pull requests for improvements.

License
This project is licensed under the MIT License. See the LICENSE file for details.