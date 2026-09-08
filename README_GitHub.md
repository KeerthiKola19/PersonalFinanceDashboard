# 💰 Personal Finance Dashboard

A modern, responsive **Personal Finance Dashboard** built with **HTML5,
CSS3, JavaScript, and Chart.js**. The application allows users to record
income and expenses, track their available balance, set a savings goal,
view transaction history, and analyze expenses using an interactive
doughnut chart.

> **MCA Mini Project \| Frontend Web Development**

------------------------------------------------------------------------

## 📸 Project Preview

![Personal Finance Dashboard](SUNimg.jpeg)

The dashboard uses a scenic background image together with a
glassmorphism-inspired interface, responsive cards, transaction tables,
and interactive financial analytics.

------------------------------------------------------------------------

## ✨ Key Features

-   📊 **Financial Dashboard**
    -   Total Income
    -   Total Expense
    -   Available Balance
    -   Total Savings
-   ➕ **Transaction Management**
    -   Add income and expense transactions
    -   Enter transaction description and amount
    -   Select transaction type
    -   Select transaction category
    -   Delete existing transactions
-   🎯 **Savings Goal**
    -   Set a personal savings target
    -   Store the goal in browser local storage
-   📈 **Expense Analytics**
    -   Category-wise expense calculation
    -   Interactive doughnut chart using Chart.js
-   💾 **Local Data Persistence**
    -   Transactions are stored in browser `localStorage`
    -   Savings goal is stored in browser `localStorage`
-   🌓 **Theme Support**
    -   Dark appearance
    -   Light appearance
-   📱 **Responsive Design**
    -   Desktop-friendly dashboard
    -   Mobile layout for screens up to 768px

------------------------------------------------------------------------

## 🛠️ Technologies Used

  -----------------------------------------------------------------------
  Technology                          Purpose
  ----------------------------------- -----------------------------------
  **HTML5**                           Structure and content of the
                                      dashboard

  **CSS3**                            Styling, layout, animations,
                                      themes, and responsive design

  **JavaScript (ES6+)**               Application logic, calculations,
                                      DOM manipulation, and storage

  **Chart.js**                        Expense visualization

  **Local Storage API**               Client-side data persistence

  **JPEG**                            Dashboard background image
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## 📂 Project Structure

``` text
Personal-Finance-Dashboard/
│
├── index.html       # Main dashboard interface
├── style.css        # Styling and responsive design
├── script.js        # Application logic
├── SUNimg.jpeg      # Background image
└── README.md        # Project documentation
```

> **Important:** The CSS currently references the background image as
> `SUNimg.jpeg`. Keep the image filename consistent with this reference
> when uploading the project to GitHub.

------------------------------------------------------------------------

## 🖥️ Application Sections

### 1. Dashboard

The main dashboard displays four financial indicators:

``` text
Total Income
Total Expense
Available Balance
Total Savings
```

The available balance is calculated using:

``` text
Available Balance = Total Income - Total Expense
```

The dashboard cards and their values are defined in the HTML interface.

------------------------------------------------------------------------

### 2. Add Transaction

Users can enter transaction information through the **Add Transaction**
form.

### Input Fields

-   Description
-   Amount
-   Transaction Type
    -   Income
    -   Expense
-   Category

### Available Categories

-   Salary
-   Food
-   Travel
-   Shopping
-   Bills
-   Education
-   Entertainment
-   Medical
-   Rent
-   Fuel
-   Investment
-   Freelance
-   Other

When the form is submitted, JavaScript reads the entered values, creates
a transaction object, stores it, and refreshes the dashboard.

Example transaction:

``` javascript
{
    description: "Monthly Salary",
    amount: 30000,
    type: "income",
    category: "Salary"
}
```

------------------------------------------------------------------------

## 💰 Financial Calculation

The application processes every transaction and separates income from
expenses.

### Income

``` text
Total Income = Sum of all income transactions
```

### Expense

``` text
Total Expense = Sum of all expense transactions
```

### Balance

