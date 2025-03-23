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


    const publishDate = new Date(createdAt)
    const newDate = new Date()

    let relativeTime = null

    let miliSecond = newDate - publishDate
    relativeTime = Math.floor((miliSecond / 3600000))

    let TimeReturn = relativeTime > 24 ? (Math.floor(relativeTime / 24) + ' روز پیش') : (relativeTime + 'ساعت پیش ')

    return TimeReturn;

  }

  
  const isLogin = async () => {
    let IsToken = getLocalStorage('token')

    if (IsToken) {

      IsToken = IsToken.length == 10 ? true : false
    }

    console.log("jjjj" , IsToken)

    return IsToken == null || IsToken == false ? false : true
  }



  const LogOut = async () => {
    swal({
      title: "آیا از خروج مطمئن هستید؟",
      icon: "warning",
      buttons: ["خیر", "بله"]
    }).then(async (result) => {
      if (result) {
        localStorage.removeItem("token");

        const response = await fetch(`${baseUrl}/logout`, {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            "accept": "application/json"
          }
        });


        const json = await response.json();


        if (json) {
          swal({
            title: "با موفقیت خارج شدید",
            icon: "success",
            buttons: "رفتن به هوم پیج"
          }).then(() => (navigator('/')));
        }

      }
    });
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