import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../context/authContext";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { NavbarDefault } from "../Components/Navbar/Navbar";
import { Footer } from "../Components/Footer/Footer";
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

export function Contact() {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext)
  const [loadingSub, setLoadingSub] = useState(false)
  const [isLoginUser, setIsLoginUser] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'پیشنهاد',
    message: ''
  });

  const [comments, setComments] = useState([])

  useEffect(() => {
    getAllComments()
    authContext.isLogin() && setIsLoginUser(true)
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const CommentHandler = async () => {
    setLoadingSub(true)

    if (isLoginUser) {
      const dataComments = {
        "subject": formData.subject,
        "content": formData.message,
        "status": "pending",
        "customer_id": authContext.user.ID
      }

      const response = await fetch(`${authContext.baseUrl}/comments/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "accept": "application/json",
          "Authorization": `Bearer ${authContext.user.access_token}`,
          "Authorization-Refresh": `Bearer ${authContext.user.refresh_token}`,
        },
        body: JSON.stringify(dataComments),
      });

      if (response.status === 200) {
        setLoadingSub(false)
        setFormData({
          name: '',
          email: '',
          subject: 'پیشنهاد',
          message: ''
        });
        swal({
          title: "با موفقیت نظر شما ثبت شد",
          icon: "success",
        })
      } else {
        setLoadingSub(false)
        swal({
          title: "ارسال نظرات شما به مشکل خورد...",
          icon: "error",
          buttons: "تلاش مجدد",
        })
      }
    } else {
      setLoadingSub(false)
      swal({
        title: "لطفا برای ثبت نظر ابتدا وارد شوید",
        icon: "error",
        buttons: "صفحه ورود",
      }).then((value) => {
        navigate("/login");
      });
    }
  }

  const getAllComments = async () => {
    const resComments = await fetch(`${authContext.baseUrl}/comments`);
    resComments.json().then(comment => {
      const commentsData = comment.filter(comment => comment.status == 'approved').reverse().slice(0, 6)
      setComments(commentsData);
    })
  }

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
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
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

        {/* Contact Form & Map */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto lg:w-[80%] w-[90%]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <Card className="p-8 dark:bg-gray-700">
                <CardHeader className="text-center pb-6 bg-transparent shadow-none">
                  <Typography variant="h4" className="lalezar dark:text-white">
                    فرم تماس
                  </Typography>
                  <Typography className="text-gray-600 dark:text-gray-300 mt-2">
                    پیام خود را برای ما ارسال کنید
                  </Typography>
                </CardHeader>
                <CardBody>
                  <form className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Typography variant="small" className="mb-2 text-right font-medium text-gray-900 dark:text-gray-200">
                          نام و نام خانوادگی
                        </Typography>
                        <Input
                          color="gray"
                          size="lg"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="dark:text-white"
                        />
                      </div>
                      <div>
                        <Typography variant="small" className="mb-2 text-right font-medium text-gray-900 dark:text-gray-200">
                          ایمیل
                        </Typography>
                        <Input
                          color="gray"
                          size="lg"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="dark:text-white"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Typography variant="small" className="mb-2 text-right font-medium text-gray-900 dark:text-gray-200">
                        موضوع
                      </Typography>
                      <Select 
                        label="" 
                        value={formData.subject}
                        onChange={(val) => setFormData(prev => ({ ...prev, subject: val }))}
                      >
                        <Option value="گزارش مشکل">گزارش مشکل</Option>
                        <Option value="درخواست ویژگی جدید">درخواست ویژگی جدید</Option>
                        <Option value="سوال">سوال</Option>
                        <Option value="بازخورد">بازخورد</Option>
                        <Option value="پیشنهاد">پیشنهاد</Option>
                        <Option value="انتقاد">انتقاد</Option>
                      </Select>
                    </div>
                    
                    <div>
                      <Typography variant="small" className="mb-2 text-right font-medium text-gray-900 dark:text-gray-200">
                        متن پیام
                      </Typography>
                      <Textarea
                        rows={6}
                        color="gray"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="dark:text-white"
                      />
                    </div>
                    
                    <Button 
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600" 
                      onClick={CommentHandler}
                      disabled={loadingSub}
                    >
                      {loadingSub ? <Spinner className="inline h-4 w-4" /> : ''} ارسال پیام
                    </Button>
                  </form>
                </CardBody>
              </Card>

              {/* Map */}
              <Card className="h-full dark:bg-gray-700">
                <CardBody className="p-0">
                  <img
                    src="https://i.redd.it/0uermbt9q8b61.jpg"
                    alt="نقشه موقعیت"
                    className="w-full h-full min-h-[500px] rounded-lg object-cover"
                  />
                </CardBody>
              </Card>
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        {comments.length > 0 && (
          <section className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto lg:w-[80%] w-[90%]">
              <Typography variant="h3" className="text-center mb-12 lalezar dark:text-white">
                نظرات مشتریان
              </Typography>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {comments.map((comment, index) => (
                  <Card key={index} className="p-6 hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800">
                    <CardHeader className="flex items-center gap-4 pb-4 bg-transparent shadow-none">
                      <Avatar
                        src="/img/1.jpg"
                        alt="customer"
                        size="sm"
                      />
                      <div>
                        <Typography variant="h6" className="dark:text-white">
                          {comment.subject}
                        </Typography>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon key={i} />
                          ))}
                        </div>
                      </div>
                    </CardHeader>
                    <CardBody className="pt-0">
                      <Typography className="text-gray-700 dark:text-gray-300">
                        {comment.content}
                      </Typography>
                      <Typography variant="small" className="text-gray-500 dark:text-gray-400 mt-2">
                        {authContext.calcuteRelativeTimeDifference(comment.created_at)}
                      </Typography>
                    </CardBody>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Contact;