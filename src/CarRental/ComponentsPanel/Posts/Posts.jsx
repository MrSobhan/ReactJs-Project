import React, { useEffect, useState, useContext } from "react";
import AuthContext from "../../context/authContext";
import swal from "sweetalert";
import { MdDelete } from "react-icons/md";
import { FaEdit, FaPlus, FaSearch } from "react-icons/fa";
import { Card, Typography, Spinner, Button, Input, Textarea, Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";

const TABLE_HEAD = ["تصویر شاخص", "موضوع", "محتوا", "شناسه ادمین", ""];

const Posts = () => {
    const authContext = useContext(AuthContext);
    const [postsData, setPostsData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loaderPosts, setLoaderPosts] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);
    const [idForUpdate, setIdForUpdate] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const [formData, setFormData] = useState({
        thumbnail: "",
        subject: "",
        content: "",
        admin_id: authContext.user.ID,
    });

    useEffect(() => {
        getAllPosts();
    }, []);

    const getAllPosts = async () => {
        setLoaderPosts(true);
        const response = await fetch(`${authContext.baseUrl}/posts`);
        const postsRes = await response.json();

        if (response.status === 200) {
            setLoaderPosts(false);
            setPostsData(postsRes);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        console.log(formData);

        let response = null;

        if (isUpdate) {

            console.log("Update...");


            response = await fetch(`${authContext.baseUrl}/posts/${idForUpdate}`, {
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
            response = await fetch(`${authContext.baseUrl}/posts`, {
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
                    title: "پست با موفقیت اضافه شد",
                    icon: "success",
                    buttons: "باشه",
                }).then(() => {
                    setFormData({
                        thumbnail: "",
                        subject: "",
                        content: "",
                        admin_id: authContext.user.ID,
                    })
                    getAllPosts();
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

    const ShowContent = (content) => {
        swal({
            title: content,
            icon: "info",
            buttons: "بستن",
        });
    }

    const handleDelete = async (id) => {
        swal({
            title: "آیا مطمئن هستید؟",
            text: "این عملیات قابل بازگشت نیست!",
            icon: "warning",
            buttons: ["لغو", "حذف"],
            dangerMode: true,
        }).then(async (willDelete) => {
            if (willDelete) {
                const response = await fetch(`${authContext.baseUrl}/posts/${id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "accept": "application/json",
                        "Authorization": `Bearer ${authContext.user.access_token}`,
                        "Authorization-Refresh": `Bearer ${authContext.user.refresh_token}`
                    },
                });

                if (response.status === 200) {
                    swal({ title: "بلاگ با موفقیت حذف شد!", icon: "success", buttons: "باشه", });
                    getAllPosts();
                } else {
                    swal({ title: "خطا در حذف", icon: "error", buttons: "باشه", });
                }
            }
        });
    };

    const handleEdit = (post) => {
        console.log(post);

        setIsUpdate(true)

        setIdForUpdate(post.id)

        setFormData({
            thumbnail: post.thumbnail,
            subject: post.subject,
            content: post.content,
            admin_id: authContext.user.ID,
        })
        setOpenModal(true);
    };

    const handleOpenModal = () => {
        setIsUpdate(false);
        setFormData({
            thumbnail: "",
            subject: "",
            content: "",
            admin_id: authContext.user.ID,
        });
        setOpenModal(true);
    };

    const filteredPosts = postsData.filter(post =>
        post.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            {loaderPosts ? (
                <Spinner className="h-8 w-8 mx-auto mt-16" />
            ) : (
                <div className="container mx-auto">
                    
                    {/* Header with Add Button and Search */}
                    <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                        <Typography variant="h4" className="lalezar dark:text-white">
                            مدیریت وبلاگ‌ها
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
                                <FaPlus /> افزودن پست
                            </Button>
                        </div>
                    </div>

                    <Card className="h-full w-full overflow-scroll dark:bg-gray-800">
                        <table className="w-full min-w-max table-auto text-right">
                            <thead>
                                <tr>
                                    {TABLE_HEAD.map((head) => (
                                        <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                            <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70 dark:text-white">
                                                {head}
                                            </Typography>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {filteredPosts.map((post, index) => {
                                    const classes = "p-4 border-b border-blue-gray-50 dark:border-gray-600";

                                    return (
                                        <tr key={post.id}>
                                            <td className={classes}>
                                                <img src={'../'+post.thumbnail} alt="thumbnail" className="w-16 h-16 object-cover rounded-md" />
                                            </td>
                                            <td className={classes}>
                                                <Typography className="dark:text-white">{post.subject}</Typography>
                                            </td>
                                            <td className={classes}>
                                                <Button onClick={() => ShowContent(post.content)}>نمایش محتوا</Button>
                                            </td>
                                            <td className={classes}>
                                                <Typography className="dark:text-white">{post.admin_id}</Typography>
                                            </td>
                                            <td className={classes}>
                                                <button className="p-2 ml-2 pl-3 rounded-full bg-blue-gray-900 text-white text-xl" onClick={() => handleEdit(post)}>
                                                    <FaEdit />
                                                </button>
                                                <button className="p-2 rounded-full bg-blue-gray-900 text-white text-xl" onClick={() => handleDelete(post.id)}>
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
                            {isUpdate ? "ویرایش پست" : "افزودن پست جدید"}
                        </DialogHeader>
                        <DialogBody className="max-h-[70vh] overflow-y-auto dark:bg-gray-800">
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <div>
                                    <Typography variant="small" className="mb-2 text-right font-medium text-gray-900 dark:text-white">
                                        لینک تصویر شاخص
                                    </Typography>
                                    <Input color="gray" size="lg" name="thumbnail" value={formData.thumbnail} onChange={handleChange} className="dark:text-white" />
                                </div>

                                <div>
                                    <Typography variant="small" className="mb-2 text-right font-medium text-gray-900 dark:text-white">
                                        موضوع
                                    </Typography>
                                    <Input color="gray" size="lg" name="subject" value={formData.subject} onChange={handleChange} className="dark:text-white" />
                                </div>

                                <div>
                                    <Typography variant="small" className="mb-2 text-right font-medium text-gray-900 dark:text-white">
                                        محتوا
                                    </Typography>
                                    <div className="w-full">
                                        <Textarea label="" name="content" value={formData.content} onChange={handleChange} className="iransans dark:text-white"/>
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

export default Posts;
