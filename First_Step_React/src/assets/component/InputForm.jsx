import React, { useState } from "react";

import "./InputForm.css";

const InputForm = (props) => {
    
  const [studentname, setStudentName] = useState("");
  const [studentroll, setStudentRoll] = useState("");
  const [studentid, setStudentId] = useState("");
  const [studentyear, setStudentYear] = useState("");

  const studentNameHandler = (event) => {
    setStudentName(event.target.value);
  };
  const studentRollHandler = (event) => {
    setStudentRoll(event.target.value);
  };
  const studentIdHandler = (event) => {
    setStudentId(event.target.value);
  };
  const studentYearHandler = (event) => {
    setStudentYear(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const studentDetail = {
      name: studentname,
      roll: studentroll,
      id: studentid,
      year: studentyear,
    };

    props.takeStudent(studentDetail);
    setStudentName("");
    setStudentRoll("");
    setStudentId("");
    setStudentYear("");
  };
  return (
    <div className="form_wrapper">
      <form action="" onSubmit={onSubmitHandler}>
        <div className="form_container">
          <div className="input_Wrap">
            <label htmlFor="">Name</label>
            <input
              type="text"
              value={studentname}
              onChange={studentNameHandler}
            />
          </div>
          <div className="input_Wrap">
            <label htmlFor="">Roll</label>
            <input
              type="number"
              value={studentroll}
              onChange={studentRollHandler}
            />
          </div>
          <div className="input_Wrap">
            <label htmlFor="">Id</label>
            <input
              type="number"
              value={studentid}
              onChange={studentIdHandler}
            />
          </div>
          <div className="input_Wrap">
            <label htmlFor="">Year</label>
            <input
              type="number"
              value={studentyear}
              onChange={studentYearHandler}
            />
          </div>
        </div>
        <div className="submitbtn_wrap">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
