import { Link } from "react-router-dom";
import "../CSS/AdminFooter.css";

function AdminFooter() {
  return (
    <footer className="admin-footer">

      <div className="container">

        <div className="row align-items-center">

          {/* Brand */}
          <div className="col-md-5 mb-3 mb-md-0">

            <Link
              to="/admin/dashboard"
              className="admin-footer-brand"
            >
              <span className="admin-brand-icon">
                🌿
              </span>

              <span>
                Plant Encyclopedia
              </span>
            </Link>

            <p className="admin-footer-text">
              Manage plants, categories and
              website data easily from the
              admin dashboard.
            </p>
            <p className="admin-footer-text">
              Developer Contact no:
              8356830275
            </p>

          </div>


          {/* Admin Links */}
          <div className="col-md-4 mb-3 mb-md-0">

            <h5>
              Admin Panel
            </h5>

            <div className="admin-footer-links">

              <Link to="/admin/dashboard">
                Home
              </Link>

              <Link to="/admin/manage-plants">
                Manage Plants
              </Link>

              <Link to="/admin/manage-categories">
                 Manage Categories
              </Link>

              <Link to="/admin/manage-data">
                Manage Data
              </Link>

            </div>

          </div>


          {/* Contact */}
          <div className="col-md-3">

            <h5>
              Plant Encyclopedia
            </h5>

            <p>
              🌱 Explore and manage
              plant information.
            </p>

          </div>

        </div>


        <hr />


        {/* Bottom */}
        <div className="admin-footer-bottom">

          <span>
            © 2026 Plant Encyclopedia
          </span>

          <span>
            Admin 
          </span>

        </div>

      </div>

    </footer>
  );
}

export default AdminFooter;