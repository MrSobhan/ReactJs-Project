import { React, useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import Header from "../home/header/Header";
import Alert from '@mui/material/Alert';
import Card from '@mui/material/Card';
import Footer from '../home/main/footer'
import Table from 'react-bootstrap/Table'

import './Cart.css'


const Cart = () => {

    const [rows, setRows] = useState(() => {
        let allData = localStorage.getItem('Cart')
        return allData ? JSON.parse(allData) : []
    });

    let isCart = (rows.length == 0) ? false : true
    let priceAllProduct = 0

    if (isCart) {
        rows.forEach(e => {
            priceAllProduct += Number(e.course.price)
        });
    }


    const DelCourseHandel = (id) => {
        let newCart = rows.filter((cart) => cart.id != id)
        localStorage.setItem('Cart', JSON.stringify(newCart))
        setRows(newCart)
    }





    return (
        <>
            <Header />

            {
                isCart ? (<Container className="py-5 text-center">
                    <p className="mb-4 fs-1 primery moraba">سبد خرید</p>

                    {/* Code Cart */}
                    <Row>
                        <Col xs="12" lg="8" >

                            <Table striped bordered hover size="lg">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>نام محصولات</th>
                                        <th>قیمت</th>
                                        <th>وضعیت</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rows.map((cart, index) => (



                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>
                                                <img src={cart.course.img} alt="" className="img-fluid round ms-3 d-none d-lg-inline imgCartProduct" width={100} />
                                                {cart.course.name}
                                            </td>
                                            <td>{cart.course.price == 'free' ? 'رایگان' : cart.course.price}</td>
                                            <td><i className="bi bi-trash3 text-danger" onClick={() => DelCourseHandel(cart.id)}></i></td>
                                        </tr>

                                    ))}

                                </tbody>
                            </Table>

                        </Col>
                        <Col xs="12" lg="4" >
                            <Card className="p-4 shadow round">
                                <Row>
                                    <Col>
                                        <p className="text-end fs-6">مبلغ محصولات</p>
                                    </Col>
                                    <Col>
                                        <p className="text-start fs-6">{priceAllProduct} <sup>تومان</sup></p>
                                    </Col>
                                </Row>
                                <hr className="w-75 mx-auto my-3" />
                                <Row>
                                    <Col>
                                        <p className="text-end fs-6">هزینه حمل و نقل</p>
                                    </Col>
                                    <Col>
                                        <p className="text-start fs-6">100000 <sup>تومان</sup></p>
                                    </Col>
                                </Row>
                                <hr className="w-75 mx-auto my-3" />
                                <Row>
                                    <Col>
                                        <p className="text-end fs-6">مبلغ کل</p>
                                    </Col>
                                    <Col>
                                        <p className="text-start fs-6">600000 <sup>تومان</sup></p>
                                    </Col>
                                </Row>
                                <div className="btnAll p-2 round mt-4">تسویه حساب و پرداخت</div>
                            </Card>
                        </Col>
                    </Row>

                </Container>)
                    : (<Container><Alert severity="warning" className="dana my-5 round">در سبد خرید شما هیچ دوره ای ثبت نشده است!</Alert></Container>)
            }

            <Footer />

        </>
    );
}

export default Cart;