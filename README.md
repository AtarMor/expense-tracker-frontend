# Personal Expense Tracker Application

## Overview
The Personal Expense Tracker Application is a tool designed to help individuals manage their personal finances effectively. With this application, users can easily track their expenses, categorize spending, and visualize their financial data to make informed decisions about their finances.

## Features
### Expense Management
- **Add Expense:** Users can add new expenses with details such as amount, category, date, and description.
- **View Expenses:** Users can view a list of all their expenses, including details like amount, category, and date.
- **Edit Expense:** Users can edit existing expenses to update details like amount, category, and description.
- **Delete Expense:** Users can delete expenses they no longer need.

### Categories
- **Categorize Expenses:** Users can categorize expenses into predefined categories such as Food, Transportation, Utilities, Entertainment, etc.

### Visualization
- **Category Breakdown:** Users can see a breakdown of their expenses by category to understand where their money is going.

## Technologies Used
- **Frontend:** React.js, Chart.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB

## Getting Started
### Prerequisites
- Node.js installed on your machine
- MongoDB installed and running locally or accessible remotely

### Installation
#### Backend
1. Clone the repository: `git clone https://github.com/AtarMor/expense-tracker-backend.git`
2. Navigate to the project directory: `cd expense-tracker-backend`
3. Install dependencies: `npm install`
4. Start the server: `npm start`

#### Frontend
1. Clone the repository: `git clone https://github.com/AtarMor/expense-tracker-frontend.git`
2. Navigate to the project directory: `cd expense-tracker-frontend`
3. Install dependencies: `npm install`
4. Start the server: `npm run dev`
5. Open your browser and go to `http://localhost:5173` to access the application.

## API Endpoints
- **BASE URL:** http://127.0.0.1:3030/api
- **GET /expense:** Retrieve all expenses.
- **GET /expense/:id:** Retrieve a single expense by ID.
- **POST /expense:** Add a new expense.
- **PUT /expense/:id:** Update an existing expense.
- **DELETE /expense/:id:** Delete an expense.

## Contributing
Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.