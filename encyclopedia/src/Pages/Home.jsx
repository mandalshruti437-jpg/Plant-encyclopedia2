import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/UserDashboard.css";

function Home() {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const navigate = useNavigate();

  // Check login before opening Plants
  const handleExplorePlants = () => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      navigate("/plants");
    } else {
      setShowLoginPopup(true);
    }
  };

  return (
    <div
      style={{
        backgroundImage: 'url("/image/dashboard-.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
        margin: 0,
        padding: 0,
      }}
    >

      <section className="container text-center py-5">

        <h1>🌿 Welcome to Plant Encyclopedia</h1>

        <p className="lead">
          Explore and learn about different plants and
          their botanical information.
        </p>

        <button
          onClick={handleExplorePlants}
          className="btn btn-success"
        >
          Explore Plants
        </button>

      </section>


      <section className="container py-4">

        <div className="row text-center">

          <div className="col-md-4">
            <h3>🔤 A-Z Plants</h3>
            <p>Find plants alphabetically.</p>
          </div>

          <div className="col-md-4">
            <h3>🌱 Plant Information</h3>
            <p>Learn scientific and botanical details.</p>
          </div>

          <div className="col-md-4">
            <h3>📚 Educational</h3>
            <p>Useful for Botany students.</p>
          </div>

        </div>

      </section>


      {/* ================= LOGIN POPUP ================= */}

      {showLoginPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >

          <div
            style={{
              backgroundColor: "white",
              padding: "30px",
              borderRadius: "12px",
              width: "90%",
              maxWidth: "400px",
              textAlign: "center",
              boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
            }}
          >

            <h3>🔐 Login Required</h3>

            <p style={{ marginTop: "15px" }}>
              Please login to explore plants and view
              complete plant information.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                marginTop: "20px",
              }}
            >

              <button
                className="btn btn-success"
                onClick={() => navigate("/login")}
              >
                Login
              </button>

              <button
                className="btn btn-secondary"
                onClick={() => setShowLoginPopup(false)}
              >
                Cancel
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default Home;