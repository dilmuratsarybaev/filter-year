import React from "react";

import "./ExpenseFilter.css";
export const ExpenseFilter = ({ value, onChange }) => {
  // console.log(currentPrice);// [56,499,488,67]
  // console.log(months);

  return (
    <section>
      <div className="containerFilter">
        <p className="paragraphOne">Filter by year</p>
        <p>
          <select
            className="selectionyear"
            onChange={onChange}
            name=""
            id=""
            value={value}
          >
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
        </p>
      </div>
    </section>
  );
};
