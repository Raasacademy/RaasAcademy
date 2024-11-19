"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { CSSTransition } from "react-transition-group"; // For smooth animations

const CoursesCMS = () => {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({
    title: "",
    description: "",
    instructor_id: "",
    is_published: false,
    course_price: 0.00,
  });
  const [editingCourse, setEditingCourse] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [showMessage, setShowMessage] = useState(false);

  // Fetch courses from API
  const fetchCourses = async () => {
    try {
      const response = await axios.get("/api/courses");
      setCourses(response.data);
    } catch (err) {
      handleMessage("Failed to fetch courses. Please try again.", "error");
    }
  };

  // Handle course creation
  const handleCreateCourse = async () => {
    if (validateForm()) {
      try {
        await axios.post("/api/courses", newCourse);
        resetForm();
        fetchCourses();
        handleMessage("Course created successfully!", "success");
      } catch (err) {
        handleMessage("Failed to create course. Please try again.", "error");
      }
    }
  };

  // Handle course update
  const handleUpdateCourse = async () => {
    if (validateForm()) {
      // Check if editingCourse is not null before making the PUT request
      if (editingCourse) {
        await axios.put(`/api/courses/${editingCourse.id}`, newCourse);
      } else {
        console.error("Editing course is null. Please check the state.");
      }

    }
  };

  // Handle course editing
  const handleEditCourse = (course) => {
    setNewCourse({
      title: course.title,
      description: course.description,
      instructor_id: course.instructor_id,
      is_published: course.is_published,
      course_price: course.course_price,
    });
    setEditingCourse(course);
    handleMessage(null); // Clear any messages when editing
  };

  // Handle course deletion
  const handleDeleteCourse = async (courseId) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      try {
        await axios.delete(`/api/courses/${courseId}`);
        fetchCourses();
        handleMessage("Course deleted successfully!", "success");
      } catch (err) {
        handleMessage("Failed to delete course. Please try again.", "error");
      }
    }
  };

  // Message handler for success/error feedback with animation
  const handleMessage = (msg, type) => {
    if (type === "error") setError(msg);
    else setSuccess(msg);
    setShowMessage(true);
    window.scrollTo({ top: 0, behavior: "smooth" });

    setTimeout(() => {
      setShowMessage(false);
      setError(null);
      setSuccess(null);
    }, 5000); // Hide message after 5 seconds
  };

  // Form validation
  const validateForm = () => {
    if (!newCourse.title || !newCourse.description || !newCourse.instructor_id || newCourse.course_price === null) {
      handleMessage("All fields are required.", "error");
      return false;
    }
    return true;
  };

  // Reset form state
  const resetForm = () => {
    setNewCourse({
      title: "",
      description: "",
      instructor_id: "",
      is_published: false,
      course_price: 0.00,
    });
    setEditingCourse(null);
  };

  // Fetch courses when the component mounts
  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="container">
      <style jsx>{`
        .fade-enter {
          opacity: 0;
        }
        .fade-enter-active {
          opacity: 1;
          transition: opacity 300ms;
        }
        .fade-exit {
          opacity: 1;
        }
        .fade-exit-active {
          opacity: 0;
          transition: opacity 300ms;
        }

        .action-buttons button {
          margin-left: 10px; /* Custom left margin */
        }
      `}</style>

      <h1 className="my-4">Manage Courses</h1>

      {/* Success and Error Messages with Fade-in/Fade-out Animation */}
      <CSSTransition
        in={showMessage}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <>
          {error && (
            <div className="alert alert-danger fade">{error}</div>
          )}
          {success && (
            <div className="alert alert-success fade">{success}</div>
          )}
        </>
      </CSSTransition>

      <div className="mb-4">
        <h4>{editingCourse ? "Edit Course" : "Create a New Course"}</h4>
        <div className="form-group">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Course Title"
            value={newCourse.title}
            onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
          />
          <textarea
            className="form-control mb-2"
            placeholder="Course Description"
            value={newCourse.description}
            onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
          />
          <input
            type="number"
            className="form-control mb-2"
            placeholder="Instructor ID"
            value={newCourse.instructor_id}
            onChange={(e) => setNewCourse({ ...newCourse, instructor_id: e.target.value })}
          />
          <div className="input-group mb-2">
            <span className="input-group-text">$</span>
            <input
              type="number"
              className="form-control"
              placeholder="Course Price"
              value={newCourse.course_price}
              onChange={(e) =>
                setNewCourse({ ...newCourse, course_price: parseFloat(e.target.value) })
              }
            />
          </div>
          <div className="form-check mb-2">
            <input
              type="checkbox"
              className="form-check-input"
              checked={newCourse.is_published}
              onChange={(e) => setNewCourse({ ...newCourse, is_published: e.target.checked })}
            />
            <label className="form-check-label">Publish Course</label>
          </div>
          <button
            className="btn btn-primary"
            onClick={editingCourse ? handleUpdateCourse : handleCreateCourse}
          >
            {editingCourse ? "Update Course" : "Create Course"}
          </button>
        </div>
      </div>

      <h4>Existing Courses</h4>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Instructor ID</th>
            <th>Price</th>
            <th>Published</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.title}</td>
              <td>{course.description}</td>
              <td>{course.instructor_id}</td>
              <td>${parseFloat(course.course_price).toFixed(2)}</td>
              <td>{course.is_published ? "Yes" : "No"}</td>
              <td className="action-buttons">
                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => handleEditCourse(course)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDeleteCourse(course.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoursesCMS;
