import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/authContext";
import swal from "sweetalert";
import { Card, Typography, Spinner, Button, Input, Select, Option, Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";
import { MdDelete } from "react-icons/md";
import { FaEdit, FaPlus, FaSearch } from "react-icons/fa";

const TABLE_HEAD = ["شرکت بیمه", "نوع بیمه", "شماره بیمه‌نامه", "تاریخ شروع", "تاریخ انقضا", "حق بیمه", "خودرو"];

const VehicleInsurances = () => {
    const authContext = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [insuranceData, setInsuranceData] = useState([]);
    const [loader, setLoader] = useState(true);
    const [isUpdate, setIsUpdate] = useState(false);
    const [idForUpdate, setIdForUpdate] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const [formData, setFormData] = useState({
        insurance_company: "",
        insurance_type: "شخص ثالث",
        policy_number: "",
        start_date: "",
        expiration_date: "",
        premium: 0,
        vehicle_id: ""
    });

    useEffect(() => {
        getAllInsurances();
    }, []);

    const getAllInsurances = async () => {
        const response = await fetch(`${authContext.baseUrl}/vehicle_insurances` ,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "accept": "application/json",
                "Authorization" : `Bearer ${authContext.user.access_token}`,
                "Authorization-Refresh" : `Bearer ${authContext.user.refresh_token}`
            },
        });
        const data = await response.json();

        if (response.status === 200) {
            console.log(data);
            
            setInsuranceData(data);
            setLoader(false)
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: ["premium"].includes(name)
                ? Number(value) || 0
                : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        console.log(formData);
        

        const response = await fetch(`${authContext.baseUrl}/vehicle_insurances`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "accept": "application/json",
                "Authorization" : `Bearer ${authContext.user.access_token}`,
                "Authorization-Refresh" : `Bearer ${authContext.user.refresh_token}`

            },
            body: JSON.stringify(formData),
        });

        if (response.status === 200) {
            setLoading(false);
            setOpenModal(false);
            swal({
                title: "بیمه با موفقیت ثبت شد",
                icon: "success",
                buttons: "باشه",
            });
            getAllInsurances();
            setFormData({
                insurance_company: "",
                insurance_type: "شخص ثالث",
                policy_number: "",
                start_date: "",
                expiration_date: "",
                premium: 0,
                vehicle_id: ""
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

    const showVehicleInfo = (vehicle) => {
        swal({
            title: `اطلاعات خودرو - ${vehicle.plate_number}`,
            text: `
            برند: ${vehicle.brand}
            مدل: ${vehicle.model}
            رنگ: ${vehicle.color}
            موقعیت: ${vehicle.location}
            سال ساخت: ${vehicle.year}
            کارکرد: ${vehicle.mileage} کیلومتر
            وضعیت: ${vehicle.status}
            نرخ اجاره ساعتی: ${vehicle.hourly_rental_rate.toLocaleString()} تومان
            مبلغ ودیعه: ${vehicle.security_deposit.toLocaleString()} تومان
            `,
            icon: "info",
            button: "بستن",
        });
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
                const response = await fetch(`${authContext.baseUrl}/vehicle_insurances/${id}`, {
                    method: "DELETE",
                    "Authorization" : `Bearer ${authContext.user.access_token}`,
                    "Authorization-Refresh" : `Bearer ${authContext.user.refresh_token}`
                });

                if (response.status === 200) {
                    swal({title:"بیمه با موفقیت حذف شد!",  icon: "success" ,buttons: "باشه",});
                    getAllInsurances();
                } else {
                    swal({title:"خطا در حذف",  icon: "error" ,buttons: "باشه",});
                }
            }
        });
    };

    const handleEdit = (insurance) => {
        console.log(insurance);
        setIsUpdate(true);
        setIdForUpdate(insurance.id);
        setFormData({
            insurance_company: insurance.insurance_company,
            insurance_type: insurance.insurance_type,
            policy_number: insurance.policy_number,
            start_date: insurance.start_date,
            expiration_date: insurance.expiration_date,
            premium: insurance.premium,
            vehicle_id: insurance.vehicle.id
        });
        setOpenModal(true);
    };

    const handleOpenModal = () => {
        setIsUpdate(false);
        setFormData({
            insurance_company: "",
            insurance_type: "شخص ثالث",
            policy_number: "",
            start_date: "",
            expiration_date: "",
            premium: 0,
            vehicle_id: ""
        });
        setOpenModal(true);
    };

    const filteredInsurances = insuranceData.filter(insurance =>
        insurance.insurance_company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        insurance.policy_number.toLowerCase().includes(searchTerm.toLowerCase()) ||
        insurance.vehicle.brand.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (

        <>
            {loader ? (
                <Spinner className="h-8 w-8 mx-auto mt-16" />
            ) : (
                <div className="container mx-auto p-6">

                    {/* Header with Add Button and Search */}
                    <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                        <Typography variant="h4" className="lalezar dark:text-white">
                            مدیریت بیمه خودروها
                        </Typography>
                        <div className="flex gap-4 items-center">
                            <div className="relative">
                                <Input
                                    type="text"
                                    placeholder="جستجو..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10 dark:text-white"
                                />
                                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            </div>
                            <Button 
                                onClick={handleOpenModal}
                                className="flex items-center gap-2 bg-blue-gray-900"
                            >
                                <FaPlus /> افزودن بیمه
                            </Button>
                        </div>
                    </div>

                    <Card className="h-full w-full overflow-scroll dark:bg-gray-800">
                        <table className="w-full min-w-max table-auto text-right">
                            <thead>
                                <tr>
                                    {TABLE_HEAD.map((head) => (
                                        <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 dark:bg-gray-700 dark:border-gray-600">
                                            <Typography className="font-normal leading-none opacity-70 dark:text-white">{head}</Typography>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {filteredInsurances.map((insurance, index) => {
                                    const classes = "p-4 border-b border-blue-gray-50 dark:border-gray-600";
                                    
                                    return (
                                    <tr key={insurance.id}>
                                        <td className={classes}>
                                            <Typography className="dark:text-white">{insurance.insurance_company}</Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography className="dark:text-white">{insurance.insurance_type}</Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography className="dark:text-white">{insurance.policy_number}</Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography className="dark:text-white">{insurance.start_date}</Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography className="dark:text-white">{insurance.expiration_date}</Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography className="dark:text-white">{insurance.premium.toLocaleString()}</Typography>
                                        </td>
                                        <td className="p-4">
                                            <Button size="sm" onClick={() => showVehicleInfo(insurance.vehicle)}>نمایش</Button>
                                        </td>
                                        <button className='p-2 ml-2 pl-3 rounded-full bg-blue-gray-900 text-white text-xl'  onClick={() => handleEdit(insurance)}><FaEdit /></button>
                                        <button className='p-2 rounded-full bg-blue-gray-900 text-white text-xl' onClick={() => handleDelete(insurance.id)}><MdDelete /></button>
                                    </tr>
                                )})}
                            </tbody>
                        </table>

                    </Card>
                    
                    {/* Modal for Add/Edit */}
                    <Dialog open={openModal} handler={() => setOpenModal(false)} size="lg" className="dark:bg-gray-800">
                        <DialogHeader className="text-right dark:text-white">
                            {isUpdate ? "ویرایش بیمه" : "افزودن بیمه جدید"}
                        </DialogHeader>
                        <DialogBody className="max-h-[70vh] overflow-y-auto dark:bg-gray-800">
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <div>
                                    <Typography variant="small" className="mb-2 text-right font-medium text-gray-900 dark:text-white">نام شرکت بیمه</Typography>
                                    <Input color="gray" size="lg" name="insurance_company" value={formData.insurance_company} onChange={handleChange} className="dark:text-white" />
                                </div>

                                <div>
                                    <Typography variant="small" className="mb-2 text-right font-medium text-gray-900 dark:text-white">نوع بیمه</Typography>
                                    <Select name="insurance_type" value={formData.insurance_type} onChange={(val) => setFormData({ ...formData, insurance_type: val })}>
                                        <Option value="شخص ثالث">شخص ثالث</Option>
                                        <Option value="بدنه خودرو">بدنه خودرو</Option>
                                        <Option value="حوادث سرنشین">حوادث سرنشین</Option>
                                    </Select>
                                </div>

                                <div>
                                    <Typography variant="small" className="mb-2 text-right font-medium text-gray-900 dark:text-white">شماره بیمه‌نامه</Typography>
                                    <Input color="gray" size="lg" name="policy_number" value={formData.policy_number} onChange={handleChange} className="dark:text-white" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <Typography variant="small" className="mb-2 text-right font-medium text-gray-900 dark:text-white">تاریخ شروع</Typography>
                                        <Input type="text" color="gray" size="lg" name="start_date" value={formData.start_date} onChange={handleChange} className="dark:text-white" />
                                    </div>
                                    <div>
                                        <Typography variant="small" className="mb-2 text-right font-medium text-gray-900 dark:text-white">تاریخ انقضا</Typography>
                                        <Input type="text" color="gray" size="lg" name="expiration_date" value={formData.expiration_date} onChange={handleChange} className="dark:text-white" />
                                    </div>
                                </div>

                                <div>
                                    <Typography variant="small" className="mb-2 text-right font-medium text-gray-900 dark:text-white">حق بیمه (تومان)</Typography>
                                    <Input type="number" color="gray" size="lg" name="premium" value={formData.premium} onChange={handleChange} className="dark:text-white" />
                                </div>

                                <div>
                                    <Typography variant="small" className="mb-2 text-right font-medium text-gray-900 dark:text-white">شناسه وسیله نقلیه</Typography>
                                    <Input color="gray" size="lg" name="vehicle_id" value={formData.vehicle_id} onChange={handleChange} className="dark:text-white" />
                                </div>
                            </form>
                        </DialogBody>
                        <DialogFooter className="flex gap-2 dark:bg-gray-800">
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
};

export default VehicleInsurances;