import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link, useNavigate } from "react-router-dom";
import "../CSS/UserNavbar.css"; 

function Navbar() {

  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("loggedInUser")
  );

  const handleLogout = () => {

    localStorage.removeItem("loggedInUser");

    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success user-navbar ">

      <div className="container">

        <Link
          className="navbar-brand"
          to="/"
        >
          🌿 Plant Encyclopedia
        </Link>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarMenu"
        >

          <ul className="navbar-nav ms-auto">

            {/* Login se pehle sirf Login dikhega */}
            {!user && (
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/login"
                >
                  Login
                </Link>
              </li>
            )}

            {/* Login ke baad navigation dikhega */}
            {user && (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/user-dashboard"
                  >
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/plants"
                  >
                    Plants A-Z
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/plantcare"
                  >
                    PlantCare
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/plantmarket"
                  >
                     Plant Market
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/feedback"
                  >
                     FeedBack
                  </Link>
                </li>

                <li className="nav-item">
                  <button
                    className="btn btn-danger ms-2"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}

          </ul>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;