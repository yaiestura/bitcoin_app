import React from "react";

const Navbar = () => {

    return (

<nav className="navbar navbar-expand-lg navbar-light bg-blue">
  <a className="navbar-brand" href="#">Cryptocurrency</a>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">FAQ's</a>
          </li>
    </ul>
  </div>
</nav>

   );
};

export default Navbar;