import React from "react";

function Skill({ new_skill }) {
  return (
    <div>
      <h1>New_skills</h1>
      {new_skill.map(function (ele, id) {
        return React.createElement("li", { key: id }, ele);
      })}
    </div>
  );
}

export default Skill;
