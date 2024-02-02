import React from "react";

function NavBar() {
  return (
    <div>
      <nav id="upper-nav" className="navbar navbar-light bg-body-tertiary">
        <div className="container-fluid" id="navbar">
          <a className="navbar-brand" href="#">
            <span className="logo">
              <img
                src="./img/pwc.svg"
                alt="SalesForce"
                width="50"
                height="50"
              />
            </span>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
