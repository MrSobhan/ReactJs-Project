import React, { useEffect, useState, useContext } from 'react';
import AuthContext from "../../context/authContext";
import swal from "sweetalert";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Card, Typography, Spinner, Button, Input, Select, Option } from "@material-tailwind/react";

const TABLE_HEAD = ["نام", "نام خانوادگی", "نام کاربری", "ایمیل", "کد ملی", "جنسیت", "شماره تلفن", "آدرس", "رمز عبور", ""];

const Customers = () => {
    const authContext = useContext(AuthContext);
    const [customersData, setCustomersData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loaderCustomers, setLoaderCustomers] = useState(false);

    const [formData, setFormData] = useState({
        name_prefix: null,
        first_name: "",
        middle_name: null,
        last_name: "",
        name_suffix: null,
        gender: "مرد",
        birthday: "",
        national_id: "",
        phone: 0,
        username: "",
        email: "",
        address: "",
        password: ""
    });

    useEffect(() => {
        getAllCustomers();
    }, []);

    const getAllCustomers = async () => {
        // setLoaderCustomers(true)
        const response = await fetch(`${authContext.baseUrl}/customers`);

        const customerRes = await response.json();

        console.log(customerRes);


        if (response.status === 200) {
            setLoaderCustomers(false)
            setCustomersData(customerRes)
        }
        console.log("Fetching customers...");
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const response = await fetch(`${authContext.baseUrl}/customers`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify(formData),
        });

        if (response.status === 200) {
            response.json().then(data => {
                setLoading(false);
                swal({
                    title: "مشتری با موفقیت اضافه شد",
                    icon: "success",
                    buttons: "باشه",
                }).then(() => {
                    getAllCustomers();
                });
            });
        } else {
            setLoading(false);
            swal({
                title: "مشکلی در ارسال اطلاعات پیش آمد",
                icon: "error",
                buttons: "تلاش مجدد",
            });
        }
    };

    const handleDelete = async (id) => {
        swal({
            title: "آیا مطمئن هستید؟",
            text: "این عملیات قابل بازگشت نیست!",
            icon: "warning",
            buttons: ["لغو", "حذف"],
            dangerMode: true,
        }).then(async (willDelete) => {
            if (willDelete) {
                const response = await fetch(`${authContext.baseUrl}/customers/${id}`, {
                    method: "DELETE",
                    credentials: "include",
                });

                if (response.status === 200) {
                    swal("مشتری با موفقیت حذف شد!", { icon: "success" });
                    getAllCustomers();
                } else {
                    swal("خطا در حذف", { icon: "error" });
                }
            }
        });
    };

    const handleEdit = (vehicles) => {
        console.log(vehicles);
        
    };

    return (
        <>
            {
                loaderCustomers ? (<Spinner className="h-8 w-8 mx-auto mt-16" />) : (
                    <div className="container mx-auto">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-xl mb-16 mx-auto p-6 bg-white shadow-lg rounded-md">
                            <Typography variant="h5" className="text-center text-gray-900 font-bold mb-4">
                                ثبت اطلاعات مشتری
                            </Typography>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Typography variant="small" className="mb-2 text-right font-medium text-gray-900">نام</Typography>
                                    <Input color="gray" size="lg" name="first_name" value={formData.first_name} onChange={handleChange} />
                                </div>
                                <div>
                                    <Typography variant="small" className="mb-2 text-right font-medium text-gray-900">نام خانوادگی</Typography>
                                    <Input color="gray" size="lg" name="last_name" value={formData.last_name} onChange={handleChange} />
                                </div>
                            </div>

                            <div>
                                <Typography variant="small" className="mb-2 text-right font-medium text-gray-900">نام کاربری</Typography>
                                <Input color="gray" size="lg" name="username" value={formData.username} onChange={handleChange} />
                            </div>

                            <div>
                                <Typography variant="small" className="mb-2 text-right font-medium text-gray-900">ایمیل</Typography>
                                <Input type="email" color="gray" size="lg" name="email" value={formData.email} onChange={handleChange} />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Typography variant="small" className="mb-2 text-right font-medium text-gray-900">کد ملی</Typography>
                                    <Input color="gray" size="lg" name="national_id" value={formData.national_id} onChange={handleChange} />
                                </div>
                                <div>
                                    <Typography variant="small" className="mb-2 text-right font-medium text-gray-900">جنسیت</Typography>
                                    <Select name="gender" value={formData.gender} onChange={(val) => setFormData({ ...formData, gender: val })}>
                                        <Option value="مرد">مرد</Option>
                                        <Option value="زن">زن</Option>
                                        <Option value="سایر">سایر</Option>
                                    </Select>
                                </div>
                            </div>

                            <div>
                                <Typography variant="small" className="mb-2 text-right font-medium text-gray-900">شماره تلفن</Typography>
                                <Input type="number" color="gray" size="lg" name="phone" value={formData.phone} onChange={handleChange} />
                            </div>

                            <div>
                                <Typography variant="small" className="mb-2 text-right font-medium text-gray-900">آدرس</Typography>
                                <Input color="gray" size="lg" name="address" value={formData.address} onChange={handleChange} />
                            </div>

                            <div>
                                <Typography variant="small" className="mb-2 text-right font-medium text-gray-900">رمز عبور</Typography>
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
                                            <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                                <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                                                    {head}
                                                </Typography>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {customersData.map((customer, index) => {
                                        const classes = "p-4 border-b border-blue-gray-50";

                                        return (
                                            <tr key={customer.id}>
                                                <td className={classes}>{customer.first_name}</td>
                                                <td className={classes}>{customer.last_name}</td>
                                                <td className={classes}>{customer.username}</td>
                                                <td className={classes}>{customer.email}</td>
                                                <td className={classes}>{customer.national_id}</td>
                                                <td className={classes}>{customer.gender}</td>
                                                <td className={classes}>{customer.phone}</td>
                                                <td className={classes}>{customer.address}</td>
                                                <td className={classes}>{customer.password}</td>
                                                <td className={classes}>
                                                    <button className='p-2 ml-2 pl-3 rounded-full bg-blue-gray-900 text-white text-xl'  onClick={() => handleEdit(customer)}><FaEdit /></button>
                                                    <button className='p-2 rounded-full bg-red-600 text-white text-xl' onClick={() => handleDelete(customer.id)}><MdDelete /></button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </Card>
                    </div>
                )
            }
        </>

    );
}

export default Customers;
