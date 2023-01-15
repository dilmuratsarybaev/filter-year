import React, { useState } from "react";
import "./Expenses.css";
import { ExpenseItem } from "../expenses-item/ExpenseItem";
import { ExpenseFilter } from "../expense-filter/ExpenseFilter";
import { Chart } from "../Chart/Chart";
export const Expenses = ({ expenses }) => {
  const maximumPrice = 5000;

  const months = [
    {
      label: "January",
      currentPrice: 0,
    },
    {
      label: "February",
      currentPrice: 0,
    },
    {
      label: "March",
      currentPrice: 0,
    },
    {
      label: "April",
      currentPrice: 0,
    },
    {
      label: "May",
      currentPrice: 0,
    },
    {
      label: "June",
      currentPrice: 0,
    },
    {
      label: "July",
      currentPrice: 0,
    },
    {
      label: "August",
      currentPrice: 0,
    },
    {
      label: "September",
      currentPrice: 0,
    },
    {
      label: "October",
      currentPrice: 0,
    },
    {
      label: "November",
      currentPrice: 0,
    },
    {
      label: "December",
      currentPrice: 0,
    },
  ];
  expenses.forEach((element) => {
    const monthsNumber = new Date(element.date).getMonth();
    console.log(monthsNumber);
    months[monthsNumber].currentPrice += +element.price;
  });

  console.log(months);
  // console.log(props.expenses);
  const [selectedYear, setSelectdYear] = useState("2020");
  const yearChangeHandler = (event) => {
    setSelectdYear(event.target.value);
  };
  const filteredYearValue = expenses.filter((element) => {
    return new Date(element.date).getFullYear().toString() === selectedYear;
  });
  // console.log(filteredYearValue);
  return (
    <ul className="containerExpensesForm">
      <ExpenseFilter
        value={selectedYear}
        onChange={yearChangeHandler}
        months={months}
        maximumPrice={maximumPrice}
        expenses={expenses}
      />
      <div className="containerMonths">
        <Chart months={months} maximumPrice={maximumPrice} />
      </div>
      <ExpenseItem expenses={filteredYearValue} />
    </ul>
  );
};
