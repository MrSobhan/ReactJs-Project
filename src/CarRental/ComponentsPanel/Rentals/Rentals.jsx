import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/authContext";
import swal from "sweetalert";
import { Card, Typography, Spinner, Button, Input, Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";
import { MdDelete } from "react-icons/md";
import { FaEdit, FaSearch, FaPlus } from "react-icons/fa";

const Rentals = () => {

    const TABLE_HEAD = ["تاریخ شروع", "تاریخ پایان", "مبلغ کل", "مشتری", "خودرو", "فاکتور", ""];

    const authContext = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [rentalData, setRentalData] = useState([]);
    const [loader, setLoader] = useState(true);
    const [isUpdate, setIsUpdate] = useState(false);
    const [idForUpdate, setIdForUpdate] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const [formData, setFormData] = useState({
        rental_start_date: "",
        rental_end_date: "",
        total_amount: 0,
        customer_id: "",
        vehicle_id: "",
        invoice_id: ""
    });

    useEffect(() => {
        getAllRentals();
    }, []);

    const getAllRentals = async () => {

        const response = await fetch(`${authContext.baseUrl}/rentals`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "accept": "application/json",
                "Authorization": `Bearer ${authContext.user.access_token}`,
                "Authorization-Refresh": `Bearer ${authContext.user.refresh_token}`
            },
        });
        const data = await response.json();


        if (response.status === 200) {
            setRentalData(data);
            setLoader(false)
        }

    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: ["total_amount"].includes(name) ? Number(value) || 0 : value,
        }));
    };

    // ? Modal Handler

    const fetchCustomers = async () => {
        try {
            const response = await fetch(`${authContext.baseUrl}/customers`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${authContext.user.access_token}`,
                },
            });
            const data = await response.json();

            if (response.status === 200) {
                swal({
                    title: "انتخاب مشتری",
                    content: createSelectionList(data, "customer_id"),
                    buttons: false,
                });
            }
        } catch (error) {
            console.error("Error fetching customers:", error);
        }
    };

    const fetchVehicles = async () => {
        try {
            const response = await fetch(`${authContext.baseUrl}/vehicles`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${authContext.user.access_token}`,
                },
            });
            const data = await response.json();

            const DataForShowRental = data.filter((car) => car.status == 'موجود')

            if (response.status === 200) {
                swal({
                    title: "انتخاب خودرو",
                    content: createSelectionList(DataForShowRental, "vehicle_id"),
                    buttons: false,
                });
            }
        } catch (error) {
            console.error("Error fetching vehicles:", error);
        }
    };

    const fetchInvoices = async () => {
        try {
            const response = await fetch(`${authContext.baseUrl}/invoices`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${authContext.user.access_token}`,
                },
            });
            const data = await response.json();

            if (response.status === 200) {
                swal({
                    title: "انتخاب فاکتور",
                    content: createSelectionList(data, "invoice_id"),
                    buttons: false,
                });
            }
        } catch (error) {
            console.error("Error fetching invoices:", error);
        }
    };

    const createSelectionList = (data, field) => {
        const div = document.createElement("div");
        div.style.maxHeight = "350px";
        div.style.overflowY = "auto";
        div.style.textAlign = "right";

        data.forEach((item) => {
            const btn = document.createElement("button");
            btn.innerText = `${item.username || item.plate_number || item.total_amount}`;
            btn.style.display = "block";
            btn.style.padding = "10px";
            btn.style.margin = "5px";
            btn.style.width = "100%";
            btn.style.border = "1px solid #ccc";
            btn.style.borderRadius = "5px";
            btn.style.backgroundColor = "#f9f9f9";
            btn.style.cursor = "pointer";
            btn.onclick = () => {
                setFormData((prev) => ({ ...prev, [field]: item.id }));
                swal.close();
            };
            div.appendChild(btn);
        });

        return div;
    };

    // ? Data Func Handler


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        console.log(formData.vehicle_id);

        let response = null;

        if (isUpdate) {

            console.log("Update...");


            response = await fetch(`${authContext.baseUrl}/rentals/${idForUpdate}`, {
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
            response = await fetch(`${authContext.baseUrl}/rentals`, {
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


            const responsePut = await fetch(`${authContext.baseUrl}/vehicles/${formData.vehicle_id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "accept": "application/json",
                    "Authorization": `Bearer ${authContext.user.access_token}`,
                    "Authorization-Refresh": `Bearer ${authContext.user.refresh_token}`
                },
                body: JSON.stringify({ "status": "اجاره شده" }),
            });

            if (responsePut.status === 200) {

                setLoading(false);
                setIsUpdate(false);
                setOpenModal(false);
                swal({
                    title: "اجاره با موفقیت ثبت شد",
                    icon: "success",
                    buttons: "باشه",
                });
                getAllRentals();
                setFormData({
                    rental_start_date: "",
                    rental_end_date: "",
                    total_amount: 0,
                    customer_id: "",
                    vehicle_id: "",
                    invoice_id: ""
                });
            }






        } else {
            setLoading(false);
            swal({
                title: "مشکلی در ارسال اطلاعات پیش آمد",
                icon: "error",
                buttons: "تلاش مجدد",
            });
        }
    };

    const showCustomerInfo = (customer) => {
        swal({
            title: `اطلاعات مشتری - ${customer.first_name} ${customer.last_name}`,
            text: `
            کد ملی: ${customer.national_id}
            تلفن: ${customer.phone}
            ایمیل: ${customer.email}
            آدرس: ${customer.address}
            `,
            icon: "info",
            button: "بستن",
        });
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

    const showInvoiceInfo = (invoice) => {
        swal({
            title: "اطلاعات فاکتور",
            text: `
            مبلغ کل: ${invoice.total_amount.toLocaleString()} تومان
            مالیات: ${invoice.tax.toLocaleString()} تومان
            تخفیف: ${invoice.discount.toLocaleString()} تومان
            مبلغ نهایی: ${invoice.final_amount.toLocaleString()} تومان
            وضعیت: ${invoice.status}
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
                const response = await fetch(`${authContext.baseUrl}/rentals/${id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "accept": "application/json",
                        "Authorization": `Bearer ${authContext.user.access_token}`,
                        "Authorization-Refresh": `Bearer ${authContext.user.refresh_token}`

                    },
                });

                if (response.status === 200) {
                    swal({ title: "اجاره خودرو با موفقیت حذف شد!", icon: "success", buttons: "باشه", });
                    getAllRentals();
                } else {
                    swal({ title: "خطا در حذف", icon: "error", buttons: "باشه", });
                }
            }
        });
    };

    const handleEdit = (rental) => {
        console.log(rental);

        setIsUpdate(true)

        setIdForUpdate(rental.id)

        setFormData({
            rental_start_date: rental.rental_start_date,
            rental_end_date: rental.rental_end_date,
            total_amount: rental.total_amount,
            customer_id: rental.customer.id,
            vehicle_id: rental.vehicle.id,
            invoice_id: rental.invoice.id
        })
        setOpenModal(true);
    };

    const handleOpenModal = () => {
        setIsUpdate(false);
        setFormData({
            rental_start_date: "",
            rental_end_date: "",
            total_amount: 0,
            customer_id: "",
            vehicle_id: "",
            invoice_id: ""
        });
        setOpenModal(true);
    };

    const filteredRentals = rentalData.filter(rental =>
        rental.customer.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        rental.customer.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        rental.vehicle.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        rental.vehicle.model.toLowerCase().includes(searchTerm.toLowerCase())
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
                            مدیریت اجاره‌ها
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
                                <FaPlus /> افزودن اجاره
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
                                {filteredRentals.map((rental) => {
                                    const classes = "p-4 border-b border-blue-gray-50 dark:border-gray-600";
                                    
                                    return (
                                    <tr key={rental.id}>
                                        <td className={classes}>
                                            <Typography className="dark:text-white">{rental.rental_start_date}</Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography className="dark:text-white">{rental.rental_end_date}</Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography className="dark:text-white">{rental.total_amount.toLocaleString()}</Typography>
                                        </td>
                                        <td className="p-4"><Button size="sm" onClick={() => showCustomerInfo(rental.customer)}>نمایش</Button></td>
                                        <td className="p-4"><Button size="sm" onClick={() => showVehicleInfo(rental.vehicle)}>نمایش</Button></td>
                                        <td className="p-4"><Button size="sm" onClick={() => showInvoiceInfo(rental.invoice)}>نمایش</Button></td>
                                        <button className='p-2 ml-2 pl-3 rounded-full bg-blue-gray-900 text-white text-xl' onClick={() => handleEdit(rental)}><FaEdit /></button>
                                        <button className='p-2 rounded-full bg-blue-gray-900 text-white text-xl' onClick={() => handleDelete(rental.id)}><MdDelete /></button>
                                    </tr>
                                )})}
                            </tbody>
                        </table>

                    </Card>
                    
                    {/* Modal for Add/Edit */}
                    <Dialog open={openModal} handler={() => setOpenModal(false)} size="lg" className="dark:bg-gray-800">
                        <DialogHeader className="text-right dark:text-white">
                            {isUpdate ? "ویرایش اجاره" : "افزودن اجاره جدید"}
                        </DialogHeader>
                        <DialogBody className="max-h-[70vh] overflow-y-auto dark:bg-gray-800">
                            <form className="flex flex-col gap-4">
                                <div>
                                    <Typography variant="small" className="mb-2 text-right font-medium text-gray-900 dark:text-white">تاریخ شروع</Typography>
                                    <Input type="text" color="gray" size="lg" name="rental_start_date" value={formData.rental_start_date} onChange={handleChange} className="dark:text-white" />
                                    <p className="text-red-600 text-sm mt-2">تاریخ شروع کرایه از اکنون تا حداکثر 6 ماه اینده می باشد.</p>
                                </div>

                                <div>
                                    <Typography variant="small" className="mb-2 text-right font-medium text-gray-900 dark:text-white">تاریخ پایان</Typography>
                                    <Input type="text" color="gray" size="lg" name="rental_end_date" value={formData.rental_end_date} onChange={handleChange} className="dark:text-white" />
                                    <p className="text-red-600 text-sm mt-2">تاریخ پایان کرایه حداکثر تا 12 ماه بعد از تاریخ شروع می باشد.</p>
                                </div>

                                <div>
                                    <Typography variant="small" className="mb-2 text-right font-medium text-gray-900 dark:text-white">مبلغ کل (تومان)</Typography>
                                    <Input type="number" color="gray" size="lg" name="total_amount" value={formData.total_amount} onChange={handleChange} className="dark:text-white" />
                                </div>
                                <div>
                                    <Typography variant="small" className="mb-2 text-right font-medium text-gray-900 dark:text-white">
                                        شناسه مشتری
                                    </Typography>
                                    <div className="flex">
                                        <Input color="gray" size="lg" name="customer_id" value={formData.customer_id} readOnly className="dark:text-white" />
                                        <Button onClick={fetchCustomers} className="mr-2 bg-blue-gray-900">
                                            <FaSearch />
                                        </Button>
                                    </div>
                                </div>

                                <div>
                                    <Typography variant="small" className="mb-2 text-right font-medium text-gray-900 dark:text-white">
                                        شناسه وسیله نقلیه
                                    </Typography>
                                    <div className="flex">
                                        <Input color="gray" size="lg" name="vehicle_id" value={formData.vehicle_id} readOnly className="dark:text-white" />
                                        <Button onClick={fetchVehicles} className="mr-2 bg-blue-gray-900">
                                            <FaSearch />
                                        </Button>
                                    </div>
                                </div>

                                <div>
                                    <Typography variant="small" className="mb-2 text-right font-medium text-gray-900 dark:text-white">
                                        شناسه فاکتور
                                    </Typography>
                                    <div className="flex">
                                        <Input color="gray" size="lg" name="invoice_id" value={formData.invoice_id} readOnly className="dark:text-white" />
                                        <Button onClick={fetchInvoices} className="mr-2 bg-blue-gray-900">
                                            <FaSearch />
                                        </Button>
                                    </div>
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
            )}
        </>
    );
};

export default Rentals;
