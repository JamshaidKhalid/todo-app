# Todo App with React, Vite, TypeScript, and Node.js using PostgreSQL (Supabase)

This is a simple Todo application built using React, Vite, TypeScript for the frontend and Node.js for the backend. The app allows users to sign up, log in, and manage their todos.

Live Demo:
https://todo-app-react-vite-ts.vercel.app/

## Features

- User Authentication (Sign Up, Sign In, Logout)
- Add, Edit, Delete Todos
- Protected Routes
- Responsive Design

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/todo-app-node-backend.git
   cd todo-app
   ```

2. Install Dependencies in both Server and Client folders
    ```bash
    npm install
    ```

3. Setup environmental variables for Backend
    ```bash    
    DATABASE_URL
    SUPABASE_URL
    SUPABASE_ANON_KEY
    JWT_SECRET

3. Run the Project
    In server:
    ```bash
    npm run start
    ```
    In client:
    ```bash
    npm run dev

4. Goto http://localhost:5173 in browser


### Usage
Sign Up: Create a new account by providing an email and password.
Sign In: Log in with your email and password.
Add Todo: Use the input field to add a new todo.
Edit Todo: Click the "Edit" button next to a todo, modify the task, and click "Save".
Delete Todo: Click the "Delete" button next to a todo to remove it.


