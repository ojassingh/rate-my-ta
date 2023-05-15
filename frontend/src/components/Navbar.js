import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="title" to="/">
        Rate my TA.
      </Link>
      <ul>
        <li>
          <Link to="/signup">SignUp</Link>
          <Link to="/login">LogIn</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
