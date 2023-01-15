import React, { useState } from "react";
import { Button } from "../UI/Button/Button";
import { ExpenseForm } from "../expenses-form/ExpenseForm";
export const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const render = () => {
    setShowForm((prevSatate) => {
      return !prevSatate;
    });
  };
  return showForm ? (
    <ExpenseForm onshowForm={render} addExpenseData={props.onaddExpenseData} />
  ) : (
    <Button
      title="Add new consumption"
      className="containerBtn"
      onClick={render}
    />
  );
};
