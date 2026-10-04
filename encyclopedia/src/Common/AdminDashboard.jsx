import { Link } from "react-router-dom";


  function AdminDashboard() {

  const user = JSON.parse(
    localStorage.getItem("loggedInUser")
  );


  return (
    <div className="container py-5">

      <h1>
        Welcome Admin 🌿
      </h1>

      <p>
        Welcome, {user?.name}!
      </p>
      
      <p>
        Manage Plant Encyclopedia
      </p>

      <div className="row mt-4">

        <div className="col-md-4">

          <div className="card p-4">

            <h4>🌿 Manage Plants</h4>

            <p>
              Add, Edit and Delete plants.
            </p>

            

          </div>

        </div>


        <div className="col-md-4">

          <div className="card p-4">

            <h4>Categories</h4>

            <p>
              View and manage plant categories.
            </p>

            

          </div>

        </div>
        <div className="col-md-4">

          <div className="card p-4">

            <h4>👥 Manage Users</h4>

            <p>
              View and manage users.
            </p>


          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;