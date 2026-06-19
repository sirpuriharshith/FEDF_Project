import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="app-sidebar">
      <ul>
        <li>
          <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "active" : "")}>Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/profile" className={({ isActive }) => (isActive ? "active" : "")}>Profile</NavLink>
        </li>
        <li>
          <NavLink to="/analysis" className={({ isActive }) => (isActive ? "active" : "")}>Analysis</NavLink>
        </li>
        <li>
          <NavLink to="/doctors" className={({ isActive }) => (isActive ? "active" : "")}>Doctors</NavLink>
        </li>
        <li>
          <NavLink to="/booking" className={({ isActive }) => (isActive ? "active" : "")}>Booking</NavLink>
        </li>
        <li>
          <NavLink to="/emergency" className={({ isActive }) => (isActive ? "active" : "")}>Emergency</NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;