import "./details.css";

const CourseDetailScreen = ({ currentObject }) => {
  return (
    <div className="main-container">
      <div className="container-a">
        <div className="thumbnail-container">
          <img src={currentObject.thumbnail} className="coursedetail-thumbnail-image" />
        </div>
        <div className="detail-container">
          <h1 className="course-detailScreen-name">{currentObject.name}</h1>
          <p className="course-detailScreen-description">
            {currentObject.description}
          </p>
          <p className="course-detailScreen-instructor">
            <span style={{ fontWeight: 700 }}>Instructor - </span>
            {currentObject.instructor}
          </p>
          <p className="course-detailScreen-enrollmentStatus">
            <span style={{ fontWeight: 700 }}>EnrollmentStatus - </span>
            {currentObject.enrollmentStatus}
          </p>
          <p className="course-detailScreen-duration">
            <span style={{ fontWeight: 700 }}>Course Duration - </span>
            {currentObject.duration}
          </p>
          <p className="course-detailScreen-schedule">
            <span style={{ fontWeight: 700 }}>Schedule - </span>
            {currentObject.schedule}
          </p>
          <p className="course-detailScreen-location">
            <span style={{ fontWeight: 700 }}>Location - </span>
            {currentObject.location}
          </p>
        </div>
      </div>
      <div className="container-b">
        <div className="course-prerequisites-container">
          <p style={{ fontWeight: 700, fontSize: "20px" }}>Prerequisites -</p>
          <ul>
            {currentObject.prerequisites.map((prereq) => (
              <li>{prereq}</li>
            ))}
          </ul>
        </div>
        <div className="syllabus-container">
          <p style={{ fontWeight: 700, fontSize: "20px" }}>Syllabus - </p>
          <div>
            {currentObject.syllabus.map((coreq) => (
              <div>
                <p>Week - {coreq.week}</p>
                <p>Topic - {coreq.topic}</p>
                <p>Content - {coreq.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailScreen;
