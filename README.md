# todolist_backend
## API Endpoints

### POST /api/v1/users/new

- Description: Register a new user by providing their name, email, and password.

### POST /api/v1/users/login

- Description: Log in an existing user with their registered email and password.

### GET /api/v1/users/logout

- Description: Log out the current user.

### GET /api/v1/users/me

- Description: Get the user's profile information.

### POST /api/v1/task/new

- Description: Create a new task for the logged-in user.
-`{
  "title": "Buy groceries",
  "description": "Milk, bread, eggs"
}`

### GET /api/v1/task/mytask

- Description: Get user-specific tasks.
