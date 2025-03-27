import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/authContext";
import swal from "sweetalert";
import { Card, Typography, Spinner, Button, Input, Select, Option } from "@material-tailwind/react";

const TABLE_HEAD = ["تاریخ شروع", "تاریخ پایان", "مبلغ کل", "مشتری", "خودرو", "فاکتور"];

const Rentals = () => {
    const authContext = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [rentalData, setRentalData] = useState([]);
    const [loader, setLoader] = useState(true);

    const [formData, setFormData] = useState({
        rental_start_date: "",
        rental_end_date: "",
        total_amount: "",
        customer_id: "",
        vehicle_id: "",
        invoice_id: ""
    });

    useEffect(() => {
        getAllRentals();
    }, []);

    const getAllRentals = async () => {
        try {
            const response = await fetch(`${authContext.baseUrl}/rentals`);
            const data = await response.json();

            if (response.status === 200) {
                setRentalData(data);
            }
        } catch (error) {
            console.error("Error fetching rentals:", error);
        } finally {
            setLoader(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const response = await fetch(`${authContext.baseUrl}/rentals`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify(formData),
        });

        if (response.status === 200) {
            setLoading(false);
            swal({
                title: "اجاره با موفقیت ثبت شد",
                icon: "success",
                buttons: "باشه",
            });
            getAllRentals();
            setFormData({
                rental_start_date: "",
                rental_end_date: "",
                total_amount: "",
                customer_id: "",
                vehicle_id: "",
                invoice_id: ""
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

    return (

        <>
            {loader ? (
                <Spinner className="h-8 w-8 mx-auto mt-16" />
            ) : (
                <div className="container mx-auto p-6">

                    <Card className="w-full max-w-xl mx-auto p-6 mb-16 bg-white shadow-lg rounded-md">
                        <Typography variant="h5" className="text-center text-gray-900 font-bold mb-4">
                            ثبت اجاره جدید
                        </Typography>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div>
                                <Typography variant="small" className="mb-2 text-right font-medium text-gray-900">تاریخ شروع</Typography>
                                <Input type="date" color="gray" size="lg" name="rental_start_date" value={formData.rental_start_date} onChange={handleChange} />
                            </div>

                            <div>
                                <Typography variant="small" className="mb-2 text-right font-medium text-gray-900">تاریخ پایان</Typography>
                                <Input type="date" color="gray" size="lg" name="rental_end_date" value={formData.rental_end_date} onChange={handleChange} />
                            </div>

                            <div>
                                <Typography variant="small" className="mb-2 text-right font-medium text-gray-900">مبلغ کل (تومان)</Typography>
                                <Input type="number" color="gray" size="lg" name="total_amount" value={formData.total_amount} onChange={handleChange} />
                            </div>

                            <div>
                                <Typography variant="small" className="mb-2 text-right font-medium text-gray-900">شناسه مشتری</Typography>
                                <Input color="gray" size="lg" name="customer_id" value={formData.customer_id} onChange={handleChange} />
                            </div>

                            <div>
                                <Typography variant="small" className="mb-2 text-right font-medium text-gray-900">شناسه وسیله نقلیه</Typography>
                                <Input color="gray" size="lg" name="vehicle_id" value={formData.vehicle_id} onChange={handleChange} />
                            </div>

                            <div>
                                <Typography variant="small" className="mb-2 text-right font-medium text-gray-900">شناسه فاکتور</Typography>
                                <Input color="gray" size="lg" name="invoice_id" value={formData.invoice_id} onChange={handleChange} />
                            </div>

                            <Button type="submit" className="w-full bg-blue-gray-900 text-white">
                                {loading ? <Spinner className="inline h-4 w-4" /> : "ثبت اجاره"}
                            </Button>
                        </form>
                    </Card>

                    <Card className="h-full w-full overflow-scroll">
                        <Typography variant="h5" className="text-center text-gray-900 font-bold mb-4">
                            لیست اجاره‌ها
                        </Typography>

                        <table className="w-full min-w-max table-auto text-right">
                            <thead>
                                <tr>
                                    {TABLE_HEAD.map((head) => (
                                        <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                            <Typography className="font-normal leading-none opacity-70">{head}</Typography>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {rentalData.map((rental) => (
                                    <tr key={rental.id}>
                                        <td className="p-4">{rental.rental_start_date}</td>
                                        <td className="p-4">{rental.rental_end_date}</td>
                                        <td className="p-4">{rental.total_amount.toLocaleString()}</td>
                                        <td className="p-4"><Button size="sm" onClick={() => showCustomerInfo(rental.customer)}>نمایش</Button></td>
                                        <td className="p-4"><Button size="sm" onClick={() => showVehicleInfo(rental.vehicle)}>نمایش</Button></td>
                                        <td className="p-4"><Button size="sm" onClick={() => showInvoiceInfo(rental.invoice)}>نمایش</Button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </Card>
                </div>
            )
            }
        </>

    );
};

export default Rentals;
