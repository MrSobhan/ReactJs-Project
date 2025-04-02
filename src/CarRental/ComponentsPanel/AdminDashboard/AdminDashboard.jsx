import React, { useEffect, useState, useContext } from "react";
import { Card, Typography, Spinner } from "@material-tailwind/react";
import {
    FaCar, FaComments, FaBlog, FaFileInvoice,
    FaMoneyBill, FaUsers, FaUserShield
} from "react-icons/fa";
import { Doughnut, Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import AuthContext from "../../context/authContext";

Chart.register(...registerables);

const AdminDashboard = () => {
    const authContext = useContext(AuthContext);
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchDashboardData();
    }, []);

    const fetchDashboardData = async () => {
        const response = await fetch(`${ authContext.baseUrl }/`);
        const data = await response.json();
        if (response.status === 200) {
            setStats(data);
            setLoading(false);
        }
    };

    const cards = [
        { title: "تعداد خودروها", value: stats?.cars, icon: <FaCar />, color: "bg-blue-500" },
        { title: "تعداد کامنت‌ها", value: stats?.comments, icon: <FaComments />, color: "bg-yellow-500" },
        { title: "تعداد وبلاگ‌ها", value: stats?.blogs, icon: <FaBlog />, color: "bg-green-500" },
        { title: "تعداد فاکتورها", value: stats?.invoices, icon: <FaFileInvoice />, color: "bg-red-500" },
        { title: "پرداختی‌های روزانه", value: stats?.payments, icon: <FaMoneyBill />, color: "bg-purple-500" },
        { title: "تعداد مشتریان", value: stats?.customers, icon: <FaUsers />, color: "bg-cyan-500" },
        { title: "تعداد ادمین‌ها", value: stats?.admins, icon: <FaUserShield />, color: "bg-pink-500" },
    ];

    const chartData = {
        labels: ["پرداختی‌ها", "فاکتورها", "وبلاگ‌ها", "کامنت‌ها", "خودروها"],
        datasets: [
            {
                label: "آمار",
                data:[10, 20, 15, 30, 25] , //[stats?.payments, stats?.invoices, stats?.blogs, stats?.comments, stats?.cars]
                backgroundColor: ["#6366F1", "#F43F5E", "#22C55E", "#F59E0B", "#3B82F6"],
                hoverOffset: 6,
            },
        ],
    };

    const lineChartData = {
        labels: ["شنبه", "یک‌شنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه"],
        datasets: [
            {
                label: "پرداختی‌های روزانه",
                data: [10, 20, 15, 30, 25, 40, 35],
                borderColor: "#3B82F6",
                backgroundColor: "rgba(59, 130, 246, 0.2)",
                borderWidth: 2,
                fill: true,
                tension: 0.4,
            },
        ],
    };

    return (
        <div className="container mx-auto p-6">
            {loading ? (
                <Spinner className="h-8 w-8 mx-auto mt-16" />
            ) : (
                <>

                    <Typography variant="h4" className="text-center text-blue-gray-900 font-bold mb-6 lalezar">
                        داشبورد مدیریت
                    </Typography>


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {cards.map((card, index) => (
                            <Card key={index} className="p-6 shadow-md flex items-center justify-between text-blue-gray-900 rounded-lg">
                                <div className={`p-4 text-3xl rounded-full text-white mb-3 bg-blue-gray-900`}>
                                    {card.icon}
                                </div>
                                <div>
                                    <Typography variant="h6" className="lalezar">{card.title}</Typography>
                                    <Typography variant="h4" className="font-bold text-center">44</Typography>
                                </div>
                            </Card>
                        ))}
                </div>


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                <Card className="p-6 shadow-md bg-white !max-h-max">
                    <Typography variant="h6" className="text-center text-blue-gray-900 font-semibold mb-4 lalezar">
                        توزیع اطلاعات کلی
                    </Typography>
                    <Doughnut data={chartData} />
                </Card>


                <Card className="p-6 shadow-md bg-white !max-h-max">
                    <Typography variant="h6" className="text-center text-blue-gray-900 font-semibold mb-4 lalezar">
                        روند پرداختی‌های روزانه
                    </Typography>
                    <Line data={lineChartData} />
                </Card>
            </div>
        </>
    )
}
        </div >
    );
};

export default AdminDashboard;