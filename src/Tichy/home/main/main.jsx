import { React, useState } from "react";
import {
  Category,
  CategoryCourse,
  CourseList,
  LiveCourseList,
} from "../../data";

import ButtonMa from "@mui/material/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";

import { NavLink } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import Footer from './footer'
// Import Swiper styles
import "swiper/css";

import "./main.css";

import "../content/content.css";
// import { fastObjectShallowCompare } from "@mui/x-data-grid/utils/fastObjectShallowCompare";
// import { LoginSharp } from "@mui/icons-material";

export default function Content() {
  return (
    <>
      <Container className="py-2">
        {/* <Category /> */}
        <Row className="d-flex align-items-center">
          <Col>
            <h4 className="moraba">دسته بندی دوره ها</h4>
          </Col>
          <Col>
            <ButtonMa variant="text" className="dana d-flex gap-2 me-auto">
              فهرست کامل <i className="bi bi-arrow-left mt-1"></i>
            </ButtonMa>
          </Col>
        </Row>

        <Row className="gap-1 gy-3 py-3">
          {Category.map((data) => (
            <Col
              key={data.id}
              className={`d-flex align-items-center justify-content-center ${
                data.id == 5 ? "d-none d-lg-flex" : ""
              }`}
            >
              <ButtonMa
                variant="outlined"
                color="inherit"
                className="moraba d-flex gap-1 round btnCategory w-100"
              >
                <i className={`${data.icon} mt-1`}></i> {data.name}
              </ButtonMa>
            </Col>
          ))}
        </Row>

        {/* <CategoryCourse /> */}
        <Row className="d-flex align-items-center mt-4">
          <Col xs="7" md="6">
            <h4 className="moraba">آموزش‌های پرمخاطب</h4>
          </Col>
          <Col>
            <ButtonMa variant="text" className="dana d-flex gap-2 me-auto">
              فهرست کامل <i className="bi bi-arrow-left mt-1"></i>
            </ButtonMa>
          </Col>
        </Row>

        <Row className="gap-1 gy-3 py-1 d-none d-md-flex">
          {CategoryCourse.map((data, index) => (
            <Col className="d-flex align-items-center justify-content-center p-0 col-category">
              <ButtonMa
                variant={index === 0 ? "contained" : "text"}
                color="inherit"
                className={`dana-blod shadow-none round ${
                  index === 0 ? "btnAll" : ""
                }`}
              >
                {data}
              </ButtonMa>
            </Col>
          ))}
        </Row>

        <Swiper
          spaceBetween={10}
          slidesPerView={4}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 2,
            },
            865: {
              slidesPerView: 3,
            },
            1000: {
              slidesPerView: 4,
            },
            1500: {
              slidesPerView: 5,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="py-4 px-1"
        >
          {CourseList.map((data) => (
            <SwiperSlide key={data.id} className="swiperSlider">
              <Card sx={{ maxWidth: 280 }} className="shadow round p-3">
                <NavLink to={`/product/${data.id}`}>

                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={data.img}
                  className="round shadow imgCourse"
                />
                </NavLink>
                <CardContent className="p-0 mt-3">
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    className="dana"
                  >
                    {data.name.slice(0, 30)}...
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="moraba"
                  >
                    علیرضا آذری فرد
                  </Typography>
                  <Divider variant="middle" component="div" className="my-2" />

                  <Row className="d-flex align-items-end justify-content-evenly mt-1 mx-auto w-100">
                    <Col>
                      <i className="bi fs-5 mt-2 bi-heart"></i>
                    </Col>
                    <Col>
                      <p className="dana me-3 mt-2 mb-0 text-price">
                        {data.price == "free"
                          ? "رایگان"
                          : data.price + " تومان"}
                      </p>
                    </Col>
                  </Row>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <LiveCourse /> */}
        <Row className="d-flex align-items-center mt-4">
          <Col xs="7" md="6">
            <h4 className="moraba">لایو های در حال برگزاری</h4>
          </Col>
          <Col>
            <ButtonMa variant="text" className="dana d-flex gap-2 me-auto">
              فهرست کامل <i className="bi bi-arrow-left mt-1"></i>
            </ButtonMa>
          </Col>
        </Row>

        <Swiper
          spaceBetween={10}
          slidesPerView={4}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 2,
            },
            865: {
              slidesPerView: 3,
            },
            1000: {
              slidesPerView: 4,
            },
            1500: {
              slidesPerView: 5,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="py-4 px-1"
        >
          {LiveCourseList.map((data) => (
            <SwiperSlide key={data.id} className="swiperSlider">
              <Card sx={{ maxWidth: 280 }} className="shadow round p-3">
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={data.img}
                  className="round shadow imgCourse"
                />
                <CardContent className="p-0 mt-3">
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    className="dana"
                  >
                    {data.name.slice(0, 30)}...
                  </Typography>
                  <Row className="mx-auto w-100 align-items-center justify-content-center">
                    <Col xs="9">
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        className="moraba"
                      >
                        {data.writer}
                      </Typography>
                    </Col>
                    <Col xs="3" className="btnVoice ms-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <rect width="24" height="24" rx="12" fill="#F59D40" />
                        <path
                          d="M6.85712 9.85718V14.1429"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.42859 8.42859V15.5714"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 7V17"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14.5714 8.42859V15.5714"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M17.1429 9.85718V14.1429"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </Col>
                  </Row>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <TeacherCourse /> */}
        <Row className="d-flex align-items-center mt-4">
          <Col xs="7" md="6">
            <h4 className="moraba">مدرس های برتر</h4>
          </Col>
          <Col>
            <ButtonMa variant="text" className="dana d-flex gap-2 me-auto">
              فهرست کامل <i className="bi bi-arrow-left mt-1"></i>
            </ButtonMa>
          </Col>
        </Row>

        <Swiper
          spaceBetween={10}
          slidesPerView={4}
          breakpoints={{
            0: {
              width: 280,
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 2,
            },
            865: {
              width: 280,
              slidesPerView: 2,
            },
            1000: {
              width: 1080,
              slidesPerView: 4,
            },
            1500: {
              width: 1480,
              slidesPerView: 5,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="py-4 px-1"
        >
          {LiveCourseList.map((data) => (
            <SwiperSlide key={data.id} className="swiperSlider">
              <Card style={{ maxWidth: 280 }} className="shadow round p-3">
                <CardContent className="p-0">
                  <Row>
                    <Col xs="3">
                      <Image
                        src={data.img}
                        rounded
                        className="shadow imgTeacher"
                      />
                    </Col>
                    <Col>
                      <Row>
                        <Col xs="9">
                          <p className="fs-6">جواد خیابانی</p>
                          <p className="fs-7">برنامه نویسی</p>
                        </Col>
                        <Col>
                          <div className="rounded shadow bg-primary text-light fs-7 text-center">
                            4.9
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <FreeCourse /> */}
        <Row className="d-flex align-items-center mt-4">
          <Col xs="7" md="6">
            <h4 className="moraba">آموزش‌های رایگان</h4>
          </Col>
          <Col>
            <ButtonMa variant="text" className="dana d-flex gap-2 me-auto">
              فهرست کامل <i className="bi bi-arrow-left mt-1"></i>
            </ButtonMa>
          </Col>
        </Row>

        <Row className="gap-1 gy-3 py-1 d-none d-md-flex">
          {CategoryCourse.map((data, index) => (
            <Col className="d-flex align-items-center justify-content-center p-0 col-category">
              <ButtonMa
                variant={index === 0 ? "contained" : "text"}
                color="inherit"
                className={`dana-blod shadow-none round ${
                  index === 0 ? "btnAll" : ""
                }`}
              >
                {data}
              </ButtonMa>
            </Col>
          ))}
        </Row>

        <Swiper
          spaceBetween={10}
          slidesPerView={4}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 2,
            },
            865: {
              slidesPerView: 3,
            },
            1000: {
              slidesPerView: 4,
            },
            1500: {
              slidesPerView: 5,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="py-4 px-1 mb-4"
        >
          {CourseList.map((data) => (
            <SwiperSlide key={data.id} className="swiperSlider">
              <Card sx={{ maxWidth: 280 }} className="shadow round p-3">
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={data.img}
                  className="round shadow imgCourse"
                />
                <CardContent className="p-0 mt-3">
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    className="dana"
                  >
                    {data.name.slice(0, 30)}...
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="moraba"
                  >
                    علیرضا آذری فرد
                  </Typography>
                  <Divider variant="middle" component="div" className="my-2" />

                  <Row className="d-flex align-items-end justify-content-evenly mt-1 mx-auto w-100">
                    <Col>
                      <i className="bi fs-5 mt-2 bi-heart"></i>
                    </Col>
                    <Col>
                      <p className="dana me-3 mt-2 mb-0 text-price">
                        {data.price == "free"
                          ? "رایگان"
                          : data.price + " تومان"}
                      </p>
                    </Col>
                  </Row>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ! --------------------------------------------- */}

        <Row className="content-bg-1 p-5 my-5 round-5">
          <Col lg="6" className="content">
            <div className="line-info"></div>
            <p className="fs-1 moraba mt-2">
              تدریس در <span className="primery">تیچی</span>
            </p>
            <p className="fs-6 w-100 dana my-3">
              برای همکاری آموزشی، تدریس و ارایه آموزش در تیچی و پیوستن به آن به
              عنوان عضو هیات علمی، به لینک زیر مراجعه کنید و ارایه آموزش در تیچی
              و پیوستن به آن به عنوان عضو هیات علمی، به لینک زیر مراجعه کنید.
            </p>
            <ButtonMa
              variant="outlined"
              color="warning"
              className="moraba d-flex gap-2 round btnInfo"
            >
              <i className="bi bi-info-circle"></i> اطلاعات بیشتر
            </ButtonMa>
          </Col>

          <Col lg="6">
            <Image
              src="./img/untitled (2).png"
              fluid
              className="d-none d-lg-block"
            />
          </Col>
        </Row>
        <Row className="content-bg-2 p-5 my-5 round-5">
          <Col lg="6">
            <Image
              src="./img/untitled (3).png"
              fluid
              className="d-none d-lg-block"
            />
          </Col>
          <Col lg="6" className="content">
            <div className="line"></div>
            <p className="fs-1 moraba mt-2">
              آموزش سازمانی <span className="Secondary">تیچی</span>
            </p>
            <p className="fs-6 w-100 dana my-3">
              سازمانتان را به بزرگ‌ترین کتابخانه آموزش‌های ویدئویی تجهیز و
              دسترسی به هزاران عنوان آموزش از مدرسین باتجربه را برای همکارانتان
              فراهم کنید باتجربه را برای همکارانتان فراهم کنید.
            </p>
            <ButtonMa
              variant="outlined"
              color="info"
              className="moraba d-flex gap-2 round btnInfo"
            >
              <i className="bi bi-info-circle"></i> اطلاعات بیشتر
            </ButtonMa>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  );
}
