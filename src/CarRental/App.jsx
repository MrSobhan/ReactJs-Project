import React, { useEffect, useState } from "react";
import { useRoutes, useParams, useNavigate } from "react-router-dom";
import AuthContext from "./context/authContext";
import routes from "./routes";
import "./styles/reset.css";
import "./styles/App.css";
import swal from "sweetalert";
const App = () => {

  const navigator = useNavigate()
  const router = useRoutes(routes);

  const baseUrl = "https://crms-h94h.onrender.com"

  const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
  }
  const getLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key))
  }
  const calcuteRelativeTimeDifference = (createdAt) => {


    // const publishDate = new Date(createdAt)
    // const newDate = new Date()

    // console.log(newDate);
    

    // let relativeTime = null

    // let miliSecond = newDate - publishDate
    // relativeTime = Math.floor((miliSecond / 3600000))

    // let TimeReturn = relativeTime > 24 ? (Math.floor(relativeTime / 24) + ' روز پیش') : (relativeTime + 'ساعت پیش ')

    return createdAt.slice(0 , 10);

  }
  const isLogin = () => {
    let IsToken = getLocalStorage('token') && getLocalStorage('token').length == 10

    return IsToken === null ? false : true
  }
  const LogOut = async () => {
    let isTrueLogout = false
    await swal({
      title: "آیا از خروج مطمئن هستید؟",
      icon: "warning",
      buttons: ["خیر", "بله"]
    }).then(async (result) => {
      if (result) {
        localStorage.removeItem("token");
        localStorage.removeItem("ID");
        localStorage.removeItem("Role");

        const response = await fetch(`${baseUrl}/logout`, {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            "accept": "application/json"
          }
        });
        


        if (response.status === 200) {
          isTrueLogout = true
          swal({
            title: "با موفقیت خارج شدید",
            icon: "success",
            buttons: "رفتن به هوم پیج"
          }).then(() => (navigator('/')));
        }

      }
    });

    return isTrueLogout

  }

  return (
    <AuthContext.Provider
      value={{
        baseUrl,
        setLocalStorage,
        getLocalStorage,
        calcuteRelativeTimeDifference,
        isLogin,
        LogOut
      }}
    >
      {router}
    </AuthContext.Provider>
  );
}


export default App;