import React from "react";
import { Navigate } from "react-router-dom";
import {nameUser} from "./data";


export default function Privet() {
    
  return (
    <>
    {nameUser == 'sobhan' ? <Navigate to={'/panel'} /> : <Navigate to={'/login'} />}
    </>
  );
}