import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import API_URL from "../../api.js";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = "Username is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 8)
      newErrors.password = "At least 8 characters";
    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Confirm your password";
    else if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!formData.agree) newErrors.agree = "Please accept terms to continue";
    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const foundErrors = validate();
    setErrors(foundErrors);
    if (Object.keys(foundErrors).length > 0) return;

    setSubmitting(true);
    try {
      const { data } = await axios.post(
        `${API_URL}/signup`,
        {
          ...formData, // formData already contains username now
        },
        { withCredentials: true }
      );
      if (data.success) {
        toast.success(data.message);
        localStorage.setItem("username", formData.username);
        localStorage.setItem("email", formData.email);setTimeout(() => {
          const isLocal =
            window.location.hostname === "localhost" ||
            window.location.hostname === "127.0.0.1";

          const dashboardUrl = isLocal
            ? "http://localhost:3001"
            : "https://zenotrade-dashboard-o8ih.onrender.com";
          window.location.href = `${dashboardUrl}`;
        }, 500);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Signup failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const styles = {
    container: {
      maxWidth: 440,
      margin: "40px auto",
      padding: 24,
      border: "1px solid #e5e7eb",
      borderRadius: 8,
      boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
      background: "#ffffff",
    },
    title: { margin: 0, marginBottom: 8, fontSize: 28 },
    subtitle: { marginTop: 0, color: "#6b7280", marginBottom: 16 },
    field: { marginBottom: 14 },
    label: { display: "block", marginBottom: 6, fontWeight: 600 },
    input: {
      width: "100%",
      padding: "10px 12px",
      border: "1px solid #d1d5db",
      borderRadius: 6,
      outline: "none",
    },
    checkboxRow: { display: "flex", alignItems: "center", gap: 8 },
    error: { color: "#dc2626", fontSize: 12, marginTop: 6 },
    button: {
      width: "100%",
      padding: "10px 14px",
      background: "#2563eb",
      color: "#fff",
      border: "none",
      borderRadius: 6,
      cursor: "pointer",
      fontWeight: 600,
    },
    muted: { color: "#6b7280", fontSize: 14 },
    link: { color: "#2563eb", textDecoration: "none", fontWeight: 600 },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Create your account</h1>
      <p style={styles.subtitle}>
        Start trading in minutes. It’s free to sign up.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <div style={styles.field}>
          <label htmlFor="username" style={styles.label}>
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="johndoe"
            value={formData.username}
            onChange={handleChange}
            style={styles.input}
            autoComplete="username"
          />
          {errors.username && <div style={styles.error}>{errors.username}</div>}
        </div>

        <div style={styles.field}>
          <label htmlFor="email" style={styles.label}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="jane@example.com"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            autoComplete="email"
          />
          {errors.email && <div style={styles.error}>{errors.email}</div>}
        </div>

        <div style={styles.field}>
          <label htmlFor="password" style={styles.label}>
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="At least 8 characters"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
            autoComplete="new-password"
          />
          {errors.password && <div style={styles.error}>{errors.password}</div>}
        </div>

        <div style={styles.field}>
          <label htmlFor="confirmPassword" style={styles.label}>
            Confirm password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Re-enter password"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={styles.input}
            autoComplete="new-password"
          />
          {errors.confirmPassword && (
            <div style={styles.error}>{errors.confirmPassword}</div>
          )}
        </div>

        <div style={{ ...styles.field, ...styles.checkboxRow }}>
          <input
            id="agree"
            name="agree"
            type="checkbox"
            checked={formData.agree}
            onChange={handleChange}
          />
          <label htmlFor="agree" style={{ margin: 0 }}>
            I agree to the Terms and Privacy Policy
          </label>
        </div>
        {errors.agree && (
          <div style={{ ...styles.error, marginTop: -8, marginBottom: 8 }}>
            {errors.agree}
          </div>
        )}

        <button type="submit" style={styles.button} disabled={submitting}>
          {submitting ? "Creating account…" : "Create account"}
        </button>
      </form>

      <p style={{ marginTop: 16, ...styles.muted }}>
        Already have an account?{" "}
        <Link to="/login" style={styles.link}>
          Log in
        </Link>
      </p>
    </div>
  );
}

export default Signup;