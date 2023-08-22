Holberton School Server Project

This repository contains solutions and code for various tasks related to creating a small HTTP server using Node.js and Express. The tasks include setting up different routes, handling different endpoints, and working with asynchronous file reading.

CONTENTS

Description

Prerequisites

Getting Started

Tasks

Task 1: Create displayMessage Function

Task 2: Interactive stdin Program

Task 3: Count Students from CSV

Task 4: HTTP Server Using Express

Task 5: Full Server with Express

Usage

Contributing

License

Description
This project demonstrates the creation of various HTTP servers using Node.js and the Express framework. Each task focuses on different aspects of server creation, including handling different endpoints, asynchronous file reading, and structuring code using controllers and routes.

Prerequisites

Node.js

NPM (Node Package Manager)

Getting Started

Clone this repository to your local machine.

Navigate to the relevant task directory.

Tasks

Task 1: Create displayMessage Function

File: 0-console.js

Description: Creates a function named displayMessage that prints a given string to the standard output.

Run: node 0-console.js

Task 2: Interactive stdin Program

File: 1-stdin.js

Description: Creates an interactive program that reads user input and responds accordingly.

Run: node 1-stdin.js

Task 3: Count Students from CSV

File: 2-read_file.js

Description: Implements the countStudents function that reads student data from a CSV file and provides statistics.

Run: node 2-read_file.js, 3-read_file_async.js

Task 4: HTTP Server Using Express

File: 4-http.js

Description: Creates a small HTTP server using the Express module. The server responds to different endpoints.

Run: node 4-http.js

Task 5: Full Server with Express

Directory: full_server

Description: Creates a full HTTP server using the Express module, organized with controllers and routes. Handles different endpoints and interacts with a database file.

Run: npm run dev ./full_server/server.js ./database.csv

Usage

Each task can be run independently using the provided commands. Make sure you have Node.js and NPM installed. For the Full Server task, navigate to the full_server directory and follow the instructions in the README.

License

This project is licensed under the MIT License.
