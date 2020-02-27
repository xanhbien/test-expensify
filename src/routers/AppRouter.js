import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route
          activeClassName="active"
          path="/"
          component={ExpenseDashboardPage}
          exact={true}
        />
        <Route
          activeClassName="active"
          path="/create"
          component={AddExpensePage}
        />
        <Route
          activeClassName="active"
          path="/edit/:id"
          component={EditExpensePage}
        />
        <Route activeClassName="active" path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
