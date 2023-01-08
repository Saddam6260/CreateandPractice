import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import StudentInput from "./assets/components/StudentInput/StudentInput";
import OutputStudentName from "./assets/components/OutputStudentName/OutputStudentName";

const App = () => {
  const [studentName, setStudentName] = useState([
    { name: "Saddam hafiz", id: 1 },
    { name: "Rejoan", id: 2 },
  ]);

  const addStudentName = (student) => {
    setStudentName((prevList) => {
      const updateList = [...prevList];
      updateList.unshift({ name: student, id: Math.random().toString() });
      return updateList;
    });
  };

  const onDelete = (item) => {
    setStudentName(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== item);
      return updatedGoals;
    });
  };
  return (
    <div className="main-wrapper">
      <StudentInput addStudentName={addStudentName} />
      <OutputStudentName studentName={studentName} onDeleteItem={onDelete} />
    </div>
  );
};

export default App;
