import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/authContext";
import swal from "sweetalert";
import { Card, Typography, Spinner, Button, Input, Select, Option } from "@material-tailwind/react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";


const TABLE_HEAD = ["تاریخ پرداخت", "روش پرداخت", "شناسه تراکنش", "مبلغ", "وضعیت پرداخت", "فاکتور"];

const Payments = () => {
    const authContext = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [paymentData, setPaymentData] = useState([]);
    const [loader, setLoader] = useState(true);

    const [formData, setFormData] = useState({
        payment_datetime: "",
        payment_method: "انتقال وجه کارت به کارت",
        transaction_id: "",
        amount: "",
        payment_status: "ایجاد شده",
        invoice_id: ""
    });

    useEffect(() => {
        getAllPayments();
    }, []);

    const getAllPayments = async () => {
        try {
            const response = await fetch(`${authContext.baseUrl}/payments`);
            const data = await response.json();

            if (response.status === 200) {
                setPaymentData(data);
            }
        } catch (error) {
            console.error("Error fetching payments:", error);
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

        const response = await fetch(`${authContext.baseUrl}/payments`, {
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
                title: "پرداخت با موفقیت ثبت شد",
                icon: "success",
                buttons: "باشه",
            });
            getAllPayments();
            setFormData({
                payment_datetime: "",
                payment_method: "انتقال وجه کارت به کارت",
                transaction_id: "",
                amount: "",
                payment_status: "ایجاد شده",
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

    const showInvoiceInfo = (invoice) => {
        swal({
            title: `اطلاعات فاکتور`,
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
                const response = await fetch(`${authContext.baseUrl}/payments/${id}`, {
                    method: "DELETE",
                    credentials: "include",
                });

                if (response.status === 200) {
                    swal("پرداخت با موفقیت حذف شد!", { icon: "success" });
                    getAllPayments();
                } else {
                    swal("خطا در حذف", { icon: "error" });
                }
            }
        });
    };

    const handleEdit = (payment) => {
        console.log(payment);

    };

    return (
        <>
            {loader ? (
                <Spinner className="h-8 w-8 mx-auto mt-16" />
            ) : (
                <div className="container mx-auto p-6">

                    <Card className="w-full max-w-xl mx-auto p-6 mb-16 bg-white shadow-lg rounded-md">
                        <Typography variant="h5" className="text-center text-gray-900 font-bold mb-4">
                            ثبت پرداخت جدید
                        </Typography>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div>
                                <Typography variant="small" className="mb-2 text-right font-medium text-gray-900">تاریخ پرداخت</Typography>
                                <Input type="datetime-local" color="gray" size="lg" name="payment_datetime" value={formData.payment_datetime} onChange={handleChange} />
                            </div>

                            <div>
                                <Typography variant="small" className="mb-2 text-right font-medium text-gray-900">روش پرداخت</Typography>
                                <Select
                                    name="payment_method"
                                    value={formData.payment_method}
                                    onChange={(val) => setFormData({ ...formData, payment_method: val })}
                                >
                                    <Option value="انتقال وجه کارت به کارت">انتقال وجه کارت به کارت</Option>
                                    <Option value="انتقال وجه ساتنا">انتقال وجه ساتنا</Option>
                                    <Option value="انتقال وجه پایا">انتقال وجه پایا</Option>
                                    <Option value="پرداخت اینترنتی">پرداخت اینترنتی</Option>
                                    <Option value="سایر">سایر</Option>
                                </Select>

                            </div>

                            <div>
                                <Typography variant="small" className="mb-2 text-right font-medium text-gray-900">شناسه تراکنش</Typography>
                                <Input color="gray" size="lg" name="transaction_id" value={formData.transaction_id} onChange={handleChange} />
                            </div>

                            <div>
                                <Typography variant="small" className="mb-2 text-right font-medium text-gray-900">مبلغ (تومان)</Typography>
                                <Input type="number" color="gray" size="lg" name="amount" value={formData.amount} onChange={handleChange} />
                            </div>

                            <div>
                                <Typography variant="small" className="mb-2 text-right font-medium text-gray-900">شناسه فاکتور</Typography>
                                <Input color="gray" size="lg" name="invoice_id" value={formData.invoice_id} onChange={handleChange} />
                            </div>

                            <Button type="submit" className="w-full bg-blue-gray-900 text-white">
                                {loading ? <Spinner className="inline h-4 w-4" /> : "ثبت پرداخت"}
                            </Button>
                        </form>
                    </Card>


                    <Card className="h-full w-full overflow-scroll">
                        <Typography variant="h5" className="text-center text-gray-900 font-bold mb-4">
                            لیست پرداخت‌ها
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
                                {paymentData.map((payment, index) => (
                                    <tr key={payment.id}>
                                        <td className="p-4">{payment.payment_datetime}</td>
                                        <td className="p-4">{payment.payment_method}</td>
                                        <td className="p-4">{payment.transaction_id}</td>
                                        <td className="p-4">{payment.amount.toLocaleString()}</td>
                                        <td className="p-4">{payment.payment_status}</td>
                                        <td className="p-4">
                                            <Button size="sm" onClick={() => showInvoiceInfo(payment.invoice)}>نمایش</Button>
                                        </td>
                                        <button className="p-2 ml-2 pl-3 rounded-full bg-blue-gray-900 text-white text-xl" onClick={() => handleEdit(payment)}>
                                            <FaEdit />
                                        </button>
                                        <button className="p-2 rounded-full bg-red-600 text-white text-xl" onClick={() => handleDelete(payment.id)}>
                                            <MdDelete />
                                        </button>
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

export default Payments;
