import React from "react";
import '../styles/header.css'
import logo from '../media/logo.png'

const Header = () => {

  return (
    <div class="header">
      <div class="header-wrapper">
        <nav className="navbar navbar-expand-lg d-flex justify-content-between">
          <a className="navbar-brand text-white" href="#"><img src={logo} alt="logo"/>Cryptocurrency</a>
          <ul className="navbar-nav collapse navbar-collapse">
            <li className="nav-item">
              <a className="nav-link text-uppercase text-white" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-uppercase text-white" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-uppercase text-white" href="#">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-uppercase text-white" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-uppercase text-white" href="#">Contacts</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-uppercase text-white" href="#">FAQ's</a>
            </li>
            </ul>
        </nav>
        <div className="header-content text-white p-3">
          <h1 className="text-uppercase">Cryptocurrency</h1>
          <h3 className="text-uppercase">Landing Page</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
            <br></br>
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
            <br></br>
            nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat
          </p>
          <button type="button" className="btn btn-primary text-uppercase text-white">Proceed</button>
        </div>
    </div>
  </div>


   );
};

export default Header;