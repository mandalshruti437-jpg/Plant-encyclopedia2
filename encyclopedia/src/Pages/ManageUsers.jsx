import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ManageUsers() {
  const navigate = useNavigate();

  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [];
  });

  // ================================
  // SAVE USERS
  // ================================

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // ================================
  // DELETE USER / ADMIN
  // ================================

  function handleDelete(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmDelete) {
      return;
    }

    const updatedUsers = users.filter((user) => user.id !== id);

    setUsers(updatedUsers);

    alert("User deleted successfully!");
  }

  // ================================
  // EDIT USER / ADMIN
  // ================================

  function handleEdit(user) {
    const fullName = prompt(
      "Enter Full Name",
      user.fullName || ""
    );

    if (!fullName) {
      return;
    }

    const email = prompt(
      "Enter Email",
      user.email || ""
    );

    if (!email) {
      return;
    }

    const phone = prompt(
      "Enter Phone Number",
      user.phone || ""
    );

    if (!phone) {
      return;
    }

    const collegeName = prompt(
      "Enter College/School Name",
      user.collegeName || ""
    );

    const profession = prompt(
      "Enter Profession",
      user.profession || ""
    );

    const password = prompt(
      "Enter Password",
      user.password || ""
    );

    if (!password) {
      return;
    }

    // Role ko change karne ka option
    const roleInput = prompt(
      "Enter Role: user or admin",
      user.role || "user"
    );

    if (!roleInput) {
      return;
    }

    const newRole = roleInput.toLowerCase().trim();

    if (newRole !== "user" && newRole !== "admin") {
      alert("Role must be either user or admin.");
      return;
    }

    const updatedUsers = users.map((item) => {
      if (item.id === user.id) {
        return {
          ...item,

          fullName,
          email,
          phone,
          collegeName,
          profession,
          password,

          role: newRole,
        };
      }

      return item;
    });

    setUsers(updatedUsers);

    alert("User updated successfully!");
  }

  // ================================
  // ADD USER
  // ================================

  function handleAddUser() {
    const fullName = prompt("Enter Full Name");

    if (!fullName) {
      return;
    }

    const email = prompt("Enter Email");

    if (!email) {
      return;
    }

    // Duplicate email check
    const emailExists = users.some(
      (user) =>
        user.email?.toLowerCase() === email.toLowerCase()
    );

    if (emailExists) {
      alert("This email is already registered.");
      return;
    }

    const phone = prompt("Enter Phone Number");

    if (!phone) {
      return;
    }

    const collegeName = prompt(
      "Enter College/School Name"
    );

    const profession = prompt("Enter Profession");

    const password = prompt("Enter Password");

    if (!password) {
      return;
    }

    const newUser = {
      id: Date.now(),

      fullName,

      email,

      phone,

      collegeName,

      profession,

      password,

      // Important
      role: "user",
    };

    setUsers([...users, newUser]);

    alert("New User added successfully!");
  }

  // ================================
  // ADD ADMIN
  // ================================

  function handleAddAdmin() {
    const fullName = prompt("Enter Admin Full Name");

    if (!fullName) {
      return;
    }

    const email = prompt("Enter Admin Email");

    if (!email) {
      return;
    }

    // Duplicate email check
    const emailExists = users.some(
      (user) =>
        user.email?.toLowerCase() === email.toLowerCase()
    );

    if (emailExists) {
      alert("This email is already registered.");
      return;
    }

    const phone = prompt("Enter Admin Phone Number");

    if (!phone) {
      return;
    }

    const collegeName = prompt(
      "Enter College/School Name"
    );

    const profession = prompt("Enter Profession");

    const password = prompt("Enter Admin Password");

    if (!password) {
      return;
    }

    // Special Admin ID
    const specialId = prompt(
      "Enter Special Admin ID"
    );

    if (!specialId) {
      return;
    }

    // Same Special ID validation
    if (specialId !== "ADMIN@2026") {
      alert("Invalid Special Admin ID.");
      return;
    }

    const newAdmin = {
      id: Date.now(),

      fullName,

      email,

      phone,

      collegeName,

      profession,

      password,

      specialId,

      // Important
      role: "admin",
    };

    setUsers([...users, newAdmin]);

    alert("New Admin added successfully!");
  }

  // ================================
  // OPEN USER / ADMIN DASHBOARD
  // ================================

  function handleOpenDashboard(user) {
    // Selected user ko loggedInUser mein save
    localStorage.setItem(
      "loggedInUser",
      JSON.stringify(user)
    );

    // Role ke according dashboard
    if (user.role === "admin") {
      navigate("/admin/dashboard");
    } else {
      navigate("/user-dashboard");
    }
  }

  // ================================
  // UI
  // ================================

  return (
    <div className="container py-5">

      {/* HEADER */}

      <div className="d-flex justify-content-between align-items-center mb-4">

        <h2>
          👥 Manage Users
        </h2>

        <div className="d-flex gap-2">

          {/* ADD USER */}

          <button
            className="btn btn-success"
            onClick={handleAddUser}
          >
            ➕ Add User
          </button>

          {/* ADD ADMIN */}

          <button
            className="btn btn-danger"
            onClick={handleAddAdmin}
          >
            👑 Add Admin
          </button>

        </div>

      </div>

      {/* TABLE */}

      <div className="card shadow">

        <div className="card-body">

          <h5 className="mb-3">
            Total Users: {users.length}
          </h5>

          <div className="table-responsive">

            <table className="table table-bordered table-hover">

              <thead className="table-dark">

                <tr>

                  <th>#</th>

                  <th>Full Name</th>

                  <th>Email</th>

                  {/* PASSWORD HIDDEN */}

                  <th>College/School</th>

                  <th>Profession</th>

                  <th>Role</th>

                  <th>Action</th>

                </tr>

              </thead>

              <tbody>

                {users.length === 0 ? (

                  <tr>

                    <td
                      colSpan="7"
                      className="text-center"
                    >
                      No users registered yet.
                    </td>

                  </tr>

                ) : (

                  users.map((user, index) => (

                    <tr key={user.id}>

                      <td>
                        {index + 1}
                      </td>

                      <td>
                        {user.fullName}
                      </td>

                      <td>
                        {user.email}
                      </td>

                      {/* PHONE NUMBER HIDDEN */}

                      {/* PASSWORD HIDDEN */}

                      <td>
                        {user.collegeName}
                      </td>

                      <td>
                        {user.profession}
                      </td>

                      {/* ROLE */}

                      <td>

                        {user.role === "admin" ? (

                          <span className="badge bg-danger">
                            Admin
                          </span>

                        ) : (

                          <span className="badge bg-success">
                            User
                          </span>

                        )}

                      </td>

                      {/* ACTION */}

                      <td>

                        <div className="d-flex gap-2">

                          {/* EDIT */}

                          <button
                            className="btn btn-warning btn-sm"
                            onClick={() =>
                              handleEdit(user)
                            }
                          >
                            ✏️ Edit
                          </button>

                          {/* DELETE */}

                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() =>
                              handleDelete(user.id)
                            }
                          >
                            🗑️ Delete
                          </button>

                        </div>

                      </td>

                    </tr>

                  ))

                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ManageUsers;