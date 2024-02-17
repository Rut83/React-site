import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

let i = 0;

const Navbar = () => {
  return (
    <>
      <nav className="nav-main" id="main">
        <div className="nav-left" id="name">
          <h1 className="nav-name-left">Rut Rupala</h1>
        </div>

        <div className="nav-right" id="right">
          <nav>
            <ul className="nav-ul-right" id="drop-down">
              <Link to="/react-site" className="nav-li">
                Home
              </Link>
              <Link to="/react-site/about" className="nav-li">
                {" "}
                About
              </Link>
              <Link to="/react-site/contact" className="nav-li">
                Contact
              </Link>
              <Link to="/react-site/projects" className="nav-li">
                Project
              </Link>
            </ul>
            <div id="drop-div">
              <button onClick={Dropdown} id="drop-button">
                =
              </button>
            </div>
          </nav>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

function Dropdown() {
  i++;
  let j = i % 2;
  if (j == 0) {
    document.getElementById("drop-down").style.display = "none";
    document.getElementById("main").style.display = "flex";
    document.getElementById('drop-button').innerText = '=';
  } else if (j == 1) {
    document.getElementById("drop-down").style.display = "block";
    document.getElementById("main").style.display = "block";
    document.getElementById("name").style.textAlign = "center";
    document.getElementById("right").style.display = "block";
    document.getElementById("right").style.textAlign = "center";
    document.getElementById('drop-button').innerText = 'X';
  }
}
