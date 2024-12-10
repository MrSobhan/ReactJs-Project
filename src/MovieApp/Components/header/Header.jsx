import { React, useState } from "react";
import { NavLink , useNavigate } from "react-router-dom";

import "./Header.css";

export default function Header() {
  let navigate = useNavigate()
  
  return (
    <h1>My Header</h1>
  );
}
