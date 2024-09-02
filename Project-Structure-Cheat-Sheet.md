# Project Structure Cheat Sheet

## **Frontend (Client)**

### **todo-full-stack/client/apis**

- **Purpose**: Functions for making HTTP requests to the server.
- **Relationship**: Interfaces with backend APIs to fetch, add, update, and delete tasks.

### **todo-full-stack/client/components/App.tsx**

- **Purpose**: The root component that wraps the entire application.
- **Relationship**: Provides context to the app and renders the router.

### **todo-full-stack/client/components/Layout.tsx**

- **Purpose**: Layout component that wraps around the routed pages.
- **Relationship**: Contains the header and main content area for child components.

### **todo-full-stack/client/components/TaskDetail.tsx**

- **Purpose**: Displays and allows editing of a single task.
- **Relationship**: Renders inside `TodoList` when a task is selected.

### **todo-full-stack/client/components/TodoList.tsx**

- **Purpose**: Lists all tasks and manages which task is being viewed or edited.
- **Relationship**: Uses `TaskContext` to display tasks and handles task selection.

### **todo-full-stack/client/components/AddTodo.tsx**

- **Purpose**: Input form to add a new task.
- **Relationship**: Renders inside `Layout` and uses `TaskContext` to add tasks.

### **todo-full-stack/client/context/TaskContext.tsx**

- **Purpose**: Manages global state for tasks (like a mini-Redux).
- **Relationship**: Provides `tasks`, `loading`, and handlers (`add`, `update`, `delete`) to components.

### **todo-full-stack/client/index.tsx**

- **Purpose**: The entry point for the React app.
- **Relationship**: Renders `App.tsx` to the DOM.

### **todo-full-stack/client/router.tsx**

- **Purpose**: Defines the routes of the application.
- **Relationship**: Manages navigation between components (`TodoList`, `TaskDetail`).

### **todo-full-stack/client/types.ts**

- **Purpose**: TypeScript types and interfaces for the app.
- **Relationship**: Provides types (e.g., `Task`) for consistent typing across components and context.

## **Backend (Server)**

### **todo-full-stack/server/db/connection.ts**

- **Purpose**: Manages database connection setup.
- **Relationship**: Shared across database modules for querying the database.

### **todo-full-stack/server/db/tasks.ts**

- **Purpose**: Database queries related to tasks (CRUD operations).
- **Relationship**: Interfaces with the `tasks` table in the database.

### **todo-full-stack/server/routes/tasks.ts**

- **Purpose**: Express routes for handling API requests related to tasks.
- **Relationship**: Uses `db/tasks.ts` to respond to client requests.

### **todo-full-stack/server/index.ts**

- **Purpose**: Entry point for the server.
- **Relationship**: Starts the Express server, imports and uses `server.ts`.

### **todo-full-stack/server/server.ts**

- **Purpose**: Configures Express app (routes, middleware).
- **Relationship**: Combines routes and server configuration, used by `index.ts` to start the server.
