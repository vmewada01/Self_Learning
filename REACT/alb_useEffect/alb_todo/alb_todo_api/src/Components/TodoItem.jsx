import React from "react";

const TodoItem = ({ data }) => {
    const gridStyle = {
        display: 'grid',
        gap: "1rem",
        gridTemplateRows: 'repeat(4, 1fr)',
        // Add any other styles you need
      };

  const disp= {
    display: "flex",
    border: "1px solid black",
    gap: "1rem",
    justifyContent: "center",
    alignItem: "center",
    margin: "auto"

  }


  return (
    <div style={gridStyle}>
      {data.map((abc) => (
        <div key={abc.id} style={disp}>
          <div>{abc.id}</div>
          <div>{abc.title}</div>
          <div>{abc.completed ? "Done" : "NOT DONE"}</div>
          <div></div>
        </div>
      ))}
    </div>
  );
};

export default TodoItem;
