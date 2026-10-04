import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import users from "../Common/users.jsx";
import "../CSS/Login.css";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const navigate = useNavigate();

  const [loginError, setLoginError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [specialAdminId, setSpecialAdminId] = useState("");
  const [showSpecialAdminId, setShowSpecialAdminId] = useState(false);

  // Account Type
  const [loginRole, setLoginRole] = useState("user");

  // Project demo ke liye Special Admin ID
  const SPECIAL_ADMIN_ID = "ADMIN@2026";

  const onSubmit = (data) => {
    setLoginError("");

    // users.jsx ke existing users
    // + Registration ke baad localStorage mein save users
    const registeredUsers =
      JSON.parse(localStorage.getItem("users")) || [];

    const allUsers = [...users, ...registeredUsers];

    // Same email wale user ko find karo
    const user = allUsers.find(
      (item) =>
        item.email.toLowerCase() === data.email.toLowerCase() &&
        item.password === data.password
    );

    // Email + password match nahi hua
    if (!user) {
      setLoginError(
        "Account not found. Please register first or check your email and password."
      );
      return;
    }

    // ========================================
    // USER LOGIN
    // ========================================
    if (loginRole === "user") {
      // Agar account admin ka hai aur User select kiya
      if (user.role === "admin") {
        setLoginError(
          "This is an Admin account. Please select Admin login."
        );
        return;
      }

      // User login
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify(user)
      );

      alert("User Login Successfully!");

      navigate("/user-dashboard");
      return;
    }

    // ========================================
    // ADMIN LOGIN
    // ========================================
    if (loginRole === "admin") {
      // User account se Admin login nahi ho sakta
      if (user.role !== "admin") {
        setLoginError(
          "You are not registered as an Admin."
        );
        return;
      }

      // Special Admin ID check
      if (specialAdminId !== SPECIAL_ADMIN_ID) {
        setLoginError(
          "Invalid Special Admin ID."
        );
        return;
      }

      // Admin login successful
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify(user)
      );

      alert("Admin Login Successfully!");

      navigate("/admin/dashboard");
    }
  };

  return (
    <div className="login-page">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card shadow p-4">

              <h2 className="text-center mb-4">
                Login
              </h2>

              <form onSubmit={handleSubmit(onSubmit)}>

                {/* Account Type */}
                <div className="mb-3">
                  
                  <select
                    className="form-select"
                    value={loginRole}
                    onChange={(e) => {
                      setLoginRole(e.target.value);
                      setSpecialAdminId("");
                      setLoginError("");
                    }}
                  >
                    <option value="user">
                      User
                    </option>

                    <option value="admin">
                      Admin
                    </option>
                  </select>
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label">
                    Email
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    {...register("email", {
                      required: "Email is required",

                      pattern: {
                        value:
                          /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message:
                          "Enter a valid email address",
                      },
                    })}
                  />

                  {errors.email && (
                    <p className="text-danger mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label className="form-label">
                    Password
                  </label>

                  <div className="input-group">
                    <input
                      type={
                        showPassword
                          ? "text"
                          : "password"
                      }
                      className="form-control"
                      placeholder="Enter your password"
                      {...register("password", {
                        required:
                          "Password is required",

                        minLength: {
                          value: 8,
                          message:
                            "Password must contain at least 8 characters",
                        },

                        pattern: {
                          value:
                            /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,

                          message:
                            "Password must contain letters and numbers",
                        },
                      })}
                    />

                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={() =>
                        setShowPassword(
                          !showPassword
                        )
                      }
                    >
                      {showPassword ? "🔒" : "🔓"}
                    </button>
                  </div>

                  {errors.password && (
                    <p className="text-danger mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* SPECIAL ADMIN ID */}
                {/* SPECIAL ADMIN ID */}
{loginRole === "admin" && (
  <div className="mb-3">

    <label className="form-label">
      Special Admin ID
    </label>

    <div className="input-group">

      <input
        type={
          showSpecialAdminId
            ? "text"
            : "password"
        }
        className="form-control"
        placeholder="Enter Special Admin ID"
        value={specialAdminId}
        onChange={(e) =>
          setSpecialAdminId(e.target.value)
        }
      />

      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={() =>
          setShowSpecialAdminId(
            !showSpecialAdminId
          )
          }
        >
        {showSpecialAdminId ? "🔒" : "🔓"}
        </button>

        </div>

        <small className="text-muted">
          Admin login requires your registered
             Admin account and Special Admin ID.
            </small>

            </div>
           )}
              {/* Login Error */}
                {loginError && (
                  <div className="alert alert-danger">
                    {loginError}
                  </div>
                )}

                {/* Login Button */}
                <button
                  type="submit"
                  className="btn btn-success w-100"
                  disabled={
                    !isValid ||
                    (loginRole === "admin" &&
                      specialAdminId === "")
                  }
                >
                  Login
                </button>

                {/* Registration */}
                <p className="text-center mt-3">
                  Don't have an account?{" "}

                  <Link to="/registration">
                    Register Here
                  </Link>
                </p>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;