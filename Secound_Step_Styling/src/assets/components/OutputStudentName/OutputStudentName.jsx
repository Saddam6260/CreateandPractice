import React from "react";

import "./OutputStudentName.css";
import OutputItem from "./OutputItem";

const OutputStudentName = (props) => {
  
  return (
    <div className="container">
      {props.studentName.map((name) => (
        <OutputItem
          key={name.id}
          id={name.id}
          onDelete={props.onDeleteItem}
        >
          {name.name}
        </OutputItem>
      ))}
    </div>
  );
};

export default OutputStudentName;
