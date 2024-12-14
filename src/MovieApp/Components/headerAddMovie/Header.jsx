import { React, useState, useEffect } from "react";
import { NavLink , useLocation } from "react-router-dom";

import "../header/Header.css";

export default function Header() {
const location = useLocation()
  const [topName, setTopName] = useState('My Movie')

  useEffect(() => {
    if (location.pathname.includes('details')) {
      setTopName('Details')
    } else {
      setTopName('My Movie')

    }
  }, [])

  return (
    <nav className="navbar navbar-expand-lg p-0 pt-2 ps-2 ps-lg-0 position-fixed w-100">
      <div className="container p-0 pt-2 ps-2 ps-lg-0">
        <div className="row w-100">
          <div className="col-12 tapHeader__headre pb-2">
            <NavLink to={'/'}><img src={`${topName == 'My Movie' ? '.' :".."}/movieApp/backIcon.png`} alt="" className="img-fluid border-none img-icon scale-2" /></NavLink>
            <a className="navbar-brand fw-blod" href="#">{topName}</a>
            <form className="d-flex gap-2 flex-items" role="search">
              <NavLink to="/mymovie"><img src={`${topName == 'My Movie' ? '.' :".."}/movieApp/qwsearch.png`} alt="" className="img-fluid img-icon" /></NavLink>

              {/* <i className="bi bi-box-arrow-in-right fs-4 c-p"></i> */}
            </form>
          </div>
          <div className="col-12 mt-4 flex-items d-flex d-md-none">
            <ul className="nav nav-underline">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">Explore</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/mymovie">Add Movie</NavLink>
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
