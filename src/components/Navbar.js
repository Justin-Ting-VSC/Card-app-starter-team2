import { useNavigate, NavLink } from "react-router-dom";

export default function Navbar() {
const token = localStorage.getItem("token");
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/");
  }
  
  return (
    <header className="navbar">
      <div className="navbar-container">
        <strong className="navbar-logo">Card App</strong>
        <nav className="navbar-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "navbar-link active" : "navbar-link")}
          >
            Home
          </NavLink>
          <NavLink
            to="/cards"
            className={({ isActive }) => (isActive ? "navbar-link active" : "navbar-link")}
          >
            Cards
          </NavLink>
          <NavLink
            to="/addcard"
            className={({ isActive }) => (isActive ? "navbar-link active" : "navbar-link")}
          >
            Add Card
          </NavLink>
          {token ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
        </nav>
      </div>
    </header>
  );
}
