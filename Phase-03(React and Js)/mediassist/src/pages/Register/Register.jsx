import { useState, useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Register.css";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  // Email validation regex
  const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Password strength calculator
  const passwordStrength = useMemo(() => {
    const pwd = form.password;
    if (!pwd) return { level: 0, label: "", class: "" };

    let strength = 0;
    if (pwd.length >= 8) strength++;
    if (pwd.length >= 12) strength++;
    if (/[a-z]/.test(pwd) && /[A-Z]/.test(pwd)) strength++;
    if (/\d/.test(pwd)) strength++;
    if (/[!@#$%^&*()_+=-]/.test(pwd)) strength++;

    const levels = [
      { label: "Very Weak", class: "weak" },
      { label: "Weak", class: "weak" },
      { label: "Fair", class: "fair" },
      { label: "Good", class: "good" },
      { label: "Strong", class: "strong" },
      { label: "Very Strong", class: "strong" },
    ];

    return {
      level: Math.min(strength, 5),
      ...levels[Math.min(strength, 5)],
    };
  }, [form.password]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (form.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setShowSuccess(true);
    setTimeout(() => {
      login({ name: form.name, email: form.email });
      navigate("/dashboard");
    }, 1500);
  };

  const isFormValid =
    form.name &&
    form.email &&
    form.password &&
    isValidEmail(form.email) &&
    form.password.length >= 6;

  return (
    <div className="register-container">
      <div className="register-card">
        <h1>Create Account</h1>
        <p className="subtitle">Join MediAssist for better healthcare management</p>

        {showSuccess && (
          <div className="success-message">
            <span>✓</span> Account created successfully! Redirecting...
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              value={form.name}
              onChange={handleChange}
              disabled={showSuccess}
            />
            {errors.name && <div className="error-message">✕ {errors.name}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              disabled={showSuccess}
            />
            {form.email && (
              <div
                className={`email-validation ${isValidEmail(form.email) ? "valid" : "invalid"}`}
              >
                <span>
                  {isValidEmail(form.email) ? "✓" : "✕"}
                </span>
                {isValidEmail(form.email) ? "Valid email" : "Invalid email format"}
              </div>
            )}
            {errors.email && <div className="error-message">✕ {errors.email}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Create a strong password"
              value={form.password}
              onChange={handleChange}
              disabled={showSuccess}
            />
            {form.password && (
              <div className={`password-strength ${passwordStrength.class}`}>
                <div className="strength-bar">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`strength-segment ${
                        i < passwordStrength.level ? `strength-${passwordStrength.class}` : ""
                      }`}
                    />
                  ))}
                </div>
                <span>{passwordStrength.label}</span>
              </div>
            )}
            {errors.password && <div className="error-message">✕ {errors.password}</div>}
          </div>

          <button type="submit" disabled={!isFormValid || showSuccess}>
            {showSuccess ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <p>
          Already have an account? <Link to="/">Login here</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;