``` text
Available Balance = Total Income - Total Expense
```

### Example

If the user enters:

``` text
Income  = ₹30,000
Expense = ₹8,000
```

The dashboard displays:

``` text
Total Income      : ₹30,000
Total Expense     : ₹8,000
Available Balance : ₹22,000
Total Savings     : ₹22,000
```

------------------------------------------------------------------------

## 🎯 Savings Goal

The user can enter a target savings amount and select **Set Goal**.

The application stores the goal using browser local storage.

Example:

``` text
Savings Goal: ₹50,000
```

The goal is loaded again when the application starts.

------------------------------------------------------------------------

## 📋 Transaction History

Every transaction is displayed in a table with the following fields:

  Field         Description
  ------------- -----------------------------
  Description   Transaction name or purpose
  Category      Selected category
  Type          Income or Expense
  Amount        Transaction amount
  Action        Delete transaction

The **Delete** action removes the selected transaction and immediately
refreshes the dashboard and chart.

------------------------------------------------------------------------

## 📊 Expense Analytics

The application generates a category-wise expense summary.

For example:

``` text
Food       → ₹2,000
Travel     → ₹1,500
Shopping   → ₹3,000
Bills      → ₹2,500
```

These values are displayed using a **doughnut chart** powered by
Chart.js.

The chart is refreshed whenever transaction data changes.

------------------------------------------------------------------------

## 💾 Data Persistence

The project uses the browser's **Local Storage API**, so a backend
database is not required.

### Transaction Storage

Transactions are converted to JSON before being stored:

``` javascript
localStorage.setItem(
    "transactions",
    JSON.stringify(transactions)
);
```

When the application starts, the stored JSON is converted back into
JavaScript data:

``` javascript
JSON.parse(
    localStorage.getItem("transactions")
);
```

### Savings Goal Storage

The savings goal is stored using:

``` text
goal
```

### Important Note

Because the project uses browser local storage:

-   Data is specific to the browser/device.
-   Data is not synchronized across devices.
-   Clearing browser storage can remove saved application data.
-   There is currently no user authentication or cloud database.

------------------------------------------------------------------------

## 🌓 Theme Switching

The Settings option allows the user to switch between the default dark
appearance and light mode.

JavaScript toggles the following CSS class:

``` javascript
document.body.classList.toggle("light-mode");
```

The stylesheet contains separate rules for the light-mode interface.

------------------------------------------------------------------------

## 📱 Responsive Design

The dashboard includes a mobile layout using a CSS media query.

For screens with a width of **768px or less**:

-   The sidebar is hidden.
-   Main content uses the full screen width.
-   Dashboard cards are arranged in one column.
-   The expense chart is reduced in size.

------------------------------------------------------------------------

## 🚀 Getting Started

### Prerequisites

No backend server or database is required.

You only need:

-   A modern web browser
-   A code editor such as Visual Studio Code
-   Internet access for loading Chart.js from its CDN

------------------------------------------------------------------------

## ▶️ Run Locally

### Step 1: Clone the repository

``` bash
git clone https://github.com/YOUR-USERNAME/Personal-Finance-Dashboard.git
```

### Step 2: Open the project

``` bash
cd Personal-Finance-Dashboard
```

### Step 3: Open `index.html`

You can either:

-   Double-click `index.html`, or
-   Open the project in Visual Studio Code and use **Live Server**

### Step 4: Use the dashboard

1.  Add an income or expense transaction.
2.  Select a category.
3.  Click **Add Transaction**.
4.  View the updated dashboard.
5.  Set a savings goal.
6.  Review the transaction history.
7.  Check the expense analytics chart.

------------------------------------------------------------------------

## 🔄 Application Workflow

