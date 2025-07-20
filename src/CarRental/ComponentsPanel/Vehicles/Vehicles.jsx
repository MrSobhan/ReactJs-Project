import React, { useEffect, useContext, useState } from 'react';
import AuthContext from "../../context/authContext";

import { Card, Typography, Spinner, Select, Option, Button, Input, Textarea, Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";
import { MdDelete } from "react-icons/md";
import { FaEdit, FaPlus, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const TABLE_HEAD = ["برند", "مدل", "رنگ", "موقعیت", "پلاک", "مبلغ", "وضعیت", "سال ساخت", ""];


const Vehicles = () => {

    const navigate = useNavigate();
    const authContext = useContext(AuthContext)
    const [vehiclesData, setVehiclesData] = useState([])
    const [loaderVehicles, setLoaderVehicles] = useState(true)
    const [loading, setLoading] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);
    const [idForUpdate, setIdForUpdate] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const [formData, setFormData] = useState({
        local_image_address: "",
        plate_number: "",
        location: "تهران",
        brand: "تویوتا",
        model: "",
        year: 0,
        color: "",
        mileage: 0,
        status: "نو",
        hourly_rental_rate: 0,
        security_deposit: 0,
    });
    useEffect(() => {
        getAllVehicles()
    }, [])

    const carBrands = [
        "تویوتا", "فورد", "هوندا", "بی ام و", "مرسدس بنز", "آودی", "شورلت", "نیسان",
        "فولکس‌واگن", "هیوندای", "کیا", "سابارو", "مازدا", "ولوا", "لند روور", "جیپ",
        "پورشه", "فيات", "لکسوس", "دوج", "اکورا", "اینفینیتی", "جی ام سی", "اسمارت",
        "منی", "رنو", "پوژو", "سیتروئن", "سئات", "اسکودا", "مازراتی", "فراری",
        "لامبورگینی", "بوگاتی", "تسلا", "سوزوکی", "اوپل", "میتسوبیشی", "ایزوزو",
        "دایو", "ام‌جی", "گریت وال", "بی‌وای‌دی", "چری", "جیلی", "فیسکِر",
        "رولز رویس", "بنتلی", "استون مارتین", "آلفا رومئو", "لادا", "دایهاتسو",
        "کریسلر", "پانتیاک", "سیان"
    ];


    const getAllVehicles = async () => {
        const response = await fetch(`${authContext.baseUrl}/vehicles`);

        const vehiclesRes = await response.json();

        if (response.status === 200) {
            setLoaderVehicles(false)
            setVehiclesData(vehiclesRes)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: ["year", "mileage", "hourly_rental_rate", "security_deposit"].includes(name)
                ? Number(value) || 0
                : value,
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        let response = null

        if (isUpdate) {
            console.log("Updata...", formData, idForUpdate);

            response = await fetch(`${authContext.baseUrl}/vehicles/${idForUpdate}`, {
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
            console.log(formData);

            if (isNaN(formData.year) || isNaN(formData.mileage) || isNaN(formData.hourly_rental_rate) || isNaN(formData.security_deposit)) {
                swal({
                    title: "خطا در ورود اطلاعات",
                    text: "مقادیر سال، کارکرد، نرخ اجاره و ودیعه باید عدد باشند!",
                    icon: "error",
                    buttons: "باشه",
                });
                setLoading(false);
                return;
            }


            response = await fetch(`${authContext.baseUrl}/vehicles`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "accept": "application/json",
                    "Authorization": `Bearer ${authContext.user.access_token}`,
                    "Authorization-Refresh": `Bearer ${authContext.user.refresh_token}`
                },
                body: JSON.stringify(formData),
            });
        }





        if (response.status === 200) {
            response.json().then(dataLogin => {
                setLoading(false);
                setIsUpdate(false);
                console.log(dataLogin);


                swal({
                    title: "با موفقیت انجام شد",
                    icon: "success",
                    buttons: "باشه",
                }).then((value) => {
                    getAllVehicles()
                    setFormData({
                        local_image_address: "",
                        plate_number: "",
                        location: "",
                        brand: "",
                        model: "",
                        year: 0,
                        color: "",
                        mileage: 0,
                        status: "",
                        hourly_rental_rate: 0,
                        security_deposit: 0,
                    })
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

    const handleDelete = async (id) => {
        swal({
            title: "آیا مطمئن هستید؟",
            text: "این عملیات قابل بازگشت نیست!",
            icon: "warning",
            buttons: ["لغو", "حذف"],
            dangerMode: true,
        }).then(async (willDelete) => {
            if (willDelete) {
                const response = await fetch(`${authContext.baseUrl}/vehicles/${id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "accept": "application/json",
                        "Authorization": `Bearer ${authContext.user.access_token}`,
                        "Authorization-Refresh": `Bearer ${authContext.user.refresh_token}`
                    },
                });

                if (response.status === 200) {
                    swal({ title: "خودرو با موفقیت حذف شد!", icon: "success", buttons: "باشه", });
                    getAllVehicles();
                } else {
                    swal({ title: "خطا در حذف", icon: "error", buttons: "باشه", });
                }
            }
        });
    };

    const handleEdit = (vehicles) => {
        console.log(vehicles);

        setIsUpdate(true)

        setIdForUpdate(vehicles.id)

        setFormData({
            local_image_address: vehicles.local_image_address,
            plate_number: vehicles.plate_number,
            location: vehicles.location,
            brand: vehicles.brand,
            model: vehicles.model,
            year: vehicles.year,
            color: vehicles.color,
            mileage: vehicles.mileage,
            status: vehicles.status,
            hourly_rental_rate: vehicles.hourly_rental_rate,
            security_deposit: vehicles.security_deposit
        })

        setOpenModal(true);
    };

    const handleOpenModal = () => {
        setIsUpdate(false);
        setFormData({
            local_image_address: "",
            plate_number: "",
            location: "تهران",
            brand: "تویوتا",
            model: "",
            year: 0,
            color: "",
            mileage: 0,
            status: "نو",
            hourly_rental_rate: 0,
            security_deposit: 0,
        });
        setOpenModal(true);
    };

    const filteredVehicles = vehiclesData.filter(vehicle =>
        vehicle.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.plate_number.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.location.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (
        <>
            {
                loaderVehicles ? (<Spinner className="h-8 w-8 mx-auto mt-16" />) : (
                    <div className="container w-full mx-auto">
                        
                        {/* Header with Add Button and Search */}
                        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                            <Typography variant="h4" className="lalezar">
                                مدیریت خودروها
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
                                    <FaPlus /> افزودن خودرو
                                </Button>
                            </div>
                        </div>

                        <Card className="h-full w-full overflow-scroll">
                            <table className="w-full table-auto text-right">
                                <thead>
                                    <tr>
                                        {TABLE_HEAD.map((head) => (
                                            <th
                                                key={head}
                                                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                                            >
                                                <Typography
                                                    variant=""
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
                                    {filteredVehicles.map((car, index) => {
                                        const isLast = index === filteredVehicles.length - 1;
                                        const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                                        return (
                                            <tr key={car.id}>
                                                <td className={classes}>
                                                    <Typography
                                                        variant=""
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {car.brand}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Typography
                                                        variant=""
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {car.model}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Typography
                                                        variant=""
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {car.color}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Typography
                                                        as="a"
                                                        href="#"
                                                        variant=""
                                                        color="blue-gray"
                                                        className="font-medium iransans"
                                                    >
                                                        {car.location}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <div className="flex relative w-72">
                                                        <img src="../carReantal/plate2.png" className='h-12' alt="" />
                                                        <span className=' absolute left-[130px] top-4'>{car.plate_number.slice(0, 8)}</span>
                                                        <img src="../carReantal/plate1.png" className='h-12 w-44' alt="" />
                                                        <span className=' absolute right-3 top-4'>{car.plate_number.slice(9)}</span>
                                                    </div>
                                                </td>
                                                <td className={classes}>
                                                    <Typography
                                                        as="a"
                                                        href="#"
                                                        variant=""
                                                        color="blue-gray"
                                                        className="font-medium"
                                                    >
                                                        {car.hourly_rental_rate.toLocaleString()}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Typography
                                                        as="a"
                                                        href="#"
                                                        variant=""
                                                        color="blue-gray"
                                                        className="font-medium iransans"
                                                    >
                                                        {car.status}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Typography
                                                        as="a"
                                                        href="#"
                                                        variant=""
                                                        color="blue-gray"
                                                        className="font-medium"
                                                    >
                                                        {car.year}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Typography
                                                        as="a"
                                                        href="#"
                                                        variant=""
                                                        color="blue-gray"
                                                        className="font-medium flex"
                                                    >
                                                        <button className='p-2 ml-2 pl-3 rounded-full bg-blue-gray-900 text-white text-xl' onClick={() => handleEdit(car)}><FaEdit /></button>
                                                        <button className='p-2 rounded-full bg-blue-gray-900 text-white text-xl' onClick={() => handleDelete(car.id)}><MdDelete /></button>
                                                    </Typography>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>

                            </table >
                        </Card >
                        
                        {/* Modal for Add/Edit */}
                        <Dialog open={openModal} handler={() => setOpenModal(false)} size="lg">
                            <DialogHeader className="text-right">
                                {isUpdate ? "ویرایش خودرو" : "افزودن خودرو جدید"}
                            </DialogHeader>
                            <DialogBody className="max-h-[70vh] overflow-y-auto">
                                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <Typography variant="small" className="mb-2 text-right font-medium text-gray-900">
                                                شماره پلاک
                                            </Typography>
                                            <Input color="gray" size="lg" name="plate_number" value={formData.plate_number} onChange={handleChange} />
                                        </div>
                                        <div>
                                            <Typography variant="small" className="mb-2 text-right font-medium text-gray-900">
                                                مکان
                                            </Typography>
                                            <Select name="city" value={formData.location} onChange={(val) => setFormData({ ...formData, location: val })}>
                                                <Option value="تهران">تهران</Option>
                                                <Option value="مشهد">مشهد</Option>
                                                <Option value="اصفهان">اصفهان</Option>
                                                <Option value="شیراز">شیراز</Option>
                                                <Option value="تبریز">تبریز</Option>
                                                <Option value="کیش">کیش</Option>
                                                <Option value="قم">قم</Option>
                                                <Option value="اهواز">اهواز</Option>
                                                <Option value="رشت">رشت</Option>
                                                <Option value="کرمان">کرمان</Option>
                                                <Option value="همدان">همدان</Option>
                                                <Option value="یزد">یزد</Option>
                                                <Option value="ارومیه">ارومیه</Option>
                                                <Option value="بندرعباس">بندرعباس</Option>
                                                <Option value="بوشهر">بوشهر</Option>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <Typography variant="small" className="mb-2 text-right font-medium text-gray-900">
                                                برند خودرو
                                            </Typography>
                                            <Select
                                                name="carBrand"
                                                value={formData.brand}
                                                onChange={(val) => setFormData({ ...formData, brand: val })}
                                            >
                                                {carBrands.map((brand, index) => (
                                                    <Option key={index} value={brand}>{brand}</Option>
                                                ))}
                                            </Select>
                                        </div>
                                        <div>
                                            <Typography variant="small" className="mb-2 text-right font-medium text-gray-900">
                                                مدل
                                            </Typography>
                                            <Input color="gray" size="lg" name="model" value={formData.model} onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <Typography variant="small" className="mb-2 text-right font-medium text-gray-900">
                                                سال ساخت
                                            </Typography>
                                            <Input type="number" color="gray" size="lg" name="year" value={formData.year} onChange={handleChange} />
                                        </div>
                                        <div>
                                            <Typography variant="small" className="mb-2 text-right font-medium text-gray-900">
                                                رنگ
                                            </Typography>
                                            <Input color="gray" size="lg" name="color" value={formData.color} onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <Typography variant="small" className="mb-2 text-right font-medium text-gray-900">
                                                کارکرد (کیلومتر)
                                            </Typography>
                                            <Input type="number" color="gray" size="lg" name="mileage" value={formData.mileage} onChange={handleChange} />
                                        </div>
                                        <div>
                                            <Typography variant="small" className="mb-2 text-right font-medium text-gray-900">
                                                وضعیت
                                            </Typography>
                                            <Select name="status" value={formData.status} onChange={(val) => setFormData({ ...formData, status: val })}>
                                                <Option value="نو">نو</Option>
                                                <Option value="اجاره شده">اجاره شده</Option>
                                                <Option value="موجود">موجود</Option>
                                                <Option value="در سرویس">در سرویس</Option>
                                                <Option value="آسیب‌دیده">آسیب‌دیده</Option>
                                                <Option value="نامشخص">نامشخص</Option>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <Typography variant="small" className="mb-2 text-right font-medium text-gray-900">
                                                نرخ اجاره ساعتی (تومان)
                                            </Typography>
                                            <Input type="number" color="gray" size="lg" name="hourly_rental_rate" value={formData.hourly_rental_rate} onChange={handleChange} />
                                        </div>
                                        <div>
                                            <Typography variant="small" className="mb-2 text-right font-medium text-gray-900">
                                                مبلغ ودیعه (تومان)
                                            </Typography>
                                            <Input type="number" color="gray" size="lg" name="security_deposit" value={formData.security_deposit} onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div>
                                        <Typography variant="small" className="mb-2 text-right font-medium text-gray-900">
                                            لینک عکس
                                        </Typography>
                                        <Input type="text" color="gray" size="lg" name="local_image_address" value={formData.local_image_address} onChange={handleChange} />
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

export default Vehicles;