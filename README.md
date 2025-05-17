# Personal Expense Tracker

A full-featured **Personal Expense Tracker** application built using the **MERN Stack** (MongoDB, Express, React, Node.js). This application allows users to securely track their incomes and expenses, analyze financial data through interactive charts, and manage their budget efficiently.

## Features

* **User Authentication:** Secure login and registration with JWT and bcrypt.
* **Expense and Income Management:** Add, edit, and delete transactions easily.
* **Data Visualization:** Interactive charts for better financial analysis.
* **Real-time Updates:** Instant updates upon adding or modifying transactions.
* **Responsive Design:** Fully responsive across all devices.

## Technologies Used

* **Frontend:** React, Axios
* **Backend:** Node.js, Express.js, MongoDB
* **Authentication:** JWT (JSON Web Token), bcrypt
* **Charts:** Recharts (or any visualization library you are using)

## Installation

1. Clone the repository:

```bash
   git clone https://github.com/prjn2702/expenseTracker.git
```

2. Navigate to the project folder:

```bash
   cd expenseTracker
```

3. Install dependencies for both frontend and backend:

```bash
   cd frontend/expense-tracker && npm install
   cd backend && npm install
```

4. Configure environment variables:

Create a `.env` file in the `backend` directory with the following:

```env
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret-key
PORT=5000
```

5. Run the application:

```bash
   cd backend && npm run dev
   cd frontend/expense-tracker && npm run dev
```

The application should be running at [http://localhost:8000](http://localhost:8000)

## Usage

* Register a new account or log in with existing credentials.
* Add incomes and expenses with categories and descriptions.
* View transaction history and analyze it through charts.
* Edit or delete transactions as needed.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

---

Feel free to explore, contribute, and improve this application!