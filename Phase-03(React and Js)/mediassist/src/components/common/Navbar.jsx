import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Navbar.css";

function Navbar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="app-navbar">
      <div className="brand">
        <h2>MediAssist</h2>
      </div>
      <div className="nav-links">
        <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "active" : "")}>Dashboard</NavLink>
        <NavLink to="/profile" className={({ isActive }) => (isActive ? "active" : "")}>Profile</NavLink>
        <NavLink to="/analysis" className={({ isActive }) => (isActive ? "active" : "")}>Analysis</NavLink>
        <NavLink to="/doctors" className={({ isActive }) => (isActive ? "active" : "")}>Doctors</NavLink>
        <NavLink to="/booking" className={({ isActive }) => (isActive ? "active" : "")}>Booking</NavLink>
        <NavLink to="/emergency" className={({ isActive }) => (isActive ? "active" : "")}>Emergency</NavLink>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}

export default Navbar;