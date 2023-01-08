import React, { useState } from "react";

import "./StudentInput.css";

const StudentInput = (props) => {
    const [isStudent, setIsStudent] = useState('');

    const takeNameHandler = (event) => {
        setIsStudent(event.target.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        console.log(isStudent)
        props.addStudentName(isStudent)
        setIsStudent('')
    }
  return (
    <form action="" className="input-form" onSubmit={onSubmitHandler}>
      <div className="input-wrap">
        <label htmlFor="">Enter Your Name :</label>
        <input type="text" onChange={takeNameHandler}/>
      </div>
      <div className="btn-wrap">
        <button>Add Person</button>
      </div>
    </form>
  );
};

export default StudentInput;
