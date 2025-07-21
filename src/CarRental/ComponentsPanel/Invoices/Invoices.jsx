import React, { useEffect, useContext, useState } from "react";
import AuthContext from "../../context/authContext";
import { Card, Typography, Spinner, Select, Option, Button, Input, Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";
import { MdDelete } from "react-icons/md";
import { FaEdit, FaPlus, FaSearch } from "react-icons/fa";
import swal from "sweetalert";

const TABLE_HEAD = ["شناسه", "مبلغ کل", "مالیات", "تخفیف", "مبلغ نهایی", "وضعیت", ""];

const Invoices = () => {
    const authContext = useContext(AuthContext);
    const [invoicesData, setInvoicesData] = useState([]);
    const [loaderInvoices, setLoaderInvoices] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);
    const [idForUpdate, setIdForUpdate] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");


    const [formData, setFormData] = useState({
        total_amount: 0,
        tax: 0,
        discount: 0,
        final_amount: 0,
        status: "ایجاد شده",
    });

    useEffect(() => {
        getAllInvoices();
    }, []);

    const getAllInvoices = async () => {
        const response = await fetch(`${authContext.baseUrl}/invoices`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "accept": "application/json",
                "Authorization": `Bearer ${authContext.user.access_token}`,
                "Authorization-Refresh": `Bearer ${authContext.user.refresh_token}`
            },
        });
        const invoicesRes = await response.json();
        if (response.status === 200) {
            setLoaderInvoices(false);
            setInvoicesData(invoicesRes);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        let response = null;

        if (isUpdate) {

            console.log("Update..." , idForUpdate , formData);


            response = await fetch(`${authContext.baseUrl}/invoices/${idForUpdate}`, {
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

            response = await fetch(`${authContext.baseUrl}/invoices`, {
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
            response.json().then(() => {
                setLoading(false);
                setIsUpdate(false);
                setOpenModal(false);
                swal({
                    title: "فاکتور با موفقیت ثبت شد",
                    icon: "success",
                    buttons: "باشه",
                }).then(() => {
                    getAllInvoices();
                });
            });
        } else {
            setLoading(false);
            swal({
                title: "خطا در ثبت فاکتور",
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
                const response = await fetch(`${authContext.baseUrl}/invoices/${id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "accept": "application/json",
                        "Authorization": `Bearer ${authContext.user.access_token}`,
                        "Authorization-Refresh": `Bearer ${authContext.user.refresh_token}`
                    },
                });

                if (response.status === 200) {
                    swal({ title: "فاکتور با موفقیت حذف شد!", icon: "success", buttons: "باشه", });
                    getAllInvoices();
                } else {
                    swal({ title: "خطا در حذف", icon: "error", buttons: "باشه", });
                }
            }
        });
    };

    const handleEdit = (invoices) => {
        // console.log(invoices);

        setIsUpdate(true)

        setIdForUpdate(invoices.id)

        setFormData({
            total_amount: invoices.total_amount,
            tax: invoices.tax,
            discount: invoices.discount,
            final_amount: invoices.final_amount,
            status: invoices.status,
        })
        setOpenModal(true);
    };

    const handleOpenModal = () => {
        setIsUpdate(false);
        setFormData({
            total_amount: 0,
            tax: 0,
            discount: 0,
            final_amount: 0,
            status: "ایجاد شده",
        });
        setOpenModal(true);
    };

    const filteredInvoices = invoicesData.filter(invoice =>
        invoice.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
        invoice.id.toString().includes(searchTerm)
    );

    return (
        <>
            {loaderInvoices ? (
                <Spinner className="h-8 w-8 mx-auto mt-16" />
            ) : (
                <div className="container mx-auto">

                    {/* Header with Add Button and Search */}
                    <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                        <Typography variant="h4" className="lalezar dark:text-white">
                            مدیریت فاکتورها
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
                                <FaPlus /> افزودن فاکتور
                            </Button>
                        </div>
                    </div>

                    <Card className="h-full w-full overflow-scroll dark:bg-gray-800">
                        <table className="w-full min-w-max table-auto text-right">
                            <thead>
                                <tr>
                                    {TABLE_HEAD.map((head) => (
                                        <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 dark:bg-gray-700 dark:border-gray-600">
                                            <Typography variant="" color="blue-gray" className="font-normal leading-none opacity-70 dark:text-white">
                                                {head}
                                            </Typography>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {filteredInvoices.map((invoice, index) => {
                                    const isLast = index === filteredInvoices.length - 1;
                                    const classes = isLast ? "p-4 dark:text-white" : "p-4 border-b border-blue-gray-50 dark:border-gray-600 dark:text-white";

                                    return (
                                        <tr key={invoice.id}>
                                            <td className={classes}>
                                                <Typography variant="" color="blue-gray" className="font-normal dark:text-white">
                                                    {invoice.id}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography variant="" color="blue-gray" className="font-normal dark:text-white">
                                                    {invoice.total_amount.toLocaleString()}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography variant="" color="blue-gray" className="font-normal dark:text-white">
                                                    {invoice.tax.toLocaleString()}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography variant="" color="blue-gray" className="font-normal dark:text-white">
                                                    {invoice.discount.toLocaleString()}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography variant="" color="blue-gray" className="font-normal dark:text-white">
                                                    {invoice.final_amount.toLocaleString()}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography variant="" color="blue-gray" className="font-normal dark:text-white">
                                                    {invoice.status}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <button className="p-2 ml-2 pl-3 rounded-full bg-blue-gray-900 text-white text-xl" onClick={() => handleEdit(invoice)}>
                                                    <FaEdit />
                                                </button>
                                                <button className="p-2 rounded-full bg-blue-gray-900 text-white text-xl" onClick={() => handleDelete(invoice.id)}>
                                                    <MdDelete />
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </Card>
                    
                    {/* Modal for Add/Edit */}
                    <Dialog open={openModal} handler={() => setOpenModal(false)} size="lg" className="dark:bg-gray-800">
                        <DialogHeader className="text-right dark:text-white">
                            {isUpdate ? "ویرایش فاکتور" : "افزودن فاکتور جدید"}
                        </DialogHeader>
                        <DialogBody className="max-h-[70vh] overflow-y-auto dark:bg-gray-800">
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <div>
                                    <Typography variant="small" className="mb-2 text-right font-medium text-gray-900 dark:text-white">
                                        مبلغ کل (تومان)
                                    </Typography>
                                    <Input type="number" color="gray" size="lg" name="total_amount" value={formData.total_amount} onChange={handleChange} className="dark:text-white" />
                                </div>

                                <div>
                                    <Typography variant="small" className="mb-2 text-right font-medium text-gray-900 dark:text-white">
                                        مالیات (تومان)
                                    </Typography>
                                    <Input type="number" color="gray" size="lg" name="tax" value={formData.tax} onChange={handleChange} className="dark:text-white" />
                                </div>

                                <div>
                                    <Typography variant="small" className="mb-2 text-right font-medium text-gray-900 dark:text-white">
                                        تخفیف (تومان)
                                    </Typography>
                                    <Input type="number" color="gray" size="lg" name="discount" value={formData.discount} onChange={handleChange} className="dark:text-white" />
                                </div>

                                <div>
                                    <Typography variant="small" className="mb-2 text-right font-medium text-gray-900 dark:text-white">
                                        مبلغ نهایی (تومان)
                                    </Typography>
                                    <Input type="number" color="gray" size="lg" name="final_amount" value={formData.final_amount} onChange={handleChange} className="dark:text-white" />
                                </div>

                                <div>
                                    <Typography variant="small" className="mb-2 text-right font-medium text-gray-900 dark:text-white">
                                        وضعیت فاکتور
                                    </Typography>
                                    <Select name="status" value={formData.status} onChange={(val) => setFormData({ ...formData, status: val })}>
                                        <Option value="ایجاد شده">ایجاد شده</Option>
                                        <Option value="در انتظار تایید">در انتظار تایید</Option>
                                        <Option value="تایید شده">تایید شده</Option>
                                        <Option value="ناموفق">ناموفق</Option>
                                        <Option value="لغو شده">لغو شده</Option>
                                        <Option value="منقضی شده">منقضی شده</Option>
                                    </Select>
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

export default Invoices;
