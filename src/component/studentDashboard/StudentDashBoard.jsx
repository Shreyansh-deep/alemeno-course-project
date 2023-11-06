import React, { useState } from "react";
import "./styles.css";
import LinearProgress from "@mui/material/LinearProgress";
import { RxBox, RxCheckbox } from "react-icons/rx";

const StudentDashBoard = ({ courseArrayData }) => {
  const [progress, setProgress] = React.useState(0);
  const [completedCourseArray, setCompletedCourseArray] = useState([])

  const handleClick = (name) => {
    if(completedCourseArray.includes(name)){
      setCompletedCourseArray(completedCourseArray.filter(item => item!== name))
    }
    else{
      setCompletedCourseArray([...completedCourseArray, name])
    }
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 2;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="student-container">
      <h1 className="student-dashboard-title">STUDENT DASHBOARD</h1>
      {courseArrayData &&
        courseArrayData.map((course) => (
          <div className="course-container">
            <div className="course-thambnail-container">
              <img
                src={course.thumbnail}
                className="thumbnail-image"
                alt="thumbnail-image"
              />
            </div>
            <div className="course-detail-container">
              <h1>{course.name}</h1>
              <p>
                <span style={{ fontWeight: 700 }}>Instructor - </span>
                {course.instructor}
              </p>
              <LinearProgress
                variant="determinate"
                value={progress}
                sx={{ marginBottom: "15px" }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                <button
                  style={{
                    border: "solid 2px",
                    borderRadius: "3px",
                    backgroundColor: "#def0bb",
                    cursor: "pointer"
                  }}
                  onClick={() => {
                    handleClick(course.name);
                  }}
                >
                  Click to mark as Completed
                </button>
                {!completedCourseArray.includes(course.name) ? <RxBox size={30} /> : <RxCheckbox size={30} />}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default StudentDashBoard;
