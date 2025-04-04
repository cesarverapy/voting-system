# Voting System

This project is a simple **voting system** built with **Node.js** and **Express**. It allows users to manage a list of topics (CRUD) and vote for their favorites, dynamically reordering topics based on the number of votes.

---

## Features

- **CRUD Operations**:
  - Create a new topic.
  - Read (view) all topics.
  - Update existing topics.
  - Delete topics.

- **Voting System**:
  - Users can vote for topics.
  - Topics are reordered dynamically based on the number of votes.

- **Real-time Interface**:
  - Client-side JavaScript ensures seamless interactions with instant updates.

- **MVC Architecture**:
  - Organized into Models, Views, and Controllers for clarity and scalability.

---

## Project Structure

```plaintext
voting-system/
├── controllers/
│   └── topicsController.js   # Handles business logic and routing for topics
├── models/
│   └── topic.js              # In-memory data model for topics
├── views/
│   └── topics.ejs            # Template for displaying and interacting with topics
└── server.js                 # Main server file with Express configuration
```

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/voting-system.git
   cd voting-system
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node server.js
   ```

4. Open your browser and go to:
   ```
   http://localhost:3000/topics
   ```
---

## Example Data

```json
[
  {
    "id": 1,
    "name": "topic 1",
    "votes": 0
  },
  {
    "id": 2,
    "name": "topic 2",
    "votes": 5
  }
]
```

---

## Future Improvements

- Integrate a database for persistent storage (e.g., MongoDB, PostgreSQL).
- Add API contracts.
- Add user authentication for managing topics.
- Implement real-time updates using WebSockets.

---
