import React, { useState } from "react";

import Table from "./Table";
import "./Expense.css";
import InputForm from "./InputForm";
import StudentFilter from "./StudentFilter";

const Expense = (props) => {
  const [filterName, setFilterName] = useState("Saddam Hafiz");

  const selectName = (selectName) => {
    setFilterName(selectName);
  };

  const filterStudent = props.studentDetails.filter((student) => {
    return student.name === filterName
  })
  
  const takeStudent = (enteredStudentDetails) => {
    const studentData = {
      ...enteredStudentDetails,
    };
    props.addStudent(studentData);
  };

  let expenseComponent = <p>No items there</p>

  if(filterStudent.length > 0) {
    expenseComponent = filterStudent.map((data) => (
        <Table
          key={data.id}
          name={data.name}
          roll={data.roll}
          id={data.id}
          year={data.year}
        />
      ))
  }
  return (
    <div>
      <InputForm takeStudent={takeStudent} />
      <StudentFilter selected={filterName} filterName={selectName} />
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Roll</th>
              <th>id</th>
              <th>Year</th>
            </tr>
          </thead>
          {expenseComponent}
        </table>
      </div>
    </div>
  );
};

export default Expense;
