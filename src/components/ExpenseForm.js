import React from "react";

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : "",
      amount: props.expense ? props.expense.amount : "",
      error: ""
    };
  }

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onAmountChange = e => {
    const amount = e.target.value;
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  onSubmit = e => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({
        error: "Please provice description and amount"
      }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        description: this.state.description,
        amount: this.state.amount
      });
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <p>{this.state.error}</p>
          <input
            type="text"
            placeholder="description"
            autoFocus
            onChange={this.onDescriptionChange}
            value={this.state.description}
          />
          <input
            type="text"
            placeholder="amount"
            onChange={this.onAmountChange}
            value={this.state.amount}
          />
          <button type="submit">Add Expense</button>
        </form>
      </div>
    );
  }
}
