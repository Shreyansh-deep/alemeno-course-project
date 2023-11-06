import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { requestData } from "../../services/courseService";
import { courseDataReducer } from "../../redux/feature/user";
import "./listing.css";

const CourseListing = ({
  setIndividualScreen,
  setCurrentObject,
  setStudentDashboard,
  setListingScreen,
  courseArrayData,
  setCourseArrayData
}) => {

  const [filterdArray, setFilteredArray] = useState([]);
  const [searchedText, setSearchedText] = useState("");

  function handleFilter(){
    if (searchedText === "") {
      setFilteredArray(courseArrayData);
    } else {
      setFilteredArray(
        courseArrayData.filter((course) =>
          course.name.toLowerCase().includes(searchedText.toLowerCase())
        )
      );
    }
  };

  useEffect(() => {
    handleFilter();
  }, [searchedText, courseArrayData, setFilteredArray, handleFilter]);

  const handleClick = (course) => {
    setCurrentObject(course);
    setIndividualScreen(true);
  };

  const handleChange = (e) => {
    setSearchedText(e.target.value);
  };

  const handleClick2 = () => {
    setStudentDashboard(true);
    setListingScreen(true);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(courseDataReducer(requestData()));
  });

  const reqCourseData = useSelector((state) => state.courseData.courseData);

  useEffect(() => {
    reqCourseData && reqCourseData.then((data) => setCourseArrayData(data));
  }, [reqCourseData]);

  return (
    <div className="course-listing-main">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for course name or instructor"
          className="search-input"
          value={searchedText}
          onChange={handleChange}
        />
        <button className="dashboard-button" onClick={handleClick2}>
          Student Dashboard
        </button>
      </div>
      {filterdArray &&
        filterdArray.map((course) => (
          <div key={course.id} className="one-course-details">
            <div className="course-thumbnail">
              <img src={course.thumbnail} className="thumbnail-image" alt="course-thumbnail"/>
            </div>
            <div className="course-details">
              <h1 className="course-name">{course.name}</h1>
              <p className="course-discription">{course.description}</p>
              <p className="course-instructor">
                Instuctor - {course.instructor}
              </p>
              <p className="course-enrollmentStatus">
                EnrollmentStatus - {course.enrollmentStatus}
              </p>
              <button
                onClick={() => handleClick(course)}
                style={{
                  backgroundColor: "#d0b1e3",
                  borderRadius: "5px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Click for more
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CourseListing;
