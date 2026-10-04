import { Link } from "react-router-dom";

function Admin() {

  return (
    <div className="container py-5">

      <h1>Admin Dashboard 🌿</h1>

      <p>
        Welcome Admin. Manage Plant Encyclopedia.
      </p>

      <div className="row mt-4">

        <div className="col-md-6">

          <div className="card p-4">

            <h3>🌱 Manage Plants</h3>

            <p>
              Add, edit and delete plants.
            </p>

            <Link
              to="/admin/manage-plants"
              className="btn btn-success"
            >
              Manage Plants
            </Link>

          </div>

        </div>


        <div className="col-md-6">

          <div className="card p-4">

            <h3>👥 Manage Users</h3>

            <p>
              View and manage users.
            </p>

            <Link
              to="/admin/manage-users"
              className="btn btn-primary"
            >
              Manage Users
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Admin;