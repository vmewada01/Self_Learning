import React from "react";

function List({ skills }) {
  return (
    <div>
      <h1>Old Skills</h1>
      {skills.map(function (ele, id) {
        return React.createElement("li", { key: id }, ele);
      })}
    </div>
  );
}

export default List;
