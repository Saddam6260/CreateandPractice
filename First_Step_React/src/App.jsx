import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import Expense from "./assets/component/Expense";

const Student_Details = [
  {
    name: "Saddam Hafiz",
    roll: 963774,
    id: 830972,
    year: 2017,
  },
  {
    name: "Md Rejoan",
    roll: 963783,
    id: 830974,
    year: 2017,
  },
  {
    name: "Kamrul Islam",
    roll: 963773,
    id: 830971,
    year: 2017,
  },
];

function App() {
  const [studentDetails, setStudentDetails] = useState(Student_Details);

  const addStudentDetailsHandler = (details) => {
    setStudentDetails((prevDetails) => {
      return [details, ...prevDetails];
    });
  };

  return (
    <div className="App">
      <Expense
        studentDetails={studentDetails}
        addStudent={addStudentDetailsHandler}
      />
    </div>
  );
}

export default App;
