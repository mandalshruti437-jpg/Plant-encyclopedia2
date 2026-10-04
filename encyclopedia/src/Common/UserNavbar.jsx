import { Link, useNavigate } from "react-router-dom";
import "../CSS/UserNavbar.css";

function UserNavbar() {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("loggedInUser")
  );

  function handleLogout() {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success user-navbar">
      <div className="container">

        {/* Logo */}
        <Link
          className="navbar-brand fw-bold"
          to="/"
        >
          🌿 Plant Encyclopedia
        </Link>

        {/* Mobile Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#userNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div
          className="collapse navbar-collapse"
          id="userNavbar"
        >
          <div className="navbar-nav ms-auto">

            <Link
              className="nav-link"
              to="/"
            >
              Home
            </Link>

            <Link
              className="nav-link"
              to="/Plants"
            >
              Plants A-Z
            </Link>

            <Link
              className="nav-link"
              to="/categories"
            >
              Categories
            </Link>

            <Link
              className="nav-link"
              to="/plantcare"
            >
              PlantCare
            </Link>

            <Link
              className="nav-link"
              to="/research"
            >
              Research
            </Link>

            <Link
              className="nav-link"
              to="/feedback"
            >
              Feedback
            </Link>

            {/* Logout */}
            <button
              className="btn btn-danger ms-2"
              onClick={handleLogout}
            >
              Logout
            </button>

          </div>
        </div>

      </div>
    </nav>
  );
}

export default UserNavbar;