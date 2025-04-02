import React , {useContext , useState , useEffect} from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { NavLink, Link } from "react-router-dom";
import AuthContext from "../../context/authContext";

import { RiAdminLine, RiSecurePaymentFill } from "react-icons/ri";
import { FaCarSide, FaRegCommentDots } from "react-icons/fa";
import { SiCodefactor } from "react-icons/si";
import { MdCarRental } from "react-icons/md";
import { FaRegComments } from "react-icons/fa6";
import { IoBookOutline } from "react-icons/io5";

import "./Sidebar.css";

export default function Sidebar() {

  const authContext = useContext(AuthContext)

  const [isLoginUser, setIsLoginUser] = useState(false)

  useEffect(() => {

    authContext.user.role == "Admin" ? setIsLoginUser(false) : setIsLoginUser(true)

  }, [])
  return (
    <div className="sidebar__Wrapper">
      <div className="sidebar">
        <h1 className="sidebar-title">
          <div className="flex items-center justify-start mx-auto">
            <img src="../logoBrandCarRental.ico" alt="Logo_img" className="w-9 h-9" />
            <Link to={'/'}>
              <p
                className="mr-2 cursor-pointer py-1.5 font-medium lalezar text-3xl text-gray-900"
              >
                سوارینا
              </p>
            </Link>

          </div>
        </h1>

        <ul className="sidebar-links">
          <li>
            <NavLink to="">
              <AiOutlineHome className="icon" />
              صفحه اصلی
            </NavLink>
          </li>
          {isLoginUser && (
            <li className="active">
              <NavLink to="admins">
                <RiAdminLine className="icon" />
                ادمین ها
              </NavLink>
            </li>
          )}
          <li>
            <NavLink to="customers">
              <FiUsers className="icon" />
              مشتریان
            </NavLink>
          </li>
          <li>
            <NavLink to="vehicles">
              <FaCarSide className="icon" />
              خودرو ها
            </NavLink>
          </li>
          <li>
            <NavLink to="vehicleInsurances">
              <IoBookOutline className="icon" />
              بیمه خودرو
            </NavLink>
          </li>
          <li>
            <NavLink to="invoices">
              <SiCodefactor className="icon" />
              فاکتور
            </NavLink>
          </li>
          <li>
            <NavLink to="rentals">
              <MdCarRental className="icon" />
              اجارات
            </NavLink>
          </li>
          <li>
            <NavLink to="payments">
              <RiSecurePaymentFill className="icon" />
              پرداختی ها
            </NavLink>
          </li>

          {isLoginUser && (
            <li>
              <NavLink to="posts">
                <FaRegComments className="icon" />
                وبلاگ
              </NavLink>
            </li>
          )}
          <li>
            <NavLink to="comments">
              <FaRegCommentDots className="icon" />
              کامنت ها
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
