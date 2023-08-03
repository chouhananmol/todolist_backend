# todolist_backend
## API Endpoints

### POST /users/new

- Description: Register a new user by providing their name, email, and password.
- `
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123"
}`

### POST /users/login

- Description: Log in an existing user with their registered email and password.
- `
{
  "email": "john@example.com",
  "password": "securePassword123"
}`

### GET /users/logout

- Description: Log out the current user.

### GET /users/me

- Description: Get the user's profile information.

### POST /task/new

- Description: Create a new task for the logged-in user.
-`{
  "title": "Buy groceries",
  "description": "Milk, bread, eggs"
}`

### GET /task/mytask

- Description: Get user-specific tasks.
