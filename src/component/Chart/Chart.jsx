import React from "react";

import "./Chart.css";
export const Chart = ({ months, maximumPrice }) => {
  console.log(maximumPrice);
  console.log(months);
  return (
    <div className="containerChart">
      {months.map((element) => {
        const fillheight = (+element.currentPrice * 100) / maximumPrice;
        return (
          <div className="chart-bar " key={element.label}>
            <div className="chart-bar__inner">
              <div
                className="chart-bar__fill"
                style={{ height: `${fillheight}%` }}
              ></div>
            </div>
            <p className="chart-bar-label">{element.label}</p>
          </div>
        );
      })}
    </div>
  );
};
