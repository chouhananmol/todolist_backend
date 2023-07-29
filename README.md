# todolist_backend
todolist backend api -
API Endpoints
POST /api/v1/users/new
Description: Register a new user by providing their name, email, and password.

Example Request:

json
Copy code
POST /api/v1/users/new
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123"
}
Example Response (Success):

json
Copy code
Status: 201 Created

{
  "success": true,
  "message": "User registered successfully",
  "user": {
    "_id": "61452a6de32df2563ca60e4a",
    "name": "John Doe",
    "email": "john@example.com",
    "createdAt": "2021-09-17T12:34:45.678Z"
  }
}
POST /api/v1/users/login
Description: Log in an existing user with their registered email and password.

Example Request:

json
Copy code
POST /api/v1/users/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securePassword123"
}
Example Response (Success):

json
Copy code
Status: 200 OK

{
  "success": true,
  "message": "Login successful",
  "user": {
    "_id": "61452a6de32df2563ca60e4a",
    "name": "John Doe",
    "email": "john@example.com",
    "createdAt": "2021-09-17T12:34:45.678Z"
  }
}
GET /api/v1/users/logout
Description: Log out the current user.

Example Request:

bash
Copy code
GET /api/v1/users/logout
Example Response (Success):

json
Copy code
Status: 200 OK

{
  "success": true,
  "message": "Logged out successfully"
}
GET /api/v1/users/me
Description: Get the user's profile information.

Example Request:

bash
Copy code
GET /api/v1/users/me
Example Response (Success):

json
Copy code
Status: 200 OK

{
  "success": true,
  "user": {
    "_id": "61452a6de32df2563ca60e4a",
    "name": "John Doe",
    "email": "john@example.com",
    "createdAt": "2021-09-17T12:34:45.678Z"
  }
}
POST /api/v1/task/new
Description: Create a new task for the logged-in user.

Example Request:

json
Copy code
POST /api/v1/task/new
Content-Type: application/json

{
  "title": "Buy groceries",
  "description": "Milk, bread, eggs"
}
Example Response (Success):

json
Copy code
Status: 201 Created

{
  "success": true,
  "message": "Task created successfully",
  "task": {
    "_id": "61452a6de32df2563ca60e4b",
    "title": "Buy groceries",
    "description": "Milk, bread, eggs",
    "user": "61452a6de32df2563ca60e4a",
    "createdAt": "2021-09-17T12:35:22.135Z"
  }
}
GET /api/v1/task/mytask
