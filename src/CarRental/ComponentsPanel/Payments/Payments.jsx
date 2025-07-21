import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/authContext";
import swal from "sweetalert";
import { Card, Typography, Spinner, Button, Input } from "@material-tailwind/react";
import { MdDelete } from "react-icons/md";
import { FaEdit, FaSearch } from "react-icons/fa";


const TABLE_HEAD = ["تاریخ پرداخت", "روش پرداخت", "شناسه تراکنش", "مبلغ", "وضعیت پرداخت", "فاکتور"];

const Payments = () => {
    const authContext = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [paymentData, setPaymentData] = useState([]);
    const [loader, setLoader] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");


    useEffect(() => {
        getAllPayments();
    }, []);

    const getAllPayments = async () => {
        try {
            const response = await fetch(`${authContext.baseUrl}/payments` , {
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
                setPaymentData(data);
            }
        } catch (error) {
            console.error("Error fetching payments:", error);
        } finally {
            setLoader(false);
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
                    headers: {
                        "Content-Type": "application/json",
                        "accept": "application/json",
                        "Authorization" : `Bearer ${authContext.user.access_token}`,
                        "Authorization-Refresh" : `Bearer ${authContext.user.refresh_token}`
                    },
                });

                if (response.status === 200) {
                    swal({title:"پرداخت با موفقیت حذف شد!",  icon: "success" ,buttons: "باشه",});
                    getAllPayments();
                } else {
                    swal({title:"خطا در حذف",  icon: "error" ,buttons: "باشه",});
                }
            }
        });
    };

    const handleEdit = (payment) => {
        console.log(payment);

    };

    const filteredPayments = paymentData.filter(payment =>
        payment.payment_method.toLowerCase().includes(searchTerm.toLowerCase()) ||
        payment.payment_status.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (payment.transaction_id && payment.transaction_id.toString().includes(searchTerm))
    );

    return (
        <>
            {loader ? (
                <Spinner className="h-8 w-8 mx-auto mt-16" />
            ) : (
                <div className="container mx-auto p-6">

                    {/* Header with Search */}
                    <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                        <Typography variant="h4" className="lalezar dark:text-white">
                            مدیریت پرداخت‌ها
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
                                {filteredPayments.map((payment, index) => {
                                    const classes = "p-4 border-b border-blue-gray-50 dark:border-gray-600";
                                    
                                    return (
                                    <tr key={payment.id}>
                                        <td className={classes}>
                                            <Typography className="dark:text-white">{payment.payment_datetime}</Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography className="dark:text-white">{payment.payment_method}</Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography className="dark:text-white">{payment.transaction_id}</Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography className="dark:text-white">{payment.amount.toLocaleString()}</Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography className="dark:text-white">{payment.payment_status}</Typography>
                                        </td>
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
                                )})}
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
