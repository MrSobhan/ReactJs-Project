import React, { useContext, useState } from "react";
import { FiUpload } from "react-icons/fi";
import { MdBackup } from "react-icons/md";
import swal from "sweetalert";
import AuthContext from "../../context/authContext";
import "./BackUp.css";

const BackUp = () => {
    const authContext = useContext(AuthContext);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [uploading, setUploading] = useState(false);

    const handleBackup = async () => {
        try {
            const response = await fetch(`${authContext.baseUrl}/backup`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${authContext.user.access_token}`,
                    "Authorization-Refresh": `Bearer ${authContext.user.refresh_token}`
                },
            });

            if (!response.ok) throw new Error("خطا در دریافت فایل بک‌آپ");

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = `backup-${new Date().toISOString().split("T")[0]}.zip`;

            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(url);
        } catch (err) {
            console.error("Backup error:", err);
            alert("⛔ دریافت فایل بک‌آپ با مشکل مواجه شد");
        }
    };

    const handleUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append("file", file);

        const xhr = new XMLHttpRequest();

        xhr.upload.onprogress = (event) => {
            if (event.lengthComputable) {
                const percent = Math.round((event.loaded / event.total) * 100);
                setUploadProgress(percent);
            }
        };

        xhr.onload = () => {
            if (xhr.status === 200) {
                swal({
                    title: "فایل با موفقیت آپلود شد",
                    icon: "success",
                    buttons: "باشه",
                })
            } else {
                swal({
                    title: "خطا در آپلود فایل",
                    icon: "error",
                    buttons: "تلاش مجدد",
                })
            }
            setUploading(false);
            setUploadProgress(0);
        };

        xhr.onerror = () => {
            alert("❌ مشکلی در اتصال به سرور رخ داده");
            setUploading(false);
            setUploadProgress(0);
        };

        xhr.open("POST", `${authContext.baseUrl}/restore/`);
        xhr.setRequestHeader("Authorization", `Bearer ${authContext.user.access_token}`);
        xhr.setRequestHeader("Authorization-Refresh", `Bearer ${authContext.user.refresh_token}`);
        setUploading(true);
        xhr.send(formData);
    };

    return (
        <div className="container mx-auto px-4 py-10">
            <div className="flex justify-between items-center mb-6">
                <h2 className="lalezar text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2 md:mr-10">
                    <MdBackup className="text-blue-gray-900 text-3xl" />
                    مدیریت بک‌آپ
                </h2>
                <button
                    onClick={handleBackup}
                    className="flex items-center gap-2 bg-blue-gray-900 hover:scale-95 text-white px-4 py-2 rounded-md transition-all duration-300"
                >
                    <FiUpload />
                    گرفتن بک‌آپ جدید
                </button>
            </div>


            <div className="file-upload-container !mt-20">
                <div className="file-upload relative">
                    <input
                        type="file"
                        id="fileInput"
                        className="file-input"
                        onChange={handleUpload}
                    />
                    <label className="file-label" htmlFor="fileInput">
                        <i className="upload-icon">📁</i>
                        <p className="lalezar">آپلود فایل جدید دیتابیس</p>
                    </label>

                    {uploading && (
                        <div className="mt-4 w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                            <div
                                className="bg-blue-gray-900 h-4 transition-all duration-200 text-white text-sm text-center"
                                style={{ width: `${uploadProgress}%` }}
                            >
                                {uploadProgress}%
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BackUp;
