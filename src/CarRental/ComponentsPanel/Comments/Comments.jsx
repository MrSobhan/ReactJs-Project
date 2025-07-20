import React, { useEffect, useState, useContext } from "react";
import { Card, Typography, Spinner, Button, Input, Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";
import { MdDelete } from "react-icons/md";
import { FaEdit, FaSearch } from "react-icons/fa";
import AuthContext from "../../context/authContext";
import swal from "sweetalert";
import { TbStatusChange } from "react-icons/tb";

const TABLE_HEAD = ["موضوع", "محتوا", "وضعیت", "شناسه مشتری", ""];

const Comments = () => {
    const authContext = useContext(AuthContext);
    const [commentsData, setCommentsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [openStatusModal, setOpenStatusModal] = useState(false);
    const [selectedComment, setSelectedComment] = useState(null);

    useEffect(() => {
        getAllComments();
    }, []);

    const getAllComments = async () => {
        const response = await fetch(`${authContext.baseUrl}/comments`);
        const commentsRes = await response.json();

        if (response.status === 200) {
            setLoading(false);
            setCommentsData(commentsRes);
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
                const response = await fetch(`${authContext.baseUrl}/comments/${id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${authContext.user.access_token}`,
                        "Authorization-Refresh": `Bearer ${authContext.user.refresh_token}`
                    },
                });

                if (response.status === 200) {
                    swal({ title: "کامنت با موفقیت حذف شد!", icon: "success", buttons: "باشه" });
                    getAllComments();
                } else {
                    swal({ title: "خطا در حذف", icon: "error", buttons: "باشه" });
                }
            }
        });
    };

    const handleStatusChange = async (comment) => {
        setSelectedComment(comment);
        setOpenStatusModal(true);
    };

    const updateCommentStatus = async (newStatus) => {
        const response = await fetch(`${authContext.baseUrl}/comments/${selectedComment.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${authContext.user.access_token}`,
                "Authorization-Refresh": `Bearer ${authContext.user.refresh_token}`
            },
            body: JSON.stringify({ status: newStatus }),
        });

        if (response.status === 200) {
            swal({ title: "وضعیت با موفقیت تغییر کرد!", icon: "success", buttons: "باشه" });
            getAllComments();
            setOpenStatusModal(false);
        } else {
            swal({ title: "خطا در تغییر وضعیت", icon: "error", buttons: "باشه" });
        }
    };

    const filteredComments = commentsData.filter(comment =>
        comment.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        comment.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            {loading ? (
                <Spinner className="h-8 w-8 mx-auto mt-16" />
            ) : (
                <div className="container mx-auto p-6">
                    
                    {/* Header with Search */}
                    <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                        <Typography variant="h4" className="lalezar">
                            مدیریت کامنت‌ها
                        </Typography>
                        <div className="relative">
                            <Input
                                type="text"
                                placeholder="جستجو در کامنت‌ها..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10"
                            />
                            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
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
                                {filteredComments.map((comment, index) => {
                                    const isLast = index === filteredComments.length - 1;
                                    const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                                    return (
                                        <tr key={comment.id}>
                                            <td className={classes}>
                                                <Typography variant="small" color="blue-gray" className="font-normal">
                                                    {comment.subject}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography variant="small" color="blue-gray" className="font-normal">
                                                    {comment.content}
                                                </Typography>
                                            </td>
                                            <td className={"flex w-max items-center justify-center " + classes}>
                                                <Typography variant="small" color="blue-gray" className="font-normal">
                                                    {comment.status === "pending" ? "در انتظار بررسی" :
                                                     comment.status === "approved" ? "تأیید شده" :
                                                     comment.status === "rejected" ? "رد شده" :
                                                     "اسپم"}
                                                </Typography>
                                                <button
                                                    className="p-2 mr-3 rounded-full bg-blue-gray-900 text-white text-xl"
                                                    onClick={() => handleStatusChange(comment)}
                                                >
                                                    <TbStatusChange />
                                                </button>
                                            </td>
                                            <td className={classes}>
                                                <Typography variant="small" color="blue-gray" className="font-normal">
                                                    {comment.id}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <button
                                                    className="p-2 rounded-full bg-blue-gray-900 text-white text-xl"
                                                    onClick={() => handleDelete(comment.id)}
                                                >
                                                    <MdDelete />
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </Card>
                    
                    {/* Status Change Modal */}
                    <Dialog open={openStatusModal} handler={() => setOpenStatusModal(false)}>
                        <DialogHeader className="text-right">
                            تغییر وضعیت کامنت
                        </DialogHeader>
                        <DialogBody>
                            <Typography className="mb-4">
                                وضعیت جدید را انتخاب کنید:
                            </Typography>
                            <div className="flex flex-col gap-2">
                                <Button 
                                    variant="outlined" 
                                    onClick={() => updateCommentStatus('pending')}
                                    className="text-right"
                                >
                                    در انتظار بررسی
                                </Button>
                                <Button 
                                    variant="outlined" 
                                    onClick={() => updateCommentStatus('approved')}
                                    className="text-right"
                                >
                                    تأیید شده
                                </Button>
                                <Button 
                                    variant="outlined" 
                                    onClick={() => updateCommentStatus('rejected')}
                                    className="text-right"
                                >
                                    رد شده
                                </Button>
                                <Button 
                                    variant="outlined" 
                                    onClick={() => updateCommentStatus('spam')}
                                    className="text-right"
                                >
                                    اسپم
                                </Button>
                            </div>
                        </DialogBody>
                        <DialogFooter>
                            <Button variant="text" color="red" onClick={() => setOpenStatusModal(false)}>
                                لغو
                            </Button>
                        </DialogFooter>
                    </Dialog>
                </div>
            )}
        </>
    );
};

export default Comments;
