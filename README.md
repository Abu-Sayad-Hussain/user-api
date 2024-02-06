# User API

This is a Node.js backend application that provides RESTful API endpoints for managing users. It includes user creation, retrieval, login, and authentication features using JWT.

## Prerequisites

Before running this application, ensure you have the following installed on your machine:

- Node.js (https://nodejs.org/)
- MongoDB (https://www.mongodb.com/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/user-api.git
2. Navigate to the project directory:
   ```bash
   cd user-api

3. Install dependencies:
   ```bash
    npm install
4. Set up environment variables:

   Create a .env file in the root directory with the following content:
    ```bash
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/user-api
    JWT_SECRET=your_secret_key_here
  Adjust the values as needed.
  
5. Running the Application

    To start the server, run the following command:
    ```bash
    npm start
  The server will start running at http://localhost:3000 by default.

6. Testing the API
You can use cURL or tools like Postman to interact with the API.

    Creating a User
      To create a new user, send a POST request with user data:

    ```bash
      curl -X POST -H "Content-Type: application/json" -d '{"name": "John Doe", "email": "john@example.com"}' http://localhost:3000/users
7. Logging In
To log in as a user and receive a JWT token, send a POST request with user credentials:

   ```bash
   curl -X POST -H "Content-Type: application/json" -d '{"email": "john@example.com"}' http://localhost:3000/auth/login
8. Retrieving All Users
To retrieve all users, send a GET request:
    ```bash
    curl http://localhost:3000/users
9. Testing
To run tests, use the following command:
    ```bash
    npm test


   


