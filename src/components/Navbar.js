import { NavLink } from "react-router-dom";

export default function Navbar() {
  /* TODO: Complete the navbar 
    - add links to CardList and AddCard pages 
    - style as a navbar UI */

  return (
    <header className="navbar">
      <div className="navbar-container">
        <strong className="navbar-logo">Card App</strong>
        <nav className="navbar-links">
          <NavLink to="/" end className="navbar-link" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/cards" className="navbar-link" activeClassName="active">
            Cards
          </NavLink>
          <NavLink to="/addcard" className="navbar-link" activeClassName="active">
            Add Card
          </NavLink>
        </nav>
      </div>
    </header>
  );
}