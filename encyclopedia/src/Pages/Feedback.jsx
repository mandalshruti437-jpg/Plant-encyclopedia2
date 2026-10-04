import React, { useEffect, useState } from "react";
import "../CSS/FeedBack.css";

function Feedback() {

  const [formData, setFormData] = useState({
    purpose: "",
    informationRating: "",
    profileRating: "",
    plantName: "",
    issueType: "",
    issueDetails: "",
    suggestions: "",
    name: "",
    email: "",
    volunteer: false
  });

  const [submitted, setSubmitted] = useState(false);

  // ================================
  // ADMIN PUBLISHED FEEDBACK
  // ================================
  const [adminFeedback, setAdminFeedback] = useState([]);

  useEffect(() => {

    loadAdminFeedback();

    // Admin ke changes user page par automatically reflect karne ke liye
    const handleStorageChange = () => {
      loadAdminFeedback();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };

  }, []);

  function loadAdminFeedback() {

    const data =
      JSON.parse(localStorage.getItem("adminFeedback")) || [];

    // Sirf published feedback user ko dikhega
    const publishedFeedback = data.filter(
      (item) => item.status === "published"
    );

    setAdminFeedback(publishedFeedback);
  }


  function handleChange(e) {

    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });

  }


  function handleSubmit(e) {

    e.preventDefault();

    const oldFeedback =
      JSON.parse(localStorage.getItem("feedback")) || [];

    const newFeedback = {
      id: Date.now(),
      ...formData,
      date: new Date().toLocaleString()
    };

    localStorage.setItem(
      "feedback",
      JSON.stringify([...oldFeedback, newFeedback])
    );

    setSubmitted(true);

    setFormData({
      purpose: "",
      informationRating: "",
      profileRating: "",
      plantName: "",
      issueType: "",
      issueDetails: "",
      suggestions: "",
      name: "",
      email: "",
      volunteer: false
    });

  }


  return (
    <div
      className="feedback-page"
      style={{
        backgroundImage:
          'url("/image/dashboard-.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
      }}
    >

      <div className="feedback-container">

        {/* Header */}
        <div className="feedback-header">

          <h1>🌿 Share Your Feedback</h1>

          <p>
            Thank you for visiting Plant Encyclopedia.
            Your feedback helps us improve our plant
            information and make the website easier to use.
          </p>

          <p>
            Tell us about your experience, report an issue,
            or suggest something new.
          </p>

        </div>


        {submitted && (
          <div className="success-message">
            ✅ Thank you! Your feedback has been submitted successfully.
          </div>
        )}


        <form onSubmit={handleSubmit}>

          {/* Section 1 */}
          <div className="feedback-section">

            <h2>1. What are you looking for today?</h2>

            <div className="option-list">

              <label>
                <input
                  type="radio"
                  name="purpose"
                  value="Plant Identification"
                  checked={
                    formData.purpose === "Plant Identification"
                  }
                  onChange={handleChange}
                  required
                />
                🌱 Plant identification
              </label>


              <label>
                <input
                  type="radio"
                  name="purpose"
                  value="Plant Information"
                  checked={
                    formData.purpose === "Plant Information"
                  }
                  onChange={handleChange}
                />
                🌿 Plant information
              </label>


              <label>
                <input
                  type="radio"
                  name="purpose"
                  value="Plant A-Z"
                  checked={
                    formData.purpose === "Plant A-Z"
                  }
                  onChange={handleChange}
                />
                🔤 Plant A-Z
              </label>


              <label>
                <input
                  type="radio"
                  name="purpose"
                  value="Plant Categories"
                  checked={
                    formData.purpose === "Plant Categories"
                  }
                  onChange={handleChange}
                />
                📂 Plant Categories
              </label>


              <label>
                <input
                  type="radio"
                  name="purpose"
                  value="Plant Market"
                  checked={
                    formData.purpose === "Plant Market"
                  }
                  onChange={handleChange}
                />
                🛒 Plant Market
              </label>


              <label>
                <input
                  type="radio"
                  name="purpose"
                  value="Home"
                  checked={
                    formData.purpose === "Home"
                  }
                  onChange={handleChange}
                />
                🏠 Home page
              </label>


              <label>
                <input
                  type="radio"
                  name="purpose"
                  value="Other"
                  checked={
                    formData.purpose === "Other"
                  }
                  onChange={handleChange}
                />
                Other
              </label>

            </div>

          </div>


          {/* Section 2 */}
          <div className="feedback-section">

            <h2>2. Rate Your Experience</h2>

            <div className="rating-group">

              <label>
                How easy was it to find the information?
              </label>

              <div className="rating-options">

                {[1, 2, 3, 4, 5].map((rating) => (

                  <label key={rating}>

                    <input
                      type="radio"
                      name="informationRating"
                      value={rating}
                      checked={
                        formData.informationRating ===
                        String(rating)
                      }
                      onChange={handleChange}
                      required
                    />

                    {"⭐".repeat(rating)}

                  </label>

                ))}

              </div>

            </div>


            <div className="rating-group">

              <label>
                How would you rate the plant information?
              </label>

              <div className="rating-options">

                {[1, 2, 3, 4, 5].map((rating) => (

                  <label key={rating}>

                    <input
                      type="radio"
                      name="profileRating"
                      value={rating}
                      checked={
                        formData.profileRating ===
                        String(rating)
                      }
                      onChange={handleChange}
                      required
                    />

                    {"⭐".repeat(rating)}

                  </label>

                ))}

              </div>

            </div>

          </div>


          {/* Section 3 */}
          <div className="feedback-section">

            <h2>3. Report Plant Information</h2>

            <p>
              Found something that needs correction or updating?
              Let us know.
            </p>


            <label>
              Plant Name
            </label>

            <input
              type="text"
              name="plantName"
              placeholder="Enter plant name"
              value={formData.plantName}
              onChange={handleChange}
            />


            <label>
              Issue Type
            </label>

            <select
              name="issueType"
              value={formData.issueType}
              onChange={handleChange}
            >

              <option value="">
                Select an issue
              </option>

              <option value="Incorrect Plant Name">
                Incorrect plant name
              </option>

              <option value="Incorrect Plant Information">
                Incorrect plant information
              </option>

              <option value="Missing Plant">
                Plant missing from A-Z
              </option>

              <option value="Category Issue">
                Incorrect plant category
              </option>

              <option value="Image Issue">
                Image problem
              </option>

              <option value="Market Issue">
                Plant Market issue
              </option>

              <option value="Technical Issue">
                Broken link or technical issue
              </option>

              <option value="Home Page Issue">
                Home page issue
              </option>

              <option value="Other">
                Other
              </option>

            </select>


            <label>
              Details
            </label>

            <textarea
              name="issueDetails"
              rows="5"
              placeholder="Describe the information that should be corrected..."
              value={formData.issueDetails}
              onChange={handleChange}
            ></textarea>

          </div>


          {/* Section 4 */}
          <div className="feedback-section">

            <h2>4. Suggestions & Feature Requests</h2>

            <p>
              Tell us what you would like to see added
              or improved in Plant Encyclopedia.
            </p>

            <textarea
              name="suggestions"
              rows="6"
              placeholder="Write your suggestions here..."
              value={formData.suggestions}
              onChange={handleChange}
            ></textarea>

          </div>


          {/* Section 5 */}
          <div className="feedback-section">

            <h2>5. Stay Connected (Optional)</h2>

            <p>
              If you would like us to contact you about your feedback,
              you can provide your details below.
            </p>


            <label>
              Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />


            <label>
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />


            <label className="checkbox-option">

              <input
                type="checkbox"
                name="volunteer"
                checked={formData.volunteer}
                onChange={handleChange}
              />

              I am interested in contributing to the
              Plant Encyclopedia community.

            </label>

          </div>


          {/* Submit */}
          <div className="submit-area">

            <button
              type="submit"
              className="feedback-submit"
            >
              Submit Feedback 🌿
            </button>

          </div>

        </form>


        {/* =================================================
            ADMIN PUBLISHED FEEDBACK
        ================================================= */}

        {adminFeedback.length > 0 && (

          <div className="published-feedback-section">

            <div className="feedback-header">

              <h1>🌿 Community Feedback</h1>

              <p>
                See feedback and updates shared by the
                Plant Encyclopedia administration team.
              </p>

            </div>


            <div className="published-feedback-list">

              {adminFeedback.map((item) => (

                <div
                  className="published-feedback-card"
                  key={item.id}
                >

                  <div className="published-feedback-top">

                    <h2>
                      {item.title ||
                        "Plant Encyclopedia Update"}
                    </h2>

                    <span>
                      {item.date}
                    </span>

                  </div>


                  {item.description && (
                    <p>
                      {item.description}
                    </p>
                  )}


                  {item.purpose && (
                    <p>
                      <strong>Purpose:</strong>{" "}
                      {item.purpose}
                    </p>
                  )}


                  {item.plantName && (
                    <p>
                      <strong>Plant:</strong>{" "}
                      {item.plantName}
                    </p>
                  )}


                  {item.issueType && (
                    <p>
                      <strong>Issue Type:</strong>{" "}
                      {item.issueType}
                    </p>
                  )}


                  {item.issueDetails && (
                    <p>
                      <strong>Details:</strong>{" "}
                      {item.issueDetails}
                    </p>
                  )}


                  {item.suggestions && (
                    <p>
                      <strong>Suggestion:</strong>{" "}
                      {item.suggestions}
                    </p>
                  )}


                  {item.informationRating && (
                    <p>
                      <strong>
                        Information Rating:
                      </strong>{" "}
                      {"⭐".repeat(
                        Number(item.informationRating)
                      )}
                    </p>
                  )}


                  {item.profileRating && (
                    <p>
                      <strong>
                        Plant Information Rating:
                      </strong>{" "}
                      {"⭐".repeat(
                        Number(item.profileRating)
                      )}
                    </p>
                  )}

                </div>

              ))}

            </div>

          </div>

        )}

      </div>

    </div>
  );
}

export default Feedback;