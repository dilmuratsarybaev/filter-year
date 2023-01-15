import "./ExpenseItem.css";
export const ExpenseItem = ({ expenses }) => {
  // console.log(expenses);
  return (
    <section className="sectionItem">
      {expenses.map((element) => (
        <div className="containerParagraph" key={element.title}>
          <div className="titlecontainer">
            <p className="date">{element.date.toString()}</p>
            <p className="titlepaper">{element.title}</p>
          </div>
          <p className="price">{element.price} som</p>
        </div>
      ))}
    </section>
  );
};
