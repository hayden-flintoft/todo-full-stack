# Full Stack TODO App

This project is a full-stack task management application built using modern web development technologies. It allows users to create, update, and delete tasks, and manage task details like due dates and completion status. The app is powered by an Express API, a SQLite database, and a React front end with React Query for managing server state.

## Features

- Create tasks with a name, description, and due date
- Update task details and mark tasks as complete or incomplete
- Delete tasks
- View a list of tasks with status indicators
- Persistent task management across refreshes

## Technologies Used

- Frontend: React, React Query, TypeScript, React Router DOM
- Backend: Node.js, Express
- Database: SQLite3 with Knex.js for migrations and seeds
- Styling: Custom CSS with SASS support
- Testing: Vitest, Testing Library
- API Handling: Fetch API, Superagent for server-side requests

## Setup

### Prerequisites

Before starting, ensure that you have the following installed on your machine:

- Node.js (v16 or higher)
- NPM (v7 or higher)
- SQLite3

### 1. Cloning and installation

- [ ] Clone this repo, navigate to it, install packages, and start the server with `npm run dev`
  <details style="padding-left: 2em">
    <summary>Tip</summary>

  You may also want to start a new branch

  ```sh
  cd todo-full-stack
  npm i
  git checkout -b <branchname>
  npm run dev
  ```

  </details>

### 2. Install dependencies:

Run the following command to install the required dependencies:

```bash
npm install
```

### 3. Setup the database:

Initialize the SQLite database by running the following commands to run migrations and seed the database:

```bash
npm run knex migrate:latest
npm run knex seed:run
```

### 4. Start the development environment:

To start both the client and the server in development mode, use:

```bash
npm run dev
```

### 5. Open the app:

The app should now be running on `http://localhost:5173` for the client and `http://localhost:3000` for the server API.

## Usage

### Adding Tasks

- In the app's main page, enter the task name in the input field and hit 'Enter'. The task will be added to the list below.

### Updating Tasks

- Click on a task name to open its detail view.
- You can update the task name, description, due date, and status (complete/incomplete).
- Click "Save Task" to update the task.

### Deleting Tasks

- In the task detail view, you can click "Delete Task" to remove the task from the list.
