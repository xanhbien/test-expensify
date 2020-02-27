import React from "react";
import { removeExpense } from "../actions/expenses";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const ExpensesListItem = props => (
  <div>
    <p>
      <Link to={`/edit/${props.id}`}>
        Description: {props.description} - Amount: {props.amount}- Time:{" "}
        {props.createdAt}
      </Link>
      <button onClick={() => props.dispatch(removeExpense(props.id))}>
        Remove
      </button>
    </p>
  </div>
);

export default connect()(ExpensesListItem);
