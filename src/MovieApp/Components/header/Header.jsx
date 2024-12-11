import { React, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "./Header.css";

export default function Header() {
  let navigate = useNavigate()

  return (
    <nav className="navbar navbar-expand-lg p-0 pt-2 ps-2 ps-lg-0 position-fixed w-100">
      <div className="container p-0 pt-2 ps-2 ps-lg-0">
      <div className="row w-100">
        <div className="col-12 tapHeader__headre">
          <img src="./movieApp/image.png" alt="" className="img-fluid border-none img-icon pt-1" />
          <a className="navbar-brand fw-blod" href="#">Whatsup!</a>
          <form className="d-flex gap-2 flex-items" role="search">
            <img src="./movieApp/qwsearch.png" alt="" className="img-fluid img-icon" />

            {/* <i className="bi bi-box-arrow-in-right fs-4 c-p"></i> */}
          </form>
        </div>
        <div className="col-12 mt-4 flex-items">
          <ul className="nav nav-underline">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">Explore</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/mymovie">Add Movie</NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Recent</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Profile</a>
            </li>
          </ul>
        </div>
      </div>




      </div>
    </nav>
  );
}
