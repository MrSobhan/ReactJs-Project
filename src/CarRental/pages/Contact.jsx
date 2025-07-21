import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../context/authContext";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { NavbarDefault } from "../Components/Navbar/Navbar";
import { Footer } from "../Components/Footer/Footer";
import Contact from "../Components/Contact/Contact";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar, 
  Select, 
  Option, 
  Button, 
  Input, 
  Textarea, 
  Spinner
} from "@material-tailwind/react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-yellow-700"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function ContactPage() {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext)
  const [loadingSub, setLoadingSub] = useState(false)
  const [isLoginUser, setIsLoginUser] = useState(false)


  const contactInfo = [
    {
      icon: <FaPhone className="text-2xl text-blue-600" />,
      title: "تلفن تماس",
      content: "021-12345678",
      description: "پاسخگویی 24 ساعته"
    },
    {
      icon: <FaEnvelope className="text-2xl text-green-600" />,
      title: "ایمیل",
      content: "info@savarina.com",
      description: "پاسخ در کمتر از 24 ساعت"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-red-600" />,
      title: "آدرس",
      content: "تهران، خیابان ولیعصر",
      description: "دفتر مرکزی سوارینا"
    },
    {
      icon: <FaClock className="text-2xl text-purple-600" />,
      title: "ساعات کاری",
      content: "شنبه تا پنج‌شنبه",
      description: "8:00 صبح تا 20:00 شب"
    }
  ];

  return (
    <>
      <NavbarDefault />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
        {/* Hero Section */}
        <section className="bg-blue-gray-900 text-white py-20">
          <div className="container mx-auto lg:w-[80%] w-[90%] text-center">
            <h1 className="text-4xl md:text-6xl font-bold lalezar mb-4">
              ارتباط با ما
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              ما همیشه آماده پاسخگویی به سوالات شما هستیم
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 -mt-10">
          <div className="container mx-auto lg:w-[80%] w-[90%]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800">
                  <CardBody>
                    <div className="flex justify-center mb-4">
                      {info.icon}
                    </div>
                    <Typography variant="h6" className="mb-2 lalezar dark:text-white">
                      {info.title}
                    </Typography>
                    <Typography className="font-bold text-gray-800 dark:text-gray-200 mb-1">
                      {info.content}
                    </Typography>
                    <Typography variant="small" className="text-gray-600 dark:text-gray-400">
                      {info.description}
                    </Typography>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default ContactPage;