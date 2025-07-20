import React, { useEffect, useState, useContext } from 'react';
import AuthContext from "../../context/authContext";
import swal from "sweetalert";
import { MdDelete } from "react-icons/md";
import { FaEdit, FaPlus, FaSearch } from "react-icons/fa";
import { Card, Typography, Spinner, Button, Input, Select, Option, Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";

const TABLE_HEAD = ["شناسه", "نام", "نام خانوادگی", "نام کاربری", "ایمیل", "کد ملی", "جنسیت", "شماره تلفن", "آدرس", "رمز عبور", ""];

const Customers = () => {
    const authContext = useContext(AuthContext);
    const [customersData, setCustomersData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loaderCustomers, setLoaderCustomers] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);
    const [idForUpdate, setIdForUpdate] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

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
        const response = await fetch(`${authContext.baseUrl}/customers`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "accept": "application/json",
                "Authorization": `Bearer ${authContext.user.access_token}`,
                "Authorization-Refresh": `Bearer ${authContext.user.refresh_token}`
            },
        });

        const customerRes = await response.json();



        if (response.status === 200) {
            setLoaderCustomers(false)
            setCustomersData(customerRes)
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: ["phone"].includes(name)
                ? Number(value) || 0
                : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        console.log(formData);


        if (isNaN(formData.phone)) {
            swal({
                title: "خطا در ورود اطلاعات",
                text: "شماره تلفن باید عدد باشند!",
                icon: "error",
                buttons: "باشه",
            });
            setLoading(false);
            return;
        }
        let response = null;

        if (isUpdate) {

            console.log("Update...");


            response = await fetch(`${authContext.baseUrl}/customers/${idForUpdate}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "accept": "application/json",
                    "Authorization": `Bearer ${authContext.user.access_token}`,
                    "Authorization-Refresh": `Bearer ${authContext.user.refresh_token}`
                },
                body: JSON.stringify(formData),
            });

        } else {

            response = await fetch(`${authContext.baseUrl}/customers`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "accept": "application/json"
                },
                body: JSON.stringify(formData),
            });
        }

        if (response.status === 200) {
            response.json().then(data => {
                setLoading(false);
                setIsUpdate(false);
                swal({
                    title: "مشتری با موفقیت اضافه شد",
                    icon: "success",
                    buttons: "باشه",
                }).then(() => {
                    getAllCustomers();
                    setFormData({
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
                    })
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
                    headers: {
                        "Content-Type": "application/json",
                        "accept": "application/json",
                        "Authorization": `Bearer ${authContext.user.access_token}`,
                        "Authorization-Refresh": `Bearer ${authContext.user.refresh_token}`
                    },
                });

                if (response.status === 200) {
                    swal({ title: "مشتری با موفقیت حذف شد!", icon: "success", buttons: "باشه", });
                    getAllCustomers();
                } else {
                    swal({ title: "خطا در حذف", icon: "error", buttons: "باشه", });
                }
            }
        });
    };

    const handleEdit = (customer) => {
        console.log(customer);


        setIsUpdate(true)

        setIdForUpdate(customer.id)

        setFormData({
            name_prefix: null,
            first_name: customer.first_name,
            middle_name: null,
            last_name: customer.last_name,
            name_suffix: null,
            gender: customer.gender,
            birthday: customer.birthday,
            national_id: customer.national_id,
            phone: customer.phone,
            username: customer.username,
            email: customer.email,
            address: customer.address
        })
        setOpenModal(true);
    };

    const handleOpenModal = () => {
        setIsUpdate(false);
        setFormData({
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
        setOpenModal(true);
    };

    const filteredCustomers = customersData.filter(customer =>
        customer.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            {
                loaderCustomers ? (<Spinner className="h-8 w-8 mx-auto mt-16" />) : (
                    <div className="container mx-auto">
                        
                        {/* Header with Add Button and Search */}
                        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                            <Typography variant="h4" className="lalezar">
                                مدیریت مشتریان
                            </Typography>
                            <div className="flex gap-4 items-center">
                                <div className="relative">
                                    <Input
                                        type="text"
                                        placeholder="جستجو..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="pl-10"
                                    />
                                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                </div>
                                <Button 
                                    onClick={handleOpenModal}
                                    className="flex items-center gap-2 bg-blue-gray-900"
                                >
                                    <FaPlus /> افزودن مشتری
                                </Button>
                            </div>
                        </div>

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
                                    {filteredCustomers.map((customer, index) => {
                                        const classes = "p-4 border-b border-blue-gray-50";

                                        return (
                                            <tr key={customer.id}>
                                                <td className={classes}>{customer.id}</td>
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
                                                    <button className='p-2 ml-2 pl-3 rounded-full bg-blue-gray-900 text-white text-xl' onClick={() => handleEdit(customer)}><FaEdit /></button>
                                                    <button className='p-2 rounded-full bg-blue-gray-900 text-white text-xl' onClick={() => handleDelete(customer.id)}><MdDelete /></button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </Card>
                        
                        {/* Modal for Add/Edit */}
                        <Dialog open={openModal} handler={() => setOpenModal(false)} size="lg">
                            <DialogHeader className="text-right">
                                {isUpdate ? "ویرایش مشتری" : "افزودن مشتری جدید"}
                            </DialogHeader>
                            <DialogBody className="max-h-[70vh] overflow-y-auto">
                                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                    
                                    <div>
                                        <Typography variant="small" className="mb-2 text-right font-medium text-gray-900">سال تولد</Typography>
                                        <Input type="text" color="gray" size="lg" name="birthday" value={formData.birthday} onChange={handleChange} />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                </form>
                            </DialogBody>
                            <DialogFooter className="flex gap-2">
                                <Button variant="text" color="red" onClick={() => setOpenModal(false)}>
                                    لغو
                                </Button>
                                <Button 
                                    onClick={handleSubmit} 
                                    className="bg-blue-gray-900"
                                    disabled={loading}
                                >
                                    {loading ? <Spinner className="inline h-4 w-4" /> : (isUpdate ? "ویرایش" : "افزودن")}
                                </Button>
                            </DialogFooter>
                        </Dialog>
                    </div>
                )
            }
        </>

    );
}

export default Customers;