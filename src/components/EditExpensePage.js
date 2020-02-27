import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { editExpense } from "../actions/expenses";

const EditExpensePage = props => {
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={expense => {
          //console.log(expense);
          //console.log(props.match.params.id);
          props.dispatch(editExpense(parseInt(props.match.params.id), expense));
          props.history.push("/");
        }}
      />
      Editing the expense with id of {props.match.params.id}
    </div>
  );
};
const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(exp => exp.id == props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditExpensePage);
