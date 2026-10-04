import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import users from "../Common/users";
import "../CSS/Registration.css";

function Registration() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Special Admin ID Show / Hide
  const [showSpecialId, setShowSpecialId] = useState(false);

  // User / Admin
  const [role, setRole] = useState("user");

  // Special Admin ID
  const [specialId, setSpecialId] = useState("");

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");
  const profession = watch("profession");

  // Project demo ke liye Special Admin ID
  const SPECIAL_ADMIN_ID = "ADMIN@2026";

  // Yaha apna WhatsApp number daalo
  const WHATSAPP_NUMBER = "918356830275";

  // WhatsApp message
  const whatsappMessage =
    "Hello, I would like to request a Special Admin ID. " +
    "I am an authorized professional and can provide my professional ID for verification. " +
    "I understand that the Special Admin ID is only for authorized professionals and is not available to students.";

  // WhatsApp open
  function openWhatsApp() {
    const whatsappURL =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        whatsappMessage
      )}`;

    window.open(whatsappURL, "_blank");
  }

  // Registration
  function onSubmit(data) {
    console.log("Registration Data:", data);

    // ADMIN CHECK
    if (role === "admin") {
      // Student ko Admin access nahi milega
      if (data.profession === "student") {
        alert("Students are not eligible for Admin access.");
        return;
      }

      // Special Admin ID check
      if (specialId !== SPECIAL_ADMIN_ID) {
        alert(
          "Invalid Special Admin ID. Please contact the administrator on WhatsApp."
        );
        return;
      }
    }

    // Existing registered users
    const existingUsers =
      JSON.parse(localStorage.getItem("users")) || [];

    // Same email already registered hai ya nahi
    const emailAlreadyExists = existingUsers.some(
      (item) =>
        item.email.toLowerCase() ===
        data.email.toLowerCase()
    );

    if (emailAlreadyExists) {
      alert(
        "This email is already registered. Please login."
      );
      navigate("/login");
      return;
    }

    // New user
    const newUser = {
      id: Date.now(),
      ...data,
      role: role,
    };

    // Logged in user save
    localStorage.setItem(
      "loggedInUser",
      JSON.stringify(newUser)
    );

    // Users save
    const updatedUsers = [
      ...existingUsers,
      newUser,
    ];

    localStorage.setItem(
      "users",
      JSON.stringify(updatedUsers)
    );

    alert("Sign Up Successfully!");

    // Dashboard redirect
    if (role === "admin") {
      navigate("/admin/dashboard");
    } else {
      navigate("/user-dashboard");
    }
  }

  return (
    <div className="registration-page">

      <h2>Create Your Account</h2>

      <p>Sign up to continue</p>

      <form onSubmit={handleSubmit(onSubmit)}>

        {/* Full Name */}
        <div>
          <label>Full Name</label>
          <br />

          <input
            type="text"
            placeholder="Enter your full name"
            style={{ textAlign: "center" }}
            {...register("fullName", {
              required: "Full Name is required",
            })}
          />

          {errors.fullName && (
            <p>{errors.fullName.message}</p>
          )}
        </div>

        <br />

        {/* Email */}
        <div>
          <label>Email Address</label>
          <br />

          <input
            type="email"
            placeholder="Enter your email"
            style={{ textAlign: "center" }}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
          />

          {errors.email && (
            <p>{errors.email.message}</p>
          )}
        </div>

        <br />

        {/* Phone */}
        <div>
          <label>Phone Number</label>
          <br />

          <input
            type="text"
            placeholder="Enter Phone Number"
            style={{ textAlign: "center" }}
            maxLength={10}
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message:
                  "Phone number must be exactly 10 digits",
              },
            })}
            onInput={(e) => {
              e.target.value =
                e.target.value.replace(/[^0-9]/g, "");
            }}
          />

          {errors.phone && (
            <p>{errors.phone.message}</p>
          )}
        </div>

        <br />

        {/* College / School */}
        <div>
          <label>College/School Name</label>
          <br />

          <input
            type="text"
            placeholder="Enter your college/school name"
            style={{ textAlign: "center" }}
            {...register("collegeName", {
              required:
                "College/School Name is required",
            })}
          />

          {errors.collegeName && (
            <p>{errors.collegeName.message}</p>
          )}
        </div>

        <br />

        {/* Profession */}
        <div>
          <label>Profession</label>
          <br />

          <select
            style={{ textAlign: "center" }}
            {...register("profession", {
              required: "Profession is required",
            })}
          >
            <option value="">
              Select your profession
            </option>

            <option value="student">
              Student
            </option>

            <option value="teacher">
              Teacher
            </option>

            <option value="researcher">
              Researcher
            </option>

            <option value="doctor">
              Doctor
            </option>

            <option value="engineer">
              Engineer
            </option>
          </select>

          {errors.profession && (
            <p>{errors.profession.message}</p>
          )}
        </div>

        <br />

        {/* Account Type */}
        <div>
          <label>Account Type</label>
          <br />

          <select
            value={role}
            onChange={(e) => {
              setRole(e.target.value);
              setSpecialId("");
              setShowSpecialId(false);
            }}
            style={{ textAlign: "center" }}
          >
            <option value="user">
              User
            </option>

            <option value="admin">
              Admin
            </option>
          </select>
        </div>

        <br />

        {/* ADMIN SECTION */}
        {role === "admin" && (
          <div
            className="admin-access-box"
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              borderRadius: "8px",
              marginBottom: "15px",
            }}
          >

            <h3>🔐 Special Admin Access</h3>

            <p>
              Admin access is only available to
              authorized professionals.
            </p>

            {/* Student selected */}
            {profession === "student" && (
              <div>
                <p style={{ color: "red" }}>
                  ❌ Students are not eligible for
                  Admin access.
                </p>
              </div>
            )}

            {/* Professional selected */}
            {profession !== "student" &&
              profession !== "" && (
                <div>

                  {/* Special Admin ID */}
                  <div className="special-id-input">

                    <input
                      type={
                        showSpecialId
                          ? "text"
                          : "password"
                      }
                      placeholder="Enter Special Admin ID"
                      value={specialId}
                      onChange={(e) =>
                        setSpecialId(e.target.value)
                      }
                      style={{
                        textAlign: "center",
                        marginBottom: "10px",
                      }}
                    />

                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() =>
                        setShowSpecialId(
                          !showSpecialId
                        )
                      }
                      aria-label={
                        showSpecialId
                          ? "Hide Special Admin ID"
                          : "Show Special Admin ID"
                      }
                    >
                      {showSpecialId
                        ? "👁️"
                        : "👁️‍🗨️"}
                    </button>

                  </div>

                  <br />

                  <button
                    type="button"
                    onClick={openWhatsApp}
                    className="whatsapp-button"
                    style={{
                      backgroundColor: "#25D366",
                      color: "white",
                      border: "none",
                      padding: "10px 15px",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    📱 Request Special ID on WhatsApp
                  </button>

                  <p
                    style={{
                      fontSize: "14px",
                      marginTop: "10px",
                    }}
                  >
                    Special Admin ID ke liye
                    administrator se WhatsApp par
                    contact karein.
                  </p>

                  <p
                    style={{
                      color: "red",
                      fontSize: "13px",
                    }}
                  >
                    ⚠️ Special ID is only for
                    authorized professionals.
                    Students are not eligible.
                  </p>

                </div>
              )}
          </div>
        )}

        {/* Password */}
        <div>
          <label>Password</label>
          <br />

          <div className="password-input">

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Create a password"
              style={{ textAlign: "center" }}
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value:
                    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/,
                  message:
                    "Password must have 8+ characters, uppercase, lowercase and a number",
                },
              })}
            />

            <button
              type="button"
              className="password-toggle"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              aria-label={
                showPassword
                  ? "Hide password"
                  : "Show password"
              }
            >
              {showPassword
                ? "👁️"
                : "👁️‍🗨️"}
            </button>

          </div>

          {errors.password && (
            <p>{errors.password.message}</p>
          )}
        </div>

        <br />

        {/* Confirm Password */}
        <div>
          <label>Confirm Password</label>
          <br />

          <div className="password-input">

            <input
              type={
                showConfirmPassword
                  ? "text"
                  : "password"
              }
              placeholder="Confirm your password"
              style={{ textAlign: "center" }}
              {...register("confirmPassword", {
                required:
                  "Confirm Password is required",
                validate: (value) =>
                  value === password ||
                  "Passwords do not match",
              })}
            />

            <button
              type="button"
              className="password-toggle"
              onClick={() =>
                setShowConfirmPassword(
                  !showConfirmPassword
                )
              }
              aria-label={
                showConfirmPassword
                  ? "Hide confirm password"
                  : "Show confirm password"
              }
            >
              {showConfirmPassword
                ? "👁️"
                : "👁️‍🗨️"}
            </button>

          </div>

          {errors.confirmPassword && (
            <p>
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <br />

        {/* Sign Up */}
        <button type="submit">
          Sign Up
        </button>

        <p>
          Already have an account?{" "}

          <Link to="/login">
            Login Here
          </Link>
        </p>

      </form>
    </div>
  );
}

export default Registration;