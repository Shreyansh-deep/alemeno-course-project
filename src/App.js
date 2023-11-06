import { useState } from "react";
import "./App.css";
import CourseDetailScreen from "./component/courseDetail/CourseDetailScreen";
import CourseListing from "./component/courseListing/CourseListing";
import StudentDashBoard from "./component/studentDashboard/StudentDashBoard";

function App() {
  const [currentObject, setCurrentObject] = useState({});
  const [courseArrayData, setCourseArrayData] = useState([]);
  const [individualScreen, setIndividualScreen] = useState(false);
  const [studentDashboard, setStudentDashboard] = useState(false);
  const [listingScreen, setListingScreen] = useState(false);

  console.log(process.env)
  return (
    <div className="App">
      {!individualScreen && !listingScreen && (
        <CourseListing
          courseArrayData={courseArrayData}
          setCourseArrayData={setCourseArrayData}
          setIndividualScreen={setIndividualScreen}
          individualScreen={individualScreen}
          setCurrentObject={setCurrentObject}
          setStudentDashboard={setStudentDashboard}
          setListingScreen={setListingScreen}
        />
      )}
      {individualScreen && <CourseDetailScreen currentObject={currentObject} />}
      {studentDashboard && (
        <StudentDashBoard
          currentObject={currentObject}
          courseArrayData={courseArrayData}
        />
      )}
    </div>
  );
}

export default App;
