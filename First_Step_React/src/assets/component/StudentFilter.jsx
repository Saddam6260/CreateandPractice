import React from "react";

import "./StudentFilter.css";

const StudentFilter = (props) => {
    
  const selectStudentName = (event) => {
    props.filterName(event.target.value);
  };

  return (
    <div className="select_wrapper">
      <div>
        <h3>Select Your Name : </h3>
      </div>
      <select name="" id="" value={props.selected} onChange={selectStudentName}>
        <option value="Saddam Hafiz">Saddam Hafiz</option>
        <option value="Md Rejoan">Md Rejoan</option>
        <option value="Kamrul Islam">Kamrul Islam</option>
        <option value="Md Hridoy">Md Hridoy</option>
        <option value="Mehedi Hasan">Mehedi Hasan</option>
        <option value="Mahfuz Rahman">Mahfuz Rahman</option>
        <option value="Jihad Islam">Jihad Islam</option>
        <option value="Masud Rana">Masud Rana</option>
      </select>
    </div>
  );
};

export default StudentFilter;
