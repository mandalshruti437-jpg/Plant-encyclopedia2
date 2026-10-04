import { Link, useNavigate } from "react-router-dom";
import "../CSS/AdminNavbar.css";

function AdminNavbar() {

  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  }

  return (
    <nav className="navbar navbar-dark bg-dark admin-navbar">

      <div className="container">

        <Link
          className="navbar-brand"
          to="/admin/dashboard"
        >
          🌿 Plant Admin
        </Link>

        <div className="navbar-nav flex-row">

          {/* Home */}
          <Link
            className="nav-link mx-2"
            to="/admin/dashboard"
          >
            Home
          </Link>

          {/* Manage Plants */}
          <Link
            className="nav-link mx-2"
            to="/admin/manage-plants"
          >
             Plants
          </Link>
          
          <Link
            className="nav-link mx-2"
            to="/admin/manage-data"
          >
            Manage Data
          </Link>
          <Link
            className="nav-link mx-2"
            to="/admin/manage-plantcare"
          >
           PlantCare
          </Link>
          <Link
            className="nav-link mx-2"
            to="/admin/manage-plantmarket"
          >
            Manage Market
          </Link>

          {/* Manage Categories */}
          <Link
            className="nav-link mx-2"
            to="/admin/manage-feedback"
          >
             Feedback
          </Link>

          {/* Manage Users */}
          <Link
            className="nav-link mx-2"
            to="/admin/manage-users"
          >
            Manage Users
          </Link>

          {/* Logout */}
          <button
            type="button"
            className="btn btn-danger ms-2"
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>

      </div>

    </nav>
  );
}

export default AdminNavbar;