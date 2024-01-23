import React from "react";
import { Category, CategoryCourse } from "../../data";

import ButtonMa from "@mui/material/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Divider from "@mui/material/Divider";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "./main.css";

export default function Content() {
  return (
    <Container className="py-2">
      {/* <Category /> */}
      <Row className="d-flex align-items-center">
        <Col>
          <h4 className="moraba">دسته بندی دوره ها</h4>
        </Col>
        <Col>
          <ButtonMa variant="text" className="dana d-flex gap-2 me-auto">
            فهرست کامل <i class="bi bi-arrow-left mt-1"></i>
          </ButtonMa>
        </Col>
      </Row>

      <Row className="gap-1 gy-3 py-3">
        {Category.map((data) => (
          <Col
            key={data.id}
            className="d-flex align-items-center justify-content-center"
          >
            <ButtonMa
              variant="outlined"
              color="inherit"
              className="moraba d-flex gap-1 round btnCategory w-100"
            >
              <i class={`${data.icon} mt-1`}></i> {data.name}
            </ButtonMa>
          </Col>
        ))}
      </Row>

      {/* <CategoryCourse /> */}
      <Row className="d-flex align-items-center mt-4">
        <Col>
          <h4 className="moraba">آموزش‌های پرمخاطب</h4>
        </Col>
        <Col>
          <ButtonMa variant="text" className="dana d-flex gap-2 me-auto">
            فهرست کامل <i class="bi bi-arrow-left mt-1"></i>
          </ButtonMa>
        </Col>
      </Row>

      <Row className="gap-1 gy-3 py-1 d-none d-md-flex">
        {CategoryCourse.map((data, index) => (
          <Col className="d-flex align-items-center justify-content-center p-0 col-category">
            <ButtonMa
              variant={index == 0 ? "contained" : "text"}
              color={index == 0 ? "warning" : "inherit"}
              className="dana-blod round"
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
            865: {
              slidesPerView: 3,
            },
            1000:{
              slidesPerView:4
            },
            1500:{
              slidesPerView:5
            },
          }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="py-4 px-1"
      >
        <SwiperSlide className="swiperSlider">
          <Card sx={{ maxWidth: 280 }} className="shadow round p-3">
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="/img/7.jpg"
              className="round shadow"
            />
            <CardContent className="p-0 mt-3">
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards
              </Typography>
              <Divider variant="middle" component="div" className="my-2" />

              <Row className="d-flex align-items-end mt-1 w-100">
                <Col>
                  <i class="bi bi-heart fs-5 mt-2"></i>
                </Col>
                <Col>
                  <p className="dana w-100 me-3 mt-2 mb-0">600 هزار تومان</p>
                </Col>
              </Row>
            </CardContent>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="swiperSlider">
          <Card sx={{ maxWidth: 280 }} className="shadow round p-3">
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="/img/7.jpg"
              className="round shadow"
            />
            <CardContent className="p-0 mt-3">
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards
              </Typography>
              <Divider variant="middle" component="div" className="my-2" />

              <Row className="d-flex align-items-end mt-1 w-100">
                <Col>
                  <i class="bi bi-heart fs-5 mt-2"></i>
                </Col>
                <Col>
                  <p className="dana w-100 me-3 mt-2 mb-0">600 هزار تومان</p>
                </Col>
              </Row>
            </CardContent>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="swiperSlider">
          <Card sx={{ maxWidth: 280 }} className="shadow round p-3">
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="/img/7.jpg"
              className="round shadow"
            />
            <CardContent className="p-0 mt-3">
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards
              </Typography>
              <Divider variant="middle" component="div" className="my-2" />

              <Row className="d-flex align-items-end mt-1 w-100">
                <Col>
                  <i class="bi bi-heart fs-5 mt-2"></i>
                </Col>
                <Col>
                  <p className="dana w-100 me-3 mt-2 mb-0">600 هزار تومان</p>
                </Col>
              </Row>
            </CardContent>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="swiperSlider">
          <Card sx={{ maxWidth: 280 }} className="shadow round p-3">
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="/img/7.jpg"
              className="round shadow"
            />
            <CardContent className="p-0 mt-3">
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards
              </Typography>
              <Divider variant="middle" component="div" className="my-2" />

              <Row className="d-flex align-items-end mt-1 w-100">
                <Col>
                  <i class="bi bi-heart fs-5 mt-2"></i>
                </Col>
                <Col>
                  <p className="dana w-100 me-3 mt-2 mb-0">600 هزار تومان</p>
                </Col>
              </Row>
            </CardContent>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="swiperSlider">
          <Card sx={{ maxWidth: 280 }} className="shadow round p-3">
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="/img/7.jpg"
              className="round shadow"
            />
            <CardContent className="p-0 mt-3">
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards
              </Typography>
              <Divider variant="middle" component="div" className="my-2" />

              <Row className="d-flex align-items-end mt-1 w-100">
                <Col>
                  <i class="bi bi-heart fs-5 mt-2"></i>
                </Col>
                <Col>
                  <p className="dana w-100 me-3 mt-2 mb-0">600 هزار تومان</p>
                </Col>
              </Row>
            </CardContent>
          </Card>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
