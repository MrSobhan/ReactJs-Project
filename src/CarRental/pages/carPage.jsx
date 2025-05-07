import React, { useEffect, useContext, useState } from 'react';
import { NavbarDefault } from '../Components/Navbar/Navbar';
import { Footer } from '../Components/Footer/Footer';
import DefaultAccordion from '../Components/FAQs/FAQs';
import { useParams, useNavigate } from 'react-router-dom';
import AuthContext from "../context/authContext";
import swal from "sweetalert";
import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
    Carousel,
    Button,
    Input,
    Textarea,
    Breadcrumbs
} from "@material-tailwind/react";

import { Rating } from "@material-tailwind/react";
import { LiaTelegram } from "react-icons/lia";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLocationDot, FaBookOpen } from "react-icons/fa6";
import { IoIosApps, IoIosTimer } from "react-icons/io";
import { PiStarFill, PiStarBold } from "react-icons/pi";
import { Spinner } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const CarPage = () => {
    const authContext = useContext(AuthContext)
    const { carId } = useParams()
    const [singleCarData, setSingleCarData] = useState([])
    const [isLoginUser, setIsLoginUser] = useState(false)
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        authContext.isLogin() && setIsLoginUser(true)
        getOneCar()
    }, [])

    const getOneCar = async () => {
        const response = await fetch(`${authContext.baseUrl}/vehicles/${carId}`);

        const carRes = await response.json();



        if (response.status === 200) {
            setSingleCarData(carRes)
        }
    }



    const RentalHandle = async () => {

        if (isLoginUser) {

            setLoading(true)

            const responseInvoices = await fetch(`${authContext.baseUrl}/invoices`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "accept": "application/json",
                    "Authorization": `Bearer ${authContext.user.access_token}`,
                    "Authorization-Refresh": `Bearer ${authContext.user.refresh_token}`
                },
            });

            const ResInvoices = await responseInvoices.json();


            if (responseInvoices.status === 200) {


                let invoicesUser = ResInvoices.find((inv) => inv.status == "ایجاد شده")

                let invoicesId = invoicesUser && invoicesUser.id


                if (!invoicesUser) {
                    console.log("Create invoices...");

                    const bodyInvoicesPost = {
                        "total_amount": 0,
                        "tax": 0,
                        "discount": 0,
                        "final_amount": 0,
                        "status": "ایجاد شده"
                    }

                    const responseInvoicesPost = await fetch(`${authContext.baseUrl}/invoices`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "accept": "application/json",
                            "Authorization": `Bearer ${authContext.user.access_token}`,
                            "Authorization-Refresh": `Bearer ${authContext.user.refresh_token}`
                        },
                        body: JSON.stringify(bodyInvoicesPost)
                    });

                    const ResInvoicesPost = await responseInvoicesPost.json();

                    if (responseInvoicesPost.status === 200) {
                        invoicesId = ResInvoicesPost.id
                    }

                }

                // ? Create Rental

                console.log("Create Rental...");

                const bodyCreateRental = {
                    "rental_start_date": "1404/03/03",
                    "rental_end_date": "1404/07/07",
                    "total_amount": 1000,
                    "customer_id": authContext.user.ID,
                    "vehicle_id": singleCarData.id,
                    "invoice_id": invoicesId
                }


                const responseCreateRental = await fetch(`${authContext.baseUrl}/rentals`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "accept": "application/json",
                        "Authorization": `Bearer ${authContext.user.access_token}`,
                        "Authorization-Refresh": `Bearer ${authContext.user.refresh_token}`
                    },
                    body: JSON.stringify(bodyCreateRental)
                });

                if (responseCreateRental.status === 200) {

                    setLoading(false)
                    swal({
                        title: "با موفقیت به سبد اجارات شما اضافه شد",
                        icon: "success",
                        buttons: "باشه",
                    })
                    getOneCar()
                }

            }


        } else {
            swal({
                title: "برای اجاره ابتدا وارد شوید",
                icon: "success",
                buttons: "صفحه ورود",
            }).then((value) => {
                navigate("/login");
            });
        }

    }
    return (
        <>
            <NavbarDefault />
            <div className="container mx-auto lg:w-[80%] w-[90%] pt-24">
                <Carousel className="rounded-xl w-full overflow-hidden mb-14">
                    <img
                        src={'../' + singleCarData.local_image_address}
                        alt="image 1"
                        className="max-h-[600px] w-full object-cover"
                    />
                </Carousel>
                <div className="lg:mb-16 mb-4 container mx-auto grid lg:gap-x-8 gap-y-8 grid-cols-1 lg:grid-cols-3 gap-x-4 w-full relative">
                    <div className=" col-span-1 md:col-span-2 shadow-lg rounded-xl py-9 px-7 h-max flex flex-col gap-y-10">
                        <Breadcrumbs className=' bg-white'>
                            <Link to="/" className="opacity-60">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                </svg>
                            </Link>
                            <Link to="/carList" className="opacity-60">
                                <span>خودرو ها</span>
                            </Link>
                            <Link to="#">{singleCarData.brand} {singleCarData.model}</Link>
                        </Breadcrumbs>
                        <h1 className='text-3xl'>{singleCarData.brand} {singleCarData.model}<sub className='text-lg'>(۲۰۱۹ - {singleCarData.year})</sub></h1>
                        <div className='flex items-center justify-start gap-x-2'>
                            <span>نظرات کاربران : <PiStarFill className='inline mx-0 text-lg text-yellow-600' /><PiStarFill className='inline mx-0 text-lg text-yellow-600' /><PiStarFill className='inline mx-0 text-lg text-yellow-600' /><PiStarFill className='inline mx-0 text-lg text-yellow-600' /><PiStarBold className='inline mx-0 text-lg' /></span>
                        </div>

                        <div className="w-full">
                            <Timeline>
                                <TimelineItem>
                                    <TimelineConnector />
                                    <TimelineHeader>
                                        <TimelineIcon className="p-2">
                                            <FaLocationDot />
                                        </TimelineIcon>
                                        <Typography variant="h5" color="blue-gray">
                                            <p>محل خودرو و تحویل</p>
                                        </Typography>
                                    </TimelineHeader>
                                    <TimelineBody className="pb-8">
                                        <Typography color="gary" className="font-blod mt-3 text-gray-600">
                                            استان {singleCarData.location}
                                        </Typography>
                                        <Typography color="gary" className="font-blod mt-3 text-gray-600">
                                            وضعیت خودرو : {singleCarData.status}
                                        </Typography>
                                    </TimelineBody>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineConnector />
                                    <TimelineHeader>
                                        <TimelineIcon className="p-2">
                                            <FaBookOpen />
                                        </TimelineIcon>
                                        <Typography variant="h5" color="blue-gray">
                                            <p>شرایط اجاره و کنسلی</p>
                                        </Typography>
                                    </TimelineHeader>
                                    <TimelineBody className="pb-8">
                                        <Typography color="gary" className="font-normal text-gray-600">
                                            🔴 گواهینامه معتبر. <br />
                                            🟠 افراد بالای ۲۴ سال. 🚻<br />
                                            🔘 مدارک شغلی و سکونتی. 📜<br />
                                            🟤 چک یا سفته به مبلغ ماشین. 📝<br />
                                            🟣 بیمه‌نامه اجاره فقط طرح الماس 🗒<br />
                                            ⚪️ ودیعه نقدی به مبلغ: ۷ میلیون تومان 💵<br />
                                            🔵 تحویل خودرو در کرج مهرشهر رایگان میباشد 🆓<br />
                                            🟢 تحویل یکطرفه درب منزل کرج (۲۵۰ت)🏛<br />
                                            🟡تحویل یکطرفه درب منزل در داخل تهران (۵۰۰ت)🏡<br />
                                            🟣 تحویل یکطرفه فرودگاه امام خمینی (۶۵۰ت) ✈️<br />
                                            🟥 ساعت تحویل درب منزل از ۹:۳۰ الی ۱۸:۰۰ میباشد ⏰️<br />
                                            ⛔️ محدودیت مسافت هر ۱ روز ۲۰۰ کیلومتر میباشد⛔️<br />
                                            شرایط لغو رزرو:<br />
                                            در روزهای عادی:<br />
                                            یک روز مانده به روز تحویل: ٪۲۵ مبلغ اجاره<br />
                                            از زمان رزرو تا ۲ روز قبل از روز تحویل: ٪۱۵ مبلغ اجاره<br />
                                            از زمان رزرو تا ۳ روز قبل از روز تحویل: ٪۵ مبلغ اجاره<br />
                                            بیشتر از ۳ روز مانده به روز تحویل: بدون جریمه<br />
                                            <br />
                                            <br />
                                            در تعطیلات:<br />
                                            یک روز مانده به روز تحویل: ٪۵۰ مبلغ اجاره<br />
                                            از زمان رزرو تا ۲ روز قبل از روز تحویل: ٪۲۵ مبلغ اجاره<br />
                                            از زمان رزرو تا ۳ روز قبل از روز تحویل: ٪۱۰ مبلغ اجاره<br />
                                            بیشتر از ۳ روز مانده به روز تحویل: ٪۵ مبلغ اجاره<br />

                                            تعطیلات نوروز: ( رزروهای۲۵ اسفند تا ۱۵ فروردین<br />
                                            از زمان رزرو تا ۷ روز مانده به روز تحویل ۳۰٪ مبلغ اجاره<br />
                                            کمتر از ۷ روز مانده به روز تحویل ۵۰٪ مبلغ اجاره<br />
                                        </Typography>
                                    </TimelineBody>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineHeader>
                                        <TimelineIcon className="p-2">
                                            <IoIosTimer />
                                        </TimelineIcon>
                                        <Typography variant="h5" color="blue-gray">
                                            <p>محدودیت مسافت و زمان</p>
                                        </Typography>
                                    </TimelineHeader>
                                    <TimelineBody>
                                        <Typography color="gary" className="font-normal text-gray-600">
                                            محدودیت مسافت: ۶۰۰ کیلومتر برای 3 روز<br />

                                            هزینه هر کیلومتر اضافه: ۶,۰۰۰ تومان<br />

                                            جریمه هر ساعت دیرکرد در بازتحویل: ۵۰,۰۰۰ تومان
                                        </Typography>
                                    </TimelineBody>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineHeader className='mt-5'>
                                        <TimelineIcon className="p-2">
                                            <IoIosApps />
                                        </TimelineIcon>
                                        <Typography variant="h5" color="blue-gray">
                                            <p>دسته‌بندی‌ها</p>
                                        </Typography>
                                    </TimelineHeader>
                                    <TimelineBody>
                                        <Typography color="gary" className="font-normal text-gray-600">
                                            <div class="p-2 pt-0 w-full flex items-center justify-start gap-3 flex-wrap">
                                                <button className='lg:px-4 px-2 lg:py-2 py-1 bg-blue-gray-50 rounded-lg shadow-md text-sm lg:text-md'>
                                                    {singleCarData.location}
                                                </button>
                                                <button className='lg:px-4 px-2 lg:py-2 py-1 bg-blue-gray-50 rounded-lg shadow-md text-sm lg:text-md'>
                                                    تحویل در محل
                                                </button>
                                                <button className='lg:px-4 px-2 lg:py-2 py-1 bg-blue-gray-50 rounded-lg shadow-md text-sm lg:text-md'>
                                                    ارزان
                                                </button>
                                                <button className='lg:px-4 px-2 lg:py-2 py-1 bg-blue-gray-50 rounded-lg shadow-md text-sm lg:text-md'>
                                                    رزرو خودرو
                                                </button>
                                                <button className='lg:px-4 px-2 lg:py-2 py-1 bg-blue-gray-50 rounded-lg shadow-md text-sm lg:text-md'>
                                                    ایران
                                                </button>
                                                <button className='lg:px-4 px-2 lg:py-2 py-1 bg-blue-gray-50 rounded-lg shadow-md text-sm lg:text-md'>
                                                    اجاره خودرو
                                                </button>
                                                <button className='lg:px-4 px-2 lg:py-2 py-1 bg-blue-gray-50 rounded-lg shadow-md text-sm lg:text-md'>
                                                    نو
                                                </button>
                                            </div>
                                        </Typography>
                                    </TimelineBody>
                                </TimelineItem>
                            </Timeline>
                            <h3 className="titleSlider lalezar mr-3 mt-16">ارتباط با ما</h3>
                            <form
                                action="#"
                                className="flex flex-col gap-4 w-full mt-10"
                            >
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <Typography
                                            variant="small"
                                            className="mb-2 text-right font-medium !text-gray-900"
                                        >
                                            نام
                                        </Typography>
                                        <Input
                                            color="gray"
                                            size="lg"
                                            name="first-name"
                                            className="focus:border-t-gray-900"
                                            containerProps={{
                                                className: "min-w-full",
                                            }}
                                            labelProps={{
                                                className: "hidden",
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <Typography
                                            variant="small"
                                            className="mb-2 text-right font-medium !text-gray-900"
                                        >
                                            نام خانوادگی
                                        </Typography>
                                        <Input
                                            color="gray"
                                            size="lg"
                                            name="last-name"
                                            className="focus:border-t-gray-900"
                                            containerProps={{
                                                className: "!min-w-full",
                                            }}
                                            labelProps={{
                                                className: "hidden",
                                            }}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <Typography
                                        variant="small"
                                        className="mb-2 text-right font-medium !text-gray-900"
                                    >
                                        ایمیل
                                    </Typography>
                                    <Input
                                        color="gray"
                                        size="lg"
                                        name="email"
                                        className="focus:border-t-gray-900"
                                        containerProps={{
                                            className: "!min-w-full",
                                        }}
                                        labelProps={{
                                            className: "hidden",
                                        }}
                                    />
                                </div>
                                <div>
                                    <Typography
                                        variant="small"
                                        className="mb-2 text-right font-medium !text-gray-900"
                                    >
                                        متن نظر
                                    </Typography>
                                    <Textarea
                                        rows={6}
                                        color="gray"
                                        name="message"
                                        className="focus:border-t-gray-900"
                                        containerProps={{
                                            className: "!min-w-full",
                                        }}
                                        labelProps={{
                                            className: "hidden",
                                        }}
                                    />
                                </div>
                                <Button className="w-full" color="gray">
                                    ارسال نظرات
                                </Button>
                            </form>
                        </div>
                    </div>
                    <div className=" col-span-1 md:col-span-1 shadow-lg rounded-xl sticky max-h-max top-20 left-0">
                        <div
                            class="relative rounded-xl overflow-hidden flex flex-col items-center shadow-lg bg-white font-Roboto-light"
                        >
                            <div class="h-24 w-full bg-blue-gray-900"></div>
                            <div class="top-16 z-10 flex items-center flex-col gap-4 px-5 py-5">
                                <div class="-mt-20">
                                    <img src="/img/4.jpg" alt="Admin Profile" className='w-20 rounded-full ' />
                                </div>

                                <div class="flex items-center flex-col">
                                    <p title="name/نام" class="text-black font-Roboto-md">محمد کاظمی</p>
                                    <p title="bio/بیوگرافی" class="text-xs text-gray-500 font-medium mt-2">
                                        از دی 99 عضو <span className='lalezar'>سوارینا</span> است.
                                    </p>
                                </div>
                                <div class="flex items-center flex-col mt-4">
                                    <p title="name/نام" class="text-black font-Roboto-md text-3xl lalezar">{Number(singleCarData.hourly_rental_rate).toLocaleString()}<sup className='text-xs text-blue-gray-600'>تومان</sup></p>
                                    <p title="bio/بیوگرافی" class="text-xs text-gray-500 font-medium">
                                        در هر ساعت
                                    </p>
                                </div>

                                <div class="flex items-center gap-3 mt-4">
                                    <button
                                        class="bg-gray-200/65 hover:bg-gray-200 transition-colors p-2 rounded-full"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="w-5 h-5"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                                            ></path>
                                        </svg>
                                    </button>
                                    <button
                                        class="bg-gray-200/65 hover:bg-gray-200 transition-colors p-2 rounded-full"
                                    >
                                        <LiaTelegram className='text-lg' />
                                    </button>
                                    <button
                                        class="bg-gray-200/65 hover:bg-gray-200 transition-colors p-2 rounded-full"
                                    >
                                        <AiOutlineInstagram className='text-lg' />
                                    </button>
                                </div>

                                {
                                    singleCarData.status == "موجود" ? (
                                        <div class="flex items-center flex-col mt-4">
                                            <p title="name/نام" class="text-black font-Roboto-md text-xs text-center">هزینه را بعد از پذیرش درخواست توسط میزبان پرداخت خواهید کرد.</p>
                                            <Button className='w-full mt-3' onClick={RentalHandle}>
                                                {loading ? <Spinner className="inline h-4 w-4" /> : "ادامه"}
                                            </Button>
                                        </div>
                                    ) : (
                                        <div class="flex items-center flex-col mt-4">
                                            <p title="name/نام" class="text-black font-Roboto-md text-xs text-center">هزینه را بعد از پذیرش درخواست توسط میزبان پرداخت خواهید کرد.</p>
                                            <Button className='w-full mt-3'>این خودرو موجود نمی باشد.</Button>
                                        </div>
                                    )
                                }


                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <DefaultAccordion />
            <Footer />
        </>
    );
}


export default CarPage;