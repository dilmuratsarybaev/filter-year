import React, { useState } from "react";
import { FormInput } from "../UI/FormInput/FormInput";
import { Button } from "../UI/Button/Button";
export const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  // console.log(title);

  const titleInputChange = (event) => {
    setTitle(event.target.value);
  };

  const priceInputChange = (event) => {
    setPrice(event.target.value);
  };

  const dateInputChange = (event) => {
    setDate(event.target.value);
  };
  const cancelHandler = (event) => {
    event.preventDefault();
    props.onshowForm();
  };
  const saveHandler = (event) => {
    event.preventDefault();
    if (
      title.trim().length !== 0 &&
      price.trim().length !== 0 &&
      date.trim().length !== 0
    ) {
      const expenseData = {
        title,
        price,
        date,
      };
      // console.log(expenseData);
      props.addExpenseData(expenseData);
    }
    setTitle("");
    setPrice("");
    setDate("");
  };
  return (
    <section
      style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
    >
      <form
        style={{
          backgroundColor: "rgb(177, 180, 235)",
          width: "40rem",
          borderRadius: "1rem",
          marginBottom: "2rem",
        }}
      >
        <div style={{ display: "flex" }}>
          <FormInput
            labelName="Title"
            id="firstLabel"
            inputType="text"
            placeholder="Write....."
            className="firstInput"
            value={title}
            onChange={titleInputChange}
          />
          <FormInput
            labelName="Amount"
            id="secondLabel"
            inputType="number"
            className="secondInput"
            value={price}
            onChange={priceInputChange}
          />
        </div>
        <FormInput
          labelName="Date"
          id="thridLabel"
          inputType="date"
          placeholder="DD.MM.YYYY"
          className="thirdInput"
          value={date}
          onChange={dateInputChange}
          type ="date"
          max = "2023-12-31"
        />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "1rem",
          }}
        >
          <Button title="Cancel" onClick={cancelHandler} />

          <Button title="Add consumption" onClick={saveHandler}></Button>
        </div>
      </form>
    </section>
  );
};