``` text
                 START
                   │
                   ▼
        Open Finance Dashboard
                   │
                   ▼
          Enter Transaction
                   │
                   ▼
       Select Income / Expense
                   │
                   ▼
          Select Category
                   │
                   ▼
          Validate Input
                   │
                   ▼
        Create Transaction
                   │
                   ▼
       Save to Local Storage
                   │
                   ▼
        Update Dashboard
             ┌─────┼─────┐
             ▼     ▼     ▼
          Income Expense Balance
             │     │     │
             └─────┼─────┘
                   ▼
       Update Transaction History
                   │
                   ▼
        Update Expense Analytics
                   │
                   ▼
                  END
```

------------------------------------------------------------------------

## 🧩 Main JavaScript Components

### `addEventListener()`

Handles form submission and captures user input.

### `localStorage`

Stores transaction and savings-goal information in the browser.

### `updateDashboard()`

Responsible for:

-   Calculating income
-   Calculating expenses
-   Calculating balance
-   Updating dashboard cards
-   Updating transaction history
-   Updating the expense chart

### `deleteTransaction()`

Removes a selected transaction from the transaction array.

### `updateChart()`

Creates and refreshes the Chart.js doughnut chart.

### `toggleTheme()`

Switches the interface between the default appearance and light mode.

------------------------------------------------------------------------

## 🎓 Project Objectives

The main objectives of this project are:

1.  To develop an interactive personal finance management application.
2.  To provide a simple interface for recording financial transactions.
3.  To automatically calculate income, expenses, and balance.
4.  To provide category-based expense visualization.
5.  To allow users to define a savings goal.
6.  To demonstrate client-side data persistence using local storage.
7.  To demonstrate DOM manipulation and JavaScript event handling.
8.  To implement a responsive web interface.

------------------------------------------------------------------------

## ✅ Advantages

-   Simple and user-friendly interface
-   No database setup required
-   No backend server required
-   Real-time dashboard updates
-   Interactive expense visualization
-   Local data persistence
-   Responsive design
-   Light-mode support
-   Suitable for academic demonstration and frontend learning

------------------------------------------------------------------------

## ⚠️ Current Limitations

-   No user registration or authentication
-   No backend server
-   No cloud database
-   Data is stored only in the browser
-   No transaction date field
-   No monthly/yearly filtering
-   No PDF or Excel export
-   No cross-device synchronization
-   Savings displayed on the dashboard currently represents the
    calculated balance

------------------------------------------------------------------------

## 🚀 Future Enhancements

The project can be extended with:

-   🔐 User authentication
-   🗄️ MySQL or MongoDB database
-   🌐 REST API/backend integration
-   📅 Transaction date and time
-   📆 Monthly and yearly reports
-   💵 Budget management
-   🔔 Budget notifications
-   📄 PDF report generation
-   📊 Additional financial charts
-   📥 CSV import/export
-   ☁️ Cloud synchronization
-   🔁 Recurring transactions
-   📱 Improved mobile navigation

------------------------------------------------------------------------

## 🔒 Privacy

This version of the application stores financial information locally in
the user's browser. No external database is included in the current
implementation.

Avoid entering sensitive financial credentials or confidential
information into a demo deployment.

------------------------------------------------------------------------

## 🎓 Academic Details

**Project Title:** Personal Finance Dashboard

**Project Type:** MCA Mini Project

**Department:** MCA

**Institution:** Aditya University

**Primary Area:** Web Development

**Technologies:** HTML, CSS, JavaScript, Chart.js

------------------------------------------------------------------------

## 👤 Author

**Kola Sai Keerthi**

MCA Student\
Aditya University

------------------------------------------------------------------------

## 📄 License

No specific open-source license is currently defined for this project.

If you intend to make the repository open source, add an appropriate
license file such as the MIT License and update this section
accordingly.

------------------------------------------------------------------------

## ⭐ Support

If you find this project useful for learning or academic purposes,
consider giving the repository a ⭐ on GitHub.

------------------------------------------------------------------------

## 📌 Quick Summary

**Personal Finance Dashboard** is a frontend web application for
managing personal income and expenses. It combines **HTML, CSS,
JavaScript, Chart.js, and Local Storage** to provide transaction
management, financial calculations, savings-goal tracking, expense
analytics, theme switching, and responsive design in a single dashboard.
