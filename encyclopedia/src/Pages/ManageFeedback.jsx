import React, { useEffect, useState } from "react";
import "../CSS/ManageFeedback.css";

function ManageFeedback() {

  // ==========================================
  // USER SUBMITTED FEEDBACK
  // ==========================================

  const [feedback, setFeedback] = useState(() => {
    return JSON.parse(localStorage.getItem("feedback")) || [];
  });


  // ==========================================
  // ADMIN FEEDBACK
  // ==========================================

  const [adminFeedback, setAdminFeedback] = useState(() => {
    return JSON.parse(localStorage.getItem("adminFeedback")) || [];
  });


  // ==========================================
  // LOAD USER FEEDBACK
  // ==========================================

  useEffect(() => {

    loadFeedback();

    const handleStorageChange = () => {
      loadFeedback();
    };

    window.addEventListener(
      "storage",
      handleStorageChange
    );

    return () => {
      window.removeEventListener(
        "storage",
        handleStorageChange
      );
    };

  }, []);


  function loadFeedback() {

    const data =
      JSON.parse(localStorage.getItem("feedback")) || [];

    setFeedback(data);
  }


  // ==========================================
  // SAVE ADMIN FEEDBACK
  // ==========================================

  useEffect(() => {

    localStorage.setItem(
      "adminFeedback",
      JSON.stringify(adminFeedback)
    );

    // Same tab mein Feedback.jsx ko update karne ke liye
    window.dispatchEvent(
      new Event("adminFeedbackUpdated")
    );

  }, [adminFeedback]);


  // ==========================================
  // PUBLISH FEEDBACK
  // ==========================================

  function handlePublish(item) {

    const alreadyPublished = adminFeedback.some(
      (feedbackItem) =>
        feedbackItem.sourceId === item.id
    );

    if (alreadyPublished) {

      alert(
        "This feedback is already published."
      );

      return;
    }


    const title = prompt(
      "Enter Feedback Title",
      "Plant Encyclopedia Feedback"
    );

    if (!title) {
      return;
    }


    const description = prompt(
      "Enter Admin Description",
      "Thank you for sharing your feedback."
    );


    const publishedFeedback = {

      id: Date.now(),

      sourceId: item.id,

      title,

      description,

      purpose: item.purpose,

      informationRating:
        item.informationRating,

      profileRating:
        item.profileRating,

      plantName:
        item.plantName,

      issueType:
        item.issueType,

      issueDetails:
        item.issueDetails,

      suggestions:
        item.suggestions,

      name:
        item.name,

      email:
        item.email,

      volunteer:
        item.volunteer,

      date:
        new Date().toLocaleString(),

      status: "published",
    };


    setAdminFeedback([
      ...adminFeedback,
      publishedFeedback,
    ]);


    alert(
      "Feedback published successfully!"
    );
  }


  // ==========================================
  // UNPUBLISH FEEDBACK
  // ==========================================

  function handleUnpublish(id) {

    const confirmUnpublish =
      window.confirm(
        "Are you sure you want to unpublish this feedback?"
      );

    if (!confirmUnpublish) {
      return;
    }


    const updatedFeedback =
      adminFeedback.map((item) => {

        if (item.id === id) {

          return {
            ...item,
            status: "unpublished",
          };

        }

        return item;

      });


    setAdminFeedback(updatedFeedback);


    alert(
      "Feedback unpublished successfully!"
    );
  }


  // ==========================================
  // EDIT PUBLISHED FEEDBACK
  // ==========================================

  function handleEdit(item) {

    const title = prompt(
      "Enter Feedback Title",
      item.title || ""
    );

    if (!title) {
      return;
    }


    const description = prompt(
      "Enter Admin Description",
      item.description || ""
    );


    const updatedFeedback =
      adminFeedback.map((feedbackItem) => {

        if (feedbackItem.id === item.id) {

          return {
            ...feedbackItem,

            title,

            description,

            date:
              new Date().toLocaleString(),
          };

        }

        return feedbackItem;

      });


    setAdminFeedback(updatedFeedback);


    alert(
      "Feedback updated successfully!"
    );
  }


  // ==========================================
  // DELETE PUBLISHED FEEDBACK
  // ==========================================

  function handleDeletePublished(id) {

    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this published feedback?"
      );

    if (!confirmDelete) {
      return;
    }


    const updatedFeedback =
      adminFeedback.filter(
        (item) => item.id !== id
      );


    setAdminFeedback(updatedFeedback);


    alert(
      "Published feedback deleted successfully!"
    );
  }


  // ==========================================
  // DELETE USER FEEDBACK
  // ==========================================

  function handleDeleteUserFeedback(id) {

    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this user feedback?"
      );

    if (!confirmDelete) {
      return;
    }


    const updatedFeedback =
      feedback.filter(
        (item) => item.id !== id
      );


    setFeedback(updatedFeedback);


    localStorage.setItem(
      "feedback",
      JSON.stringify(updatedFeedback)
    );


    alert(
      "User feedback deleted successfully!"
    );
  }


  // ==========================================
  // UI
  // ==========================================

  return (

    <div className="manage-feedback-page">

      <div className="manage-feedback-container">

        {/* ==================================
            HEADER
        ================================== */}

        <div className="manage-feedback-header">

          <h1>
            🌿 Manage Feedback
          </h1>

          <p>
            View, manage and publish user feedback.
          </p>

        </div>


        {/* ==================================
            STATISTICS
        ================================== */}

        <div className="feedback-stats">

          <div className="feedback-stat-card">

            <h3>
              {feedback.length}
            </h3>

            <p>
              Total Feedback
            </p>

          </div>


          <div className="feedback-stat-card">

            <h3>
              {
                adminFeedback.filter(
                  (item) =>
                    item.status === "published"
                ).length
              }
            </h3>

            <p>
              Published
            </p>

          </div>


          <div className="feedback-stat-card">

            <h3>
              {
                adminFeedback.filter(
                  (item) =>
                    item.status === "unpublished"
                ).length
              }
            </h3>

            <p>
              Unpublished
            </p>

          </div>

        </div>


        {/* ==================================
            USER FEEDBACK
        ================================== */}

        <div className="feedback-admin-section">

          <h2>
            👥 User Submitted Feedback
          </h2>


          {feedback.length === 0 ? (

            <div className="no-feedback">

              <p>
                No feedback submitted yet.
              </p>

            </div>

          ) : (

            <div className="feedback-table-container">

              <div className="table-responsive">

                <table className="table table-bordered table-hover">

                  <thead className="table-dark">

                    <tr>

                      <th>#</th>

                      <th>Purpose</th>

                      <th>Plant</th>

                      <th>Issue Type</th>

                      <th>Information Rating</th>

                      <th>Plant Rating</th>

                      <th>Suggestions</th>

                      <th>Date</th>

                      <th>Action</th>

                    </tr>

                  </thead>


                  <tbody>

                    {feedback.map(
                      (item, index) => {

                        const published =
                          adminFeedback.some(
                            (publishedItem) =>
                              publishedItem.sourceId ===
                              item.id &&
                              publishedItem.status ===
                              "published"
                          );


                        return (

                          <tr key={item.id}>

                            <td>
                              {index + 1}
                            </td>


                            <td>
                              {item.purpose ||
                                "N/A"}
                            </td>


                            <td>
                              {item.plantName ||
                                "N/A"}
                            </td>


                            <td>
                              {item.issueType ||
                                "N/A"}
                            </td>


                            <td>

                              {item.informationRating
                                ? "⭐".repeat(
                                    Number(
                                      item.informationRating
                                    )
                                  )
                                : "N/A"}

                            </td>


                            <td>

                              {item.profileRating
                                ? "⭐".repeat(
                                    Number(
                                      item.profileRating
                                    )
                                  )
                                : "N/A"}

                            </td>


                            <td>

                              {item.suggestions ||
                                "N/A"}

                            </td>


                            <td>
                              {item.date ||
                                "N/A"}
                            </td>


                            <td>

                              <div className="feedback-actions">

                                {/* PUBLISH */}

                                {!published ? (

                                  <button
                                    className="btn btn-success btn-sm"
                                    onClick={() =>
                                      handlePublish(
                                        item
                                      )
                                    }
                                  >
                                    📢 Publish
                                  </button>

                                ) : (

                                  <span className="badge bg-success">

                                    Published

                                  </span>

                                )}


                                {/* DELETE */}

                                <button
                                  className="btn btn-danger btn-sm"
                                  onClick={() =>
                                    handleDeleteUserFeedback(
                                      item.id
                                    )
                                  }
                                >
                                  🗑️ Delete
                                </button>

                              </div>

                            </td>

                          </tr>

                        );

                      }
                    )}

                  </tbody>

                </table>

              </div>

            </div>

          )}

        </div>


        {/* ==================================
            PUBLISHED FEEDBACK
        ================================== */}

        <div className="feedback-admin-section">

          <h2>
            📢 Published Feedback
          </h2>


          {adminFeedback.length === 0 ? (

            <div className="no-feedback">

              <p>
                No feedback has been published yet.
              </p>

            </div>

          ) : (

            <div className="published-admin-list">

              {adminFeedback.map(
                (item) => (

                  <div
                    className="admin-feedback-card"
                    key={item.id}
                  >

                    {/* CARD HEADER */}

                    <div className="admin-feedback-card-header">

                      <div>

                        <h3>
                          {item.title ||
                            "Plant Encyclopedia Feedback"}
                        </h3>

                        <small>
                          {item.date}
                        </small>

                      </div>


                      <div>

                        {item.status ===
                        "published" ? (

                          <span className="badge bg-success">
                            Published
                          </span>

                        ) : (

                          <span className="badge bg-secondary">
                            Unpublished
                          </span>

                        )}

                      </div>

                    </div>


                    {/* DESCRIPTION */}

                    {item.description && (

                      <p>
                        <strong>
                          Admin Message:
                        </strong>{" "}
                        {item.description}
                      </p>

                    )}


                    {/* PURPOSE */}

                    {item.purpose && (

                      <p>
                        <strong>
                          Purpose:
                        </strong>{" "}
                        {item.purpose}
                      </p>

                    )}


                    {/* PLANT */}

                    {item.plantName && (

                      <p>
                        <strong>
                          Plant:
                        </strong>{" "}
                        {item.plantName}
                      </p>

                    )}


                    {/* ISSUE */}

                    {item.issueType && (

                      <p>
                        <strong>
                          Issue Type:
                        </strong>{" "}
                        {item.issueType}
                      </p>

                    )}


                    {/* DETAILS */}

                    {item.issueDetails && (

                      <p>
                        <strong>
                          Details:
                        </strong>{" "}
                        {item.issueDetails}
                      </p>

                    )}


                    {/* SUGGESTIONS */}

                    {item.suggestions && (

                      <p>
                        <strong>
                          Suggestion:
                        </strong>{" "}
                        {item.suggestions}
                      </p>

                    )}


                    {/* RATINGS */}

                    {item.informationRating && (

                      <p>

                        <strong>
                          Information Rating:
                        </strong>{" "}

                        {"⭐".repeat(
                          Number(
                            item.informationRating
                          )
                        )}

                      </p>

                    )}


                    {item.profileRating && (

                      <p>

                        <strong>
                          Plant Information Rating:
                        </strong>{" "}

                        {"⭐".repeat(
                          Number(
                            item.profileRating
                          )
                        )}

                      </p>

                    )}


                    {/* ACTION BUTTONS */}

                    <div className="admin-feedback-actions">

                      {/* EDIT */}

                      <button
                        className="btn btn-warning"
                        onClick={() =>
                          handleEdit(item)
                        }
                      >
                        ✏️ Edit
                      </button>


                      {/* PUBLISH / UNPUBLISH */}

                      {item.status ===
                      "published" ? (

                        <button
                          className="btn btn-secondary"
                          onClick={() =>
                            handleUnpublish(
                              item.id
                            )
                          }
                        >
                          🚫 Unpublish
                        </button>

                      ) : (

                        <button
                          className="btn btn-success"
                          onClick={() =>
                            setAdminFeedback(
                              adminFeedback.map(
                                (feedbackItem) =>
                                  feedbackItem.id ===
                                  item.id
                                    ? {
                                        ...feedbackItem,
                                        status:
                                          "published",
                                      }
                                    : feedbackItem
                              )
                            )
                          }
                        >
                          📢 Publish
                        </button>

                      )}


                      {/* DELETE */}

                      <button
                        className="btn btn-danger"
                        onClick={() =>
                          handleDeletePublished(
                            item.id
                          )
                        }
                      >
                        🗑️ Delete
                      </button>

                    </div>

                  </div>

                )
              )}

            </div>

          )}

        </div>

      </div>

    </div>

  );
}

export default ManageFeedback;