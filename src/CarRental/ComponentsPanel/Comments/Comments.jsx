import React, { useEffect, useState , useContext } from "react";
import { Card, Typography, Spinner, Button } from "@material-tailwind/react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import AuthContext from "../../context/authContext";

const TABLE_HEAD = ["موضوع", "محتوا", "وضعیت", "شناسه مشتری", ""];

const Comments = () => {
    const authContext = useContext(AuthContext);
    const [commentsData, setCommentsData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        getAllComments();
    }, []);
    const getAllComments = async () => {

        const response = await fetch(`${authContext.baseUrl}/comments`);

        const commentsRes = await response.json();

        console.log(commentsRes);


        if (response.status === 200) {
            setLoading(false)
            setCommentsData(commentsRes)
        }
        console.log("Fetching customers...");
    };

    return (
        <>
            {loading ? (
                <Spinner className="h-8 w-8 mx-auto mt-16" />
            ) : (
                <div className="container mx-auto p-6">
                    <Typography variant="h5" className="text-center text-gray-900 font-bold mb-4">
                        لیست کامنت‌ها
                    </Typography>
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
                                {commentsData.map((comment, index) => {
                                    const isLast = index === commentsData.length - 1;
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
                                            <td className={classes}>
                                                <Typography variant="small" color={comment.status === "pending" ? "orange" : "green"} className="font-normal">
                                                    {comment.status === "pending" ? "در انتظار بررسی" : "تأیید شده"}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography variant="small" color="blue-gray" className="font-normal">
                                                    {comment.customer_id}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <button className="p-2 ml-2 pl-3 rounded-full bg-blue-gray-900 text-white text-xl">
                                                    <FaEdit />
                                                </button>
                                                <button className="p-2 rounded-full bg-red-600 text-white text-xl">
                                                    <MdDelete />
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </Card>
                </div>
            )}
        </>
    );
};

export default Comments;
