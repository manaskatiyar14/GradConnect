import { Link } from "react-router-dom";
import "../App.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Grad<span>Connect</span></div>

      <div className="nav-links">
        <Link to="/pages/home">Home</Link>
        <Link to="/pages/alumni">Alumni</Link>
        <Link to="/pages/teams">Teams</Link>
        <Link to="/pages/profile">Profile</Link>
      </div>

      <div className="nav-buttons">
        <Link to="/pages/Signup">
          <button className="btn-outline">Sign In</button>
        </Link>
        <Link to="/pages/Signup">
          <button className="btn-filled">Sign Up</button>
        </Link>
      </div>
    </nav>
  );
}