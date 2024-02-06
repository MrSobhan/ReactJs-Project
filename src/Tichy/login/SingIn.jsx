import { React, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { NavLink , useNavigate } from "react-router-dom";
import './Login.css'

const Singin = () => {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [phone, setPhone] = useState('')

    const changeUserName = (e) => {
        setUserName(e.target.value)
    }
    const changePhone = (e) => {
        setPhone(e.target.value)
    }
    const changeEmail = (e) => {
        setEmail(e.target.value)
    }
    const changePass = (e) => {
        setPass(e.target.value)
    }

    const regexEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    let data = []
    let navigate = useNavigate()

    const setUserSingin = () => {
        if (userName.length > 3 && pass.length >= 8 && phone.length == 11 && regexEmail.test(email)) {
            let _id = Math.floor(Math.random() * 100000)
            let obj = {
                id: _id,
                userName,
                email,
                pass,
                phone
            }
            data = localStorage.getItem('Users') != null ? JSON.parse(localStorage.getItem('Users')) : []
            data.push(obj)
            localStorage.setItem('Users' , JSON.stringify(data))
            localStorage.setItem('LoginUser' , true)
            localStorage.setItem('LoginUserName' , userName)
            console.log("Ture LoginUser :)");
            navigate('/')
            ClearForm()
        }else{
            localStorage.setItem('LoginUser' , false)
            console.log("False LoginUser :(");
        }
    }

    const ClearForm = ()=>{
        setUserName('')
        setPhone('')
        setEmail('')
        setPass('')
    }

    return (
        <div className='bodyForm'>
            <div className="contentForm shadow px-5 py-4 round">
                <Form>
                    <h2 className='text-center moraba mb-3'>عضویت در <span className='primery'>تیچی</span></h2>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>نام کاربری</Form.Label>
                        <Form.Control type="text" placeholder="سبحان موسی زاده" value={userName} onChange={changeUserName} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                        <Form.Label>شماره تلفن همراه</Form.Label>
                        <Form.Control type="text" placeholder="09129188263" value={phone} onChange={changePhone}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>ایمیل</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" value={email} onChange={changeEmail}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>رمز ورود</Form.Label>
                        <Form.Control type="password" value={pass} onChange={changePass}/>
                    </Form.Group>
                </Form>
                <Button variant="light" type="button" className='btn w-100 btn-outline-warning mt-3' onClick={setUserSingin}>
                    عضویت
                </Button>
                <NavLink to="/login" style={{ color: "#000" }}>
                    <p className="fs-7 text-center mt-4">آیا شما در سایت ثبت نام کرده اید؟</p>
                </NavLink>
            </div>
        </div>
    );
}

export default Singin;