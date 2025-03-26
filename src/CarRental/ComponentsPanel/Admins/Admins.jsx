import React, { useEffect, useContext, useState } from 'react';
import AuthContext from "../../context/authContext";
import swal from "sweetalert";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Card, Typography, Spinner, Button, Input, Select, Option } from "@material-tailwind/react";

const TABLE_HEAD = ["نام", "نام خانوادگی", "نام کاربری", "ایمیل", " نقش", "وضعیت", "کد ملی", "جنسیت", "شماره تلفن", "رمز عبور", ""];

const TABLE_ROWS = [
    {
        name: "John Michael",
        job: "Manager",
        date: "23/04/18",
    },
    {
        name: "Alexa Liras",
        job: "Developer",
        date: "23/04/18",
    },
    {
        name: "Laurent Perrier",
        job: "Executive",
        date: "19/09/17",
    },
    {
        name: "Michael Levi",
        job: "Developer",
        date: "24/12/08",
    },
    {
        name: "Richard Gran",
        job: "Manager",
        date: "04/10/21",
    },
];

const Admins = () => {

    const authContext = useContext(AuthContext)
    const [adminsData, setAdminsData] = useState([])
    const [loaderAdmin, setLoaderAdmin] = useState(false)
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name_prefix: null,
        first_name: "",
        middle_name: null,
        last_name: "",
        name_suffix: null,
        username: "",
        email: "",
        role: "",
        status: "",
        national_id: "",
        gender: "",
        birthday: "",
        phone: 0,
        address: "",
        password: "",
    });




    useEffect(() => {
        getAllAdmins()
    }, [])

    const getAllAdmins = async () => {
        // const response = await fetch(`${authContext.baseUrl}/admins`);

        // const adminsRes = await response.json();

        // console.log(adminsRes);


        // if (response.status === 200) {
        //     setLoaderAdmin(false)
        //     setAdminsData(adminsRes)
        // }
        console.log("admin");

    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const response = await fetch(`${authContext.baseUrl}/admins`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify(formData),
        });



        if (response.status === 200) {
            response.json().then(dataLogin => {
                setLoading(false);
                console.log(dataLogin);


                swal({
                    title: "با موفقیت ادمین اضافه شد",
                    icon: "success",
                    buttons: "باشه",
                }).then((value) => {
                    getAllAdmins()
                });

            });

        } else {
            setLoading(false)
            swal({
                title: "متاسفانه در ارسال اطلاعات به مشکل خوردیم",
                icon: "error",
                buttons: "تلاش مجدد",
            })
        }
    };

    return (
        <>
            {
                loaderAdmin ? (<Spinner className="h-8 w-8 mx-auto mt-16" />) : (
                    <div className="container">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-xl mb-16 mx-auto p-6 bg-white shadow-md rounded-md">
                            <Typography variant="h5" className="text-center text-gray-900 font-bold mb-4">
                                ثبت اطلاعات کاربر
                            </Typography>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Typography variant="small" className="mb-2 text-right font-medium text-gray-900">
                                        نام
                                    </Typography>
                                    <Input color="gray" size="lg" name="first_name" value={formData.first_name} onChange={handleChange} />
                                </div>
                                <div>
                                    <Typography variant="small" className="mb-2 text-right font-medium text-gray-900">
                                        نام خانوادگی
                                    </Typography>
                                    <Input color="gray" size="lg" name="last_name" value={formData.last_name} onChange={handleChange} />
                                </div>
                            </div>

                            <div>
                                <Typography variant="small" className="mb-2 text-right font-medium text-gray-900">
                                    نام کاربری
                                </Typography>
                                <Input color="gray" size="lg" name="username" value={formData.username} onChange={handleChange} />
                            </div>

                            <div>
                                <Typography variant="small" className="mb-2 text-right font-medium text-gray-900">
                                    ایمیل
                                </Typography>
                                <Input type="email" color="gray" size="lg" name="email" value={formData.email} onChange={handleChange} />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Typography variant="small" className="mb-2 text-right font-medium text-gray-900">
                                        نقش
                                    </Typography>
                                    <Select name="role" value={formData.role} onChange={(val) => setFormData({ ...formData, role: val })}>
                                        <Option value="SuperAdmin">مدیر کل</Option>
                                        <Option value="Admin">مدیر</Option>
                                    </Select>
                                </div>
                                <div>
                                    <Typography variant="small" className="mb-2 text-right font-medium text-gray-900">
                                        وضعیت
                                    </Typography>
                                    <Select name="status" value={formData.status} onChange={(val) => setFormData({ ...formData, status: val })}>
                                        <Option value="فعال">فعال</Option>
                                        <Option value="غیرفعال">غیرفعال</Option>
                                    </Select>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Typography variant="small" className="mb-2 text-right font-medium text-gray-900">
                                        کد ملی
                                    </Typography>
                                    <Input color="gray" size="lg" name="national_id" value={formData.national_id} onChange={handleChange} />
                                </div>
                                <div>
                                    <Typography variant="small" className="mb-2 text-right font-medium text-gray-900">
                                        جنسیت
                                    </Typography>
                                    <Select name="gender" value={formData.gender} onChange={(val) => setFormData({ ...formData, gender: val })}>
                                        <Option value="مرد">مرد</Option>
                                        <Option value="زن">زن</Option>
                                        <Option value="سایر">سایر</Option>
                                    </Select>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Typography variant="small" className="mb-2 text-right font-medium text-gray-900">
                                        تاریخ تولد
                                    </Typography>
                                    <Input type="date" color="gray" size="lg" name="birthday" value={formData.birthday} onChange={handleChange} />
                                </div>
                                <div>
                                    <Typography variant="small" className="mb-2 text-right font-medium text-gray-900">
                                        شماره تلفن
                                    </Typography>
                                    <Input type="number" color="gray" size="lg" name="phone" value={formData.phone} onChange={handleChange} />
                                </div>
                            </div>

                            <div>
                                <Typography variant="small" className="mb-2 text-right font-medium text-gray-900">
                                    آدرس
                                </Typography>
                                <Input color="gray" size="lg" name="address" value={formData.address} onChange={handleChange} />
                            </div>

                            <div>
                                <Typography variant="small" className="mb-2 text-right font-medium text-gray-900">
                                    رمز عبور
                                </Typography>
                                <Input type="password" color="gray" size="lg" name="password" value={formData.password} onChange={handleChange} />
                            </div>

                            <Button type="submit" className="w-full bg-blue-gray-900 text-white">
                                {loading ? <Spinner className="inline h-4 w-4" /> : "ثبت اطلاعات"}
                            </Button>
                        </form>
                        <Card className="h-full w-full overflow-scroll">
                            <table className="w-full min-w-max table-auto text-right">
                                <thead>
                                    <tr>
                                        {TABLE_HEAD.map((head) => (
                                            <th
                                                key={head}
                                                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                                            >
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal leading-none opacity-70"
                                                >
                                                    {head}
                                                </Typography>
                                            </th>
                                        ))
                                        }
                                    </tr >
                                </thead >
                                <tbody>
                                    {adminsData.map((admin, index) => {
                                        const isLast = index === TABLE_ROWS.length - 1;
                                        const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                                        return (
                                            <tr key={admin.id}>
                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {admin.first_name}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {admin.last_name}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {admin.role}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {admin.status}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {admin.national_id}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {admin.gender}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {admin.phone}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {admin.password}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Typography
                                                        as="a"
                                                        href="#"
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-medium"
                                                    >
                                                        <button className='p-2 ml-2 pl-3 rounded-full bg-blue-gray-900 text-white text-xl'><FaEdit /></button>
                                                        <button className='p-2 rounded-full bg-blue-gray-900 text-white text-xl'><MdDelete /></button>
                                                    </Typography>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>

                            </table >
                        </Card >
                    </div>
                )
            }
        </>
    );
}

export default Admins;