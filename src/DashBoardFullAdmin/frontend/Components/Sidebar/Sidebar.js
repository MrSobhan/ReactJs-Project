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
          <NavLink to="/products">
            <MdProductionQuantityLimits className="icon" />
            محصولات
          </NavLink>
        </li>
        <li>
          <NavLink to="/comments">
            <BiCommentDetail className="icon" />
            کامنت ها
          </NavLink>
        </li>
        <li>
          <NavLink to="/users">
            <FiUsers className="icon" />
            کاربران
          </NavLink>
        </li>
        <li>
          <NavLink to="/orders">
              <BsBagCheck className="icon" />
              سفارشات
          </NavLink>
        </li>
        <li>
          <NavLink to="/offs">
              <BsCurrencyDollar className="icon" />
              تخفیف ها
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
