import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { BsBagCheck, BsCurrencyDollar } from "react-icons/bs";
import { NavLink } from "react-router-dom";

import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">به داشبورد خود خوش آمدید</h1>

      <ul className="sidebar-links">
        <li>
          <NavLink to="/">
            <AiOutlineHome className="icon" />
            صفحه اصلی
          </NavLink>
        </li>
        <li className="active">
          <NavLink to="admins">
            <MdProductionQuantityLimits className="icon" />
            ادمین ها 
          </NavLink>
        </li>
        <li>
          <NavLink to="customers">
            <BiCommentDetail className="icon" />
            مشتریان
          </NavLink>
        </li>
        <li>
          <NavLink to="vehicles">
            <FiUsers className="icon" />
            خودرو ها
          </NavLink>
        </li>
        <li>
          <NavLink to="vehicleInsurances">
              <BsBagCheck className="icon" />
              بیمه خودرو
          </NavLink>
        </li>
        <li>
          <NavLink to="invoices">
              <BsCurrencyDollar className="icon" />
             فاکتور
          </NavLink>
        </li>
        <li>
          <NavLink to="rentals">
              <BsCurrencyDollar className="icon" />
              اجارات
          </NavLink>
        </li>
        <li>
          <NavLink to="payments">
              <BsCurrencyDollar className="icon" />
              پرداختی ها
          </NavLink>
        </li>
        <li>
          <NavLink to="posts">
              <BsCurrencyDollar className="icon" />
              وبلاگ
          </NavLink>
        </li>
        <li>
          <NavLink to="comments">
              <BsCurrencyDollar className="icon" />
              کامنت ه
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
