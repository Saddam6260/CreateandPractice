import React from "react";

import "./Table.css";

const Table = (props) => {
  return (
    <tbody>
      <tr>
        <td>{props.name}</td>
        <td>{props.roll}</td>
        <td>{props.id}</td>
        <td>{props.year}</td>
      </tr>
    </tbody>
  );
};

export default Table;
