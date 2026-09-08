let transactions =
JSON.parse(localStorage.getItem("transactions")) || [];

let savingsGoal =
localStorage.getItem("goal") || 0;

let chart;

// Add Transaction

document
.getElementById("financeForm")
.addEventListener("submit", function(e) {

    e.preventDefault();

    const description =
    document.getElementById("description").value;

    const amount =
    parseFloat(document.getElementById("amount").value);

    const type =
    document.getElementById("type").value;

    const category =
    document.getElementById("category").value;

    transactions.push({
        description,
        amount,
        type,
        category
    });

    saveTransactions();
    updateDashboard();

    this.reset();
});

// Savings Goal

document
.getElementById("setGoal")
.addEventListener("click", function() {

    savingsGoal =
    document.getElementById("goalAmount").value;

    localStorage.setItem("goal", savingsGoal);

    document.getElementById("goalDisplay").innerHTML =
    "Goal : ₹" + savingsGoal;
});

// Save Transactions

function saveTransactions() {

    localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
    );
}

// Delete Transaction

function deleteTransaction(index) {

    transactions.splice(index, 1);

    saveTransactions();

    updateDashboard();
}

// Update Dashboard

function updateDashboard() {

    let income = 0;
    let expense = 0;

    const transactionList =
    document.getElementById("transactionList");

    transactionList.innerHTML = "";

    const categoryTotals = {};

    transactions.forEach((t, index) => {

        if (t.type === "income") {

            income += t.amount;

        } else {

            expense += t.amount;

            categoryTotals[t.category] =
            (categoryTotals[t.category] || 0)
            + t.amount;
        }

        const row =
        document.createElement("tr");

        row.innerHTML = `
            <td>${t.description}</td>
            <td>${t.category}</td>
            <td>${t.type}</td>
            <td>₹${t.amount}</td>
            <td>
                <button
                class="delete-btn"
                onclick="deleteTransaction(${index})">
                Delete
                </button>
            </td>
        `;

        transactionList.appendChild(row);
    });

    const balance = income - expense;

    document.getElementById("income").innerText =
    "₹" + income;

    document.getElementById("expense").innerText =
    "₹" + expense;

    document.getElementById("balance").innerText =
    "₹" + balance;

    document.getElementById("savings").innerText =
    "₹" + balance;

    document.getElementById("summaryIncome").innerText =
    "₹" + income;

    document.getElementById("summaryExpense").innerText =
    "₹" + expense;

    document.getElementById("summarySavings").innerText =
    "₹" + balance;

    updateChart(categoryTotals);
}

// Pie Chart

function updateChart(categoryTotals) {

    const labels = Object.keys(categoryTotals);
    const values = Object.values(categoryTotals);

    if (chart) {
        chart.destroy();
    }

    const ctx = document
        .getElementById("expenseChart")
        .getContext("2d");

    chart = new Chart(ctx, {

        type: "doughnut",

        data: {
            labels: labels.length ? labels : ["No Expenses"],

            datasets: [{
                data: values.length ? values : [1],

                backgroundColor: labels.length ? [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#4BC0C0",
                    "#9966FF",
                    "#FF9F40",
                    "#2ECC71",
                    "#E74C3C",
                    "#3498DB",
                    "#9B59B6",
                    "#F39C12",
                    "#1ABC9C"
                ] : ["#CCCCCC"],

                borderWidth: 2
            }]
        },

        options: {
            responsive: true,
            maintainAspectRatio: false,

            plugins: {
                legend: {
                    position: "bottom"
                },

                title: {
                    display: true,
                    text: "Expense Distribution"
                }
            }
        }
    });

}

// Settings Button (Dark / Light Mode)

function toggleTheme() {

    document.body.classList.toggle("light-mode");
}

// Load Goal

document.getElementById("goalDisplay").innerHTML =
"Goal : ₹" + savingsGoal;

// Demo Data


updateDashboard();