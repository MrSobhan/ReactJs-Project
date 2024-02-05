import { React, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { NavLink , useNavigate } from "react-router-dom";
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const changeEmail = (e) => {
        setEmail(e.target.value)
    }
    const changePass = (e) => {
        setPass(e.target.value)
    }

    let data = []
    let navigate = useNavigate()
    let isLogin = false

    const setUserLogin = () => {
        data = localStorage.getItem('Users') != null ? JSON.parse(localStorage.getItem('Users')) : []

        data.forEach(user => {
            if (user.email == email && user.pass == pass) {
                localStorage.setItem('LoginUser', true)
                localStorage.setItem('LoginUserName' , user.userName)
                console.log("Ture LoginUser :)");
                navigate('/')
                ClearForm()
                isLogin = !isLogin
            }
        });

        if(!isLogin){
            localStorage.setItem('LoginUser', false)
            console.log("False LoginUser :(");
        }
    }

    const ClearForm = () => {
        setEmail('')
        setPass('')
    }
    return (
        <div className='bodyForm'>
            <div className="contentForm shadow px-5 py-4 round">
                <Form>
                    <h2 className='text-center moraba'>ورود به <span className='primery'>تیچی</span></h2>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>ایمیل</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" value={email} onChange={changeEmail} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>رمز ورود</Form.Label>
                        <Form.Control type="password" value={pass} onChange={changePass} />
                    </Form.Group>
                </Form>
                <Button variant="light" type="button" className='btn w-100 btn-outline-warning mt-3' onClick={setUserLogin}>
                    ورود
                </Button>
                <NavLink to="/singin" style={{ color: "#000" }}>
                    <p className="fs-7 text-center mt-4">آیا شما در سایت ثبت نام نمرده اید؟</p>
                </NavLink>
            </div>
        </div>
    );
}

export default Login;