import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/authContext";
import swal from "sweetalert";
import { Card, Typography, Spinner, Button, Input, Select, Option } from "@material-tailwind/react";

const TABLE_HEAD = ["شرکت بیمه", "نوع بیمه", "شماره بیمه‌نامه", "تاریخ شروع", "تاریخ انقضا", "حق بیمه", "خودرو"];

const VehicleInsurances = () => {
    const authContext = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [insuranceData, setInsuranceData] = useState([]);
    const [loader, setLoader] = useState(true);

    const [formData, setFormData] = useState({
        insurance_company: "",
        insurance_type: "شخص ثالث",
        policy_number: "",
        start_date: "",
        expiration_date: "",
        premium: "",
        vehicle_id: ""
    });

    useEffect(() => {
        getAllInsurances();
    }, []);

    const getAllInsurances = async () => {
        try {
            const response = await fetch(`${authContext.baseUrl}/vehicle_insurances`);
            const data = await response.json();

            if (response.status === 200) {
                setInsuranceData(data);
            }
        } catch (error) {
            console.error("Error fetching insurances:", error);
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

        const response = await fetch(`${authContext.baseUrl}/vehicle_insurances`, {
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
                premium: "",
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

    return (
        <div className="container mx-auto p-6">

            <Card className="p-6 bg-white shadow-md rounded-md mb-6">
                <Typography variant="h5" className="text-center text-gray-900 font-bold mb-4">
                    ثبت اطلاعات بیمه خودرو
                </Typography>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                        <Typography variant="small" className="mb-2 text-right font-medium text-gray-900">نام شرکت بیمه</Typography>
                        <Input color="gray" size="lg" name="insurance_company" value={formData.insurance_company} onChange={handleChange} />
                    </div>

                    <div>
                        <Typography variant="small" className="mb-2 text-right font-medium text-gray-900">نوع بیمه</Typography>
                        <Select name="insurance_type" value={formData.insurance_type} onChange={(val) => setFormData({ ...formData, insurance_type: val })}>
                            <Option value="شخص ثالث">شخص ثالث</Option>
                            <Option value="بدنه خودرو">بدنه خودرو</Option>
                            <Option value="حوادث سرنشین">حوادث سرنشین</Option>
                        </Select>
                    </div>

                    <div>
                        <Typography variant="small" className="mb-2 text-right font-medium text-gray-900">شماره بیمه‌نامه</Typography>
                        <Input color="gray" size="lg" name="policy_number" value={formData.policy_number} onChange={handleChange} />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Typography variant="small" className="mb-2 text-right font-medium text-gray-900">تاریخ شروع</Typography>
                            <Input type="date" color="gray" size="lg" name="start_date" value={formData.start_date} onChange={handleChange} />
                        </div>
                        <div>
                            <Typography variant="small" className="mb-2 text-right font-medium text-gray-900">تاریخ انقضا</Typography>
                            <Input type="date" color="gray" size="lg" name="expiration_date" value={formData.expiration_date} onChange={handleChange} />
                        </div>
                    </div>

                    <div>
                        <Typography variant="small" className="mb-2 text-right font-medium text-gray-900">حق بیمه (تومان)</Typography>
                        <Input type="number" color="gray" size="lg" name="premium" value={formData.premium} onChange={handleChange} />
                    </div>

                    <div>
                        <Typography variant="small" className="mb-2 text-right font-medium text-gray-900">شناسه وسیله نقلیه</Typography>
                        <Input color="gray" size="lg" name="vehicle_id" value={formData.vehicle_id} onChange={handleChange} />
                    </div>

                    <Button type="submit" className="w-full bg-blue-gray-900 text-white">
                        {loading ? <Spinner className="inline h-4 w-4" /> : "ثبت اطلاعات بیمه"}
                    </Button>
                </form>
            </Card>


            <Card className="h-full w-full overflow-scroll">
                <Typography variant="h5" className="text-center text-gray-900 font-bold mb-4">
                    لیست بیمه‌ها
                </Typography>
                {loader ? (
                    <Spinner className="h-8 w-8 mx-auto mt-16" />
                ) : (
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
                            {insuranceData.map((insurance, index) => (
                                <tr key={insurance.id}>
                                    <td className="p-4">{insurance.insurance_company}</td>
                                    <td className="p-4">{insurance.insurance_type}</td>
                                    <td className="p-4">{insurance.policy_number}</td>
                                    <td className="p-4">{insurance.start_date}</td>
                                    <td className="p-4">{insurance.expiration_date}</td>
                                    <td className="p-4">{insurance.premium.toLocaleString()}</td>
                                    <td className="p-4">
                                        <Button size="sm" onClick={() => showVehicleInfo(insurance.vehicle)}>نمایش</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </Card>
        </div>
    );
};

export default VehicleInsurances;
