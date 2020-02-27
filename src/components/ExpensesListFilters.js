import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByDate, sortByAmount } from "../actions/filters";

const ExpensesListFilters = props => {
  return (
    <div>
      <p>
        <input
          type="text"
          value={props.filters.text}
          onChange={e => {
            props.dispatch(setTextFilter(e.target.value));
          }}
        />
        <select
          onChange={e => {
            if (e.target.value === "date") {
              props.dispatch(sortByDate());
            } else if (e.target.value === "amount") {
              props.dispatch(sortByAmount());
            }
          }}
          value={props.filters.sortBy}
        >
          <option value="date">Sort by date</option>
          <option value="amount">Sort by amount</option>
        </select>
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpensesListFilters);
