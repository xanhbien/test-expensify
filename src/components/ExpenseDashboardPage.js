import React from "react";
import ExpensesList from "./ExpensesList";
import ExpensesListFilters from "./ExpensesListFilters";

const ExpenseDashboardPage = () => (
  <div>
    <label>
      Search:
      <ExpensesListFilters />
    </label>

    <p>This is from my dashboard component!</p>
    <ExpensesList />
  </div>
);

export default ExpenseDashboardPage;
