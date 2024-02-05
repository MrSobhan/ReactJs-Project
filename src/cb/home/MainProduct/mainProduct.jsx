import { React, useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import ButtonMa from "@mui/material/Button";
import Header from "../header/Header";
import Toast from 'react-bootstrap/Toast';
import Footer from '../main/footer'


import { NavLink, useParams, useNavigate } from "react-router-dom";
import { CourseList } from '../../data'
import './mainProduct.css'


const MainProduct = () => {

    const [seconds, setSeconds] = useState(3500);

    useEffect(() => {
        // Exit early if countdown is finished
        if (seconds <= 0) {
            return;
        }

        // Set up the timer
        const timer = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);

        // Clean up the timer
        return () => clearInterval(timer);
    }, [seconds]);

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60)
            .toString()
            .padStart(2, '0');
        const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
        return `${seconds} : ${minutes} : 00`;
    };





    let param = useParams()
    let navigate = useNavigate()
    let idProduct = param.idProduct
    let dataCourse = null

    let buy = false

    const [show, setShow] = useState(false);

    let dataCart = localStorage.getItem('Cart') != null ? JSON.parse(localStorage.getItem('Cart')) : []


    CourseList.forEach(course => {
        if (course.id == idProduct) {
            dataCourse = course
        }
    })

    dataCart.forEach(cart => {
        if (cart.course.name == dataCourse.name) {
            buy = true
        }
    })


    const addCourseCart = () => {
        if (localStorage.getItem("LoginUserName") != '' && localStorage.getItem("LoginUser")) {
            let _id = Math.floor(Math.random() * 100000)
            let obj = {
                id: _id,
                course: dataCourse
            }


            if (!buy) {
                dataCart.push(obj)
                localStorage.setItem('Cart', JSON.stringify(dataCart))
                setShow(true)
            }

        } else {
            navigate('/login')
        }
    }



    return (
        <>
            <Header />
            <Container>
                <Row dir="ltr" className="my-5 gy-4 gx-4">
                    <Col xs={12} lg={6}>
                        <img src={dataCourse.img} alt="" className="img-fluid round w-100 shadow imgCourseMainProduct" />

                    </Col>
                    <Col dir="rtl" xs={12} lg={6}>
                        <h1 className="moraba fs-3">{dataCourse.name.length >= 40 ? dataCourse.name.slice(0, 42) + '...' : dataCourse.name}</h1>
                        <p className="fs-5 text-muted my-4">آموزش bootstrap 5 خوش اومدین به آموزش بوت استرپ 5 سبزلرن! حتما تا الان html و css رو کامل بلدی و گذرت به اینجا افتاده. اول از... </p>
                        <Row className="ml-custom bg-secondary-low mb-4 fs-5 round px-3 py-2">
                            <Col xs={7} className="green moraba">
                                پیشنهاد شگفت انگیز
                            </Col>
                            <Col className="green dana text-start">
                                {/* {s} : {m} : {h} : {d} */}
                                {formatTime(seconds)}
                            </Col>
                        </Row>
                        <Row className="ml-custom">
                            {
                                buy == false ? (<>
                                    <Col>
                                        <ButtonMa
                                            variant="outlined"
                                            className="dana-blod round py-2 me-auto px-4"
                                            color="warning"
                                            type="button"
                                            onClick={addCourseCart}
                                        >
                                            <i className="bi bi-bookmark-check ms-2"></i>شرکت در دوره
                                        </ButtonMa>
                                    </Col>

                                </>) : (
                                    <Col>
                                        <ButtonMa
                                            variant="outlined"
                                            className="dana-blod round py-2 me-auto px-4"
                                            color="warning"
                                            type="button"
                                        >
                                            <i className="bi bi-play-circle ms-2 "></i>مشاهده دوره
                                        </ButtonMa>
                                    </Col>
                                )
                            }
                            <Col>
                                {dataCourse.price == 'free' ? (<p className="text-start fs-4 primery">رایگان</p>
                                ) : <p className="text-start ms-1 fs-4 primery">{dataCourse.price} <sup>تومان</sup></p>
                                }
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="gy-4">
                    <Col xs={12} lg={8}>

                        <Row className="g-3">

                            <Col xs={6} lg={4}>
                                <Row className="shadow px-2 py-3 round w-100 flex-miniCart mx-auto">
                                    <Col xs={3} className="icon-div">

                                        <i className="bi bi-info-square Secondary fs-2 mt-2"></i>
                                    </Col>
                                    <Col xs={9}>

                                        <div>
                                            <h4 className="fs-5">وضعیت دوره</h4>
                                            <p className="fs-7">تکمیل شده</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={6} lg={4}>
                                <Row className="shadow px-2 py-3 round w-100 flex-miniCart mx-auto">
                                    <Col xs={3} className="icon-div">

                                        <i className="bi bi-alarm Secondary fs-2 mt-2"></i>
                                    </Col>
                                    <Col xs={9}>

                                        <div>
                                            <h4 className="fs-5">مدت زمان دوره</h4>
                                            <p className="fs-7">20 ساعت</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={6} lg={4}>
                                <Row className="shadow px-2 py-3 round w-100 flex-miniCart mx-auto">
                                    <Col xs={3} className="icon-div">

                                        <i className="bi bi-calendar-week Secondary fs-2 mt-2"></i>
                                    </Col>
                                    <Col xs={9}>

                                        <div>
                                            <h4 className="fs-5">آخرین بروزرسانی</h4>
                                            <p className="fs-7">1402/11/09</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={6} lg={4}>
                                <Row className="shadow px-2 py-3 round w-100 flex-miniCart mx-auto">
                                    <Col xs={3} className="icon-div">

                                        <i className="bi bi-people Secondary fs-2 mt-2"></i>
                                    </Col>
                                    <Col xs={9}>

                                        <div>
                                            <h4 className="fs-5">روش پشتیبانی</h4>
                                            <p className="fs-7">آنلاین</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={6} lg={4}>
                                <Row className="shadow px-2 py-3 round w-100 flex-miniCart mx-auto">
                                    <Col xs={3} className="icon-div">

                                        <i className="bi bi-briefcase Secondary fs-2 mt-2"></i>
                                    </Col>
                                    <Col xs={9}>

                                        <div>
                                            <h4 className="fs-5">پیش نیاز</h4>
                                            <p className="fs-7">HTML & CSS</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={6} lg={4}>
                                <Row className="shadow px-2 py-3 round w-100 flex-miniCart mx-auto">
                                    <Col xs={3} className="icon-div">

                                        <i className="bi bi-camera-reels Secondary fs-2 mt-2"></i>
                                    </Col>
                                    <Col xs={9}>

                                        <div>
                                            <h4 className="fs-5">نوع مشاهده</h4>
                                            <p className="fs-7">آنلاین</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>

                        </Row>

                        <div className="shadow my-4 round py-3 px-4">
                            <p className=" my-3 moraba fs-1 titleEfect">توضیحات</p>
                            <div className="fs-6 text-muted">
                                <p><strong>بوت استرپ</strong> یکی از فریم ورک های CSS با سابقه و محبوب حوزه فرانت اند هست و خیلی از سایت هایی که در اینترنت می‌بینید با <strong>بوت استرپ</strong> طراحی شدن. اما خوبه بدونید اساسا <strong>بوت استرپ</strong> چی هست و اومده چه مشکلی رو از دنیای وب حل کنه؟</p>
                                <p><img decoding="async" loading="lazy" className="img-fluid my-3 round" src="https://sabzlearn.ir/wp-content/uploads/2024/01/bootstrap5.webp" alt="آموزش bootstrap " width="1920" height="1080" srcset="https://sabzlearn.ir/wp-content/uploads/2024/01/bootstrap5.webp 1920w, https://sabzlearn.ir/wp-content/uploads/2024/01/bootstrap5-300x169.webp 300w, https://sabzlearn.ir/wp-content/uploads/2024/01/bootstrap5-1024x576.webp 1024w, https://sabzlearn.ir/wp-content/uploads/2024/01/bootstrap5-768x432.webp 768w, https://sabzlearn.ir/wp-content/uploads/2024/01/bootstrap5-1536x864.webp 1536w" sizes="(max-width: 1920px) 100vw, 1920px" /></p>
                                <p><strong>بوت استرپ</strong> به عنوان یکی از فریم ورک های محبوب CSS شناخته میشه که به صورت کلاس بیس هست. یعنی با استفاده از مجموعه کلاس های آماده میتونید استایل دهی کنید و نیاز به نوشتن کدهای CSS نداشته باشید.</p>
                                <p>پس بزرگترین مزیت اون افزایش سرعت طراحی و کدنویسی هست.</p>
                                <p>یکی دیگه از ویژگی های قدرتمند <strong>بوت استرپ</strong>، “گرید سیستم” اون هست و فرآیند رسپانسیو کردن برنامه رو خیلی راحت تر میکنه و باعث میشه ساختار و چیدمان المان ها به منظم ترین حالت ممکن اتفاق بیفته.</p>
                                <p>مزیت بزرگ بعدی <strong>فریم ورک بوت استرپ</strong>، وجود کامپوننت های آماده هست که میتونید صرفا ما با copy/paste کردن اونها در برنامه، طراحی رو انجام داده و سرعت کدنویسی رو بالاتر ببرید. به طور مثال کامپوننت هایی مثل اسلایدر، Nav Bar، فرم های آماده، دکمه ها، accordion &nbsp;های آماده، alert &nbsp;ها و خیلی از موارد دیگه رو در اختیار شما میگذاره تا به سرعت اونهارو در پروژه ایجاد کنید و نیازی به کدنویسی از صفر نداشته باشید.</p>
                                <p>این ویژگی ها باعث میشه سرعت تولید پروژه با <strong>بوت استرپ</strong> به دلیل وجود این کامپوننت های آماده هم از لحاظ زمانی و هم هزینه ای به صرفه تر از روش های دیگه باشه مگر اینکه نیاز به سفارشی سازی خیلی گسترده ای باشه که اون وقت بهتره از فریم ورک تیلویند استفاده کنید.</p>
                                <h2><strong>بوت استرپ رو یاد بگیرم بهتره یا تیلویند؟ </strong></h2>
                                <p>این دو فریم ورک محبوب هر کدوم مزایا و معایب خودشون رو دارن که در ادامه به صورت مختصر اونهارو مقایسه میکنیم تا دید بهتری داشته باشید.</p>
                                <h3><strong>Bootstrap</strong></h3>
                                <p>یک فریم‌ورک CSS مشهور و جامع هست که ابزارها و کامپوننت‌های آماده‌ای برای طراحی و توسعه وب ارائه میده. استفاده از کلاس‌های CSS و توابع جاوا اسکریپت در <strong>بوت استرپ</strong>، کار رو برای ایجاد طرح‌ها و کامپوننت‌ها از پیش تعریف شده ساده میکنه.</p>
                                <p>مهمترین ویژگی ها :</p>
                                <ol>
                                    <li>تشابه ظاهری پروژه های تولید شده توسط <strong>بوت استرپ</strong> به دلیل استفاده از کامپیوننت های آماده</li>
                                    <li>&nbsp;دارای گرید سیستم انعطاف پذیر</li>
                                    <li>&nbsp;ارائه ابزارها و کامپوننت‌های آماده جهت استفاده در پروژه</li>
                                    <li>افزایش حجم کدهای پروژه‌ها به دلیل استفاده از کامپوننت‌ها و استایل‌های پیش‌فرض</li>
                                </ol>
                                <h3>Tailwind CSS</h3>
                                <p>یک فریم‌ورک CSS قدرتمند و حرفه ای مبتنی بر کلاس‌های کاربردی آماده (Utility) هست که از طریق تعیین کلاس‌هایی با سینتکس خاص، کار استایل دهی رو به شدت سریع تر و آسون تر کرده.</p>
                                <p>مهمترین ویژگی ها:</p>
                                <ol>
                                    <li>طراحی وبسایت‌هایی با ظاهری منحصربه‌فرد و متنوع به دلیل قابلیت سفارشی سازی نامحدود استایل ها</li>
                                    <li>کلاس‌های Utility امکان ایجاد استایل‌های سفارشی متنوع و اختیار بیشتر رو به طراح میده اما نیاز به یادگیری سینتکس کلاس ها هم هست که البته اصلا سخت نیست.</li>
                                    <li>با استفاده از کلاس‌های Utility، معمولاً حجم کدهای CSS به طرز قابل توجهی کاهش پیدا میکنه.</li>
                                </ol>
                                <p>به طور کلی، اگر دنبال یک فریم‌ورک با استایل‌های پیش‌فرض و کامپوننت‌های آماده هستید تا سرعت طراحی شما بیشتر بشه و خلاقیت و نوآوری براتون اولویت نیست، <strong>Bootstrap</strong> گزینه مناسبی است.</p>
                                <p>اما اگر به دنبال اختیار بیشتر در طراحی و توسعه هستید و بهینه‌سازی حجم کد برای بهبود سرعت بارگذاری وبسایت براتون مهمه، Tailwind CSS میتونه گزینه بهتری باشه.</p>
                                <hr />
                                <p>پیشنهاد سبزلرن به شما اینه که در صورت امکان هر دو رو یاد بگیرید چون شرایط پروژه ها باهم متفاوت هست و به عنوان یک طراح رابط کاربری باید بتونید از هرکدوم در زمان مناسبش استفاده کنید. اما اگر قرار باشه یک گزینه رو انتخاب کنید با توجه به توضیحاتی که دادیم و دیدن فصل های رایگان هرکدوم می تونید تصمیم نهایی رو بگیرید.</p>
                                <hr />
                                <h2><strong>من تیلویند رو یاد گرفتم ایا نیاز هست که بوت استرپ رو هم یاد بگیرم؟</strong></h2>
                                <p>با توجه به توضیحات قسمت قبل حتما متوجه شدید که استراتژی استفاده از هر کدوم از این فریم ورک ها متفاوته و اگر تا الان تیلویند رو یاد گرفتید، تسلط به <strong>بوت استرپ</strong> میتونه بال دوم شما باشه تا بتونید هر نوع پروژه ای رو با سرعت بالا طراحی و پیاده سازی کنید چون کامپوننت های آماده اون به شدت کار شمارو برای طراحی تسریع و تسهیل میکنن.</p>
                                <p>اینم بدونید که ساختار کلی اون ها تقریبا شبیه هم هست و یادگیری اون زمان زیادی از شما نمی گیره.</p>
                                <h2>تو این دوره چی یاد می گیریم و به چه سطحی میرسیم؟</h2>
                                <ol>
                                    <li>&nbsp;معرفی کامل فریم ورک <strong>بوت استرپ</strong>، نحوه کار و روش شخصی سازی اون به شکل دلخواه</li>
                                    <li>&nbsp;آشنایی با ساختار یک پروژه <strong>بوت استرپ</strong> به صورت صحیح و اصولی و نحوه تعریف ساختار استاندارد</li>
                                    <li>آشنایی با یک پروژه واقعی در حد بازار کار و نحوه تبدیل یک قالب فیگما به پروژه به صورت گام به گام</li>
                                    <li>نحوه استخراج فاصله ها، اندازه ها، فونت ها و تصاویر از قالب فیگما برای طراحی و استایل دهی دقیق</li>
                                    <li>یادگیری نکات تجربی و حرفه ای از استاد که قطعا هیچ جا پیدا نمی کنید</li>
                                </ol>
                                <p>در واقعی بعد از پایان دوره به سطحی میرسید که بتونید به راحتی پروژه های فریلنسری یا شرکتی که در قالب فیگما به شما سفارش داده میشه رو به کمک <strong>بوت استرپ</strong>، 0 تا 100 طراحی و پیاده سازی کنید.</p>
                                <h2>این دوره برای چه کسانی مناسب هست؟</h2>
                                <p>هرکسی از هر آموزشی یه هدفی داره. اگر دنبال یک زبان برنامه نویسی خوب و آینده دار هستید که آموزش ببینید پس قطعا دوست دارید تو زمینه های خاصی وارد بشید.</p>
                                <p>الان که هم زبان ها و فریم ورک ها قوی تر شدن و هم تخصص ها متنوع شده، این شرایط شمارو مجبور میکنه قبل از یادگیری زبان برنامه نویسی یا فریم ورک خاص، اول حوزه علاقه مندی یا تخصص خودتون رو انتخاب کنید و بعد تکنولوژی‌هایی که به شما کمک میکنن این مسیرو پیش ببرید رو از منابع معتبر به صورت اصولی یاد بگیرید.</p>
                                <p>بنابراین اگر :</p>
                                <ol>
                                    <li>HTML/CSS بلدید و به دنبال یک فریم ورک CSS حرفه ای برای طراحی UI صفحات وب و موبایل هستید</li>
                                    <li>دقیقا به دنبال یادگیری فریم ورک <strong>بوت استرپ</strong> هستید</li>
                                    <li>قبلا <strong>بوت استرپ</strong> رو آموزش دیدید ولی نتیجه نگرفتید و پروژه عملی ندارید</li>
                                    <li>تیلویند رو یاد گرفتید و حالا دنبال یه فریم ورک دیگه با کامپوننت های آماده هستید تا سرعت کارو بالاتر ببرید</li>
                                </ol>
                                <p>این دوره قطعا مناسب شماست و سکوی پرتابی برای ورود یا ارتقای شما در بازار کار خواهد بود.</p>
                                <h2>تفاوت دوره <strong>بوت استرپ</strong> سبزلرن با بقیه چی هست و چرا بهترین گزینه محسوب میشه؟</h2>
                                <p><img decoding="async" loading="lazy" className="img-fluid my-3 round" src="https://sabzlearn.ir/wp-content/uploads/2024/01/ویژگی-finish.webp" alt="" width="1920" height="1080" srcset="https://sabzlearn.ir/wp-content/uploads/2024/01/ویژگی-finish.webp 1920w, https://sabzlearn.ir/wp-content/uploads/2024/01/ویژگی-finish-300x169.webp 300w, https://sabzlearn.ir/wp-content/uploads/2024/01/ویژگی-finish-1024x576.webp 1024w, https://sabzlearn.ir/wp-content/uploads/2024/01/ویژگی-finish-768x432.webp 768w, https://sabzlearn.ir/wp-content/uploads/2024/01/ویژگی-finish-1536x864.webp 1536w" sizes="(max-width: 1920px) 100vw, 1920px" /></p>
                                <p>سبزلرن هم طبق تجربه و آخرین متدهای آموزشی برنامه نویسی در دنیا، دوره هاشو طراحی و تدوین میکنه. ما با سیاست خاصی که در انتخاب استاد، تدوین محتوای آموزشی، قیمت گذاری دوره ها و پشتیبانی موثر در نظر گرفتیم میتونیم این تضمین رو به شما بدیم که در طول دوره آموزش، هیچ کمبودی در هیچ زمینه ای احساس نکنید.</p>
                                <p>این دوره بر اساس تجربه میره جلو. شما خیلی راحت میتونید مباحث اساسی <strong>بوت استرپ</strong> رو به صورت رایگان از خود سایت ببینید (40 درصد هر دوره سبزلرن، رایگان هست) و اصلا نیازی نیست هزینه کنید. میشه گفت خود مباحث بوت استرپ اصلا چیز سختی نیست و خیلی ساده و راحته و شما با خوندن داکیومنت این فریم ورک میتونید راحت مطالبش رو یاد بگیرید.</p>
                                <p>اما بخش اصلی و اساسی این دوره، پروژه خیلی خفن اون است که یک UI اختصاصی داره و کاملا استاندارد و زیبا طراحی شده. در واقع شما در قالب پروژه یاد میگیرید چطور باید به صورت اصولی و صحیح از این فریم ورک قدرتمند استفاده کنید تا خروجی خیلی خوبی ازش بگیرید.</p>
                                <p>در جلسات دوره شما به کمک مدرس میبینید که هر قسمت رو بهتره از چه زاویه ای نگاه کنید و بررسی کنید و فاصله ها و اندازه ها رو چطور حساب کنید تا دقیقا شبیه طرح بشه.</p>
                                <p>پس تفاوت اساسی این دوره عبارتند از :</p>
                                <ol>
                                    <li>مشاهده قسمت های اصلی بوت استرپ به صورت رایگان</li>
                                    <li>پروژه محور بودن دوره که شامل یک پروژه حرفه ای باUI اختصاصی هست.</li>
                                    <li>آشنایی و یادگیری در حد نیاز با نرم افزار فیگما برای به دست آوردن اندازه ها، رنگ ها، فونت ها، عکس ها و… در یک پروژه واقعی بازار کار</li>
                                    <li>به کمک تجربیات استاد یاد میگیرید در یک پروژه واقعی باید از کجا شروع کنید، چطور ساختار پروژه رو بچینید تا وارد مرحله کدنویسی بشید و هر بخش رو با دقت و وسواس بالا پیاده سازی کنید تا دقیقا خروجی شبیه قالب مد نظر بشه.</li>
                                    <li>در این دوره معنی واقعی پشتیبانی رو متوجه میشید و هر موقع در مسیر دوره با مشکل یا سوالی مواجه شدید فقط کافیه سوالتون رو از طریق بخش پشتیبانی دوره مطرح کنید تا مدرس دوره و کارشناسان پشتیبانی در اسرع وقت و با حوصله جواب شمارو بدن.</li>
                                </ol>
                                <h2>شرکت کردن یا نکردن در این دوره چه ریسکی داره؟!</h2>
                                <p>میزان رشد و موفقیت هر شخصی نتیجه انتخاب های خودشه. ندیدن دوره چندان ضرری به شما نمیزنه. اما دیدنش میتونه چند پله شما رو به جلو ببره.</p>
                                <p>سبزلرن، مفاهیم بیسیک <strong>بوت استرپ</strong> رو برای شما رایگان قرار داده پس شما بدون پرداخت هزینه به راحتی میتونید کانسپت‌های اصلی <strong>بوت استرپ</strong> رو ببینید اما اگه سرفصل های کامل دوره رو تهیه کنید، چند مهارت فوق العاده به دست میارید.</p>
                                <p>مهارت هایی مثل :</p>
                                <ol>
                                    <li>یادگیری عملی با پروژه ای که UI اون اختصاصی طراحی شده</li>
                                    <li>تمام موارد مهمی که در تولید یک پروژه با <strong>بوت استرپ</strong> نیاز دارید به صورت عملی و قدم به قدم آموزش می بینید</li>
                                    <li>کار کردن با یک پروژه کاملا واقعی و بزرگ در حد بازار کار برای آشنایی با سبک آماده سازی پروژه بر اساس قالب فیگما</li>
                                    <li>آشنایی کامل با پایه و ساختار یک پروژه واقعی برای استانداردسازی طراحی</li>
                                    <li>نحوه پیاده سازی یک قالب به صورت 100 درصدی شبیه طرح اولیه. شامل محاسبه فاصله ها، چیدمان و مرتب سازی المان ها.</li>
                                </ol>

                                <p>دو مورد اینها بر عهده شماست و دو مورد هم بر عهده سبزلرن. ما به شما قول میدیم این آموزش رو با بالاترین کیفیت و موثرترین پشتیبانی در اختیار شما قرار بدیم. شما قول میدید که با علاقه و پشتکار تمام تمرینات رو انجام بدید تا به نتیجه برسید؟!</p>
                                <p>پس همه چی حله…</p>
                            </div>
                        </div>

                    </Col>
                    <Col xs={12} lg={4}>
                        <div className="sticky-lg-top py-3">
                            <div className="shadow bg-light round px-2 py-3">
                                <Row className="gx-5 mx-auto">
                                    <Col>
                                        {/* BOX */}
                                        <Row className="shadow-sm p-2 round bg-box">

                                            <Col className="d-flex align-items-center justify-content-center">
                                                <i className="bi bi-info-square fs-2 text-warning mt-2"></i>

                                            </Col>
                                            <Col className="text-center">
                                                <p className="fs-4">7112</p>
                                                <p className="fs-7">دانشجو</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col>
                                        {/* BOX */}
                                        <Row className="shadow-sm p-2 round bg-box">

                                            <Col className="d-flex align-items-center justify-content-center">
                                                <i className="bi bi-info-square fs-2 text-warning mt-2"></i>

                                            </Col>
                                            <Col className="text-center">
                                                <p className="fs-4">5.0</p>
                                                <p className="fs-7">رضایت</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row className="px-3 my-4">
                                    <Col className="fs-5 dana">درصد تکمیل دوره</Col>
                                    <Col className="text-start">60%</Col>
                                </Row>
                                <div className="px-3">
                                    <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar text-bg-warning" style={{ width: '60%' }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="shadow bg-light round px-2 py-3 mt-4">
                                <center>
                                    <img src="../img/4.jpg" alt="" className="img-fluid rounded-pill w-25" />
                                    <h3 className="moraba mb-3 fs-4">معین باغشیخی</h3>
                                    <p className="dana text-muted px-3">سال ۹۷ وارد دنیای برنامه نویسی شدم و الان ۵ ساله توی این بازی ام، از دروازه php و فریمورک هاش مثل کُدِگنایتر و لاراول کارمو شروع کردم و بعد تر تجربه کد زدن با nodeJs, expressJs و NestJs رو داشتم. یاد دادن همیشه برام کار جذابی بوده و خوب انجامش دادم ولی هیچوقت خودمو استاد ندونستم و نمیدونم. امیدوارم بتونم برات رفیق خوبی توی مسیر یادگیری بهتر برنامه نویسی باشم:)</p>
                                </center>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>

            <div className="divToast">
                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide className="bg-primary shadow-lg">
                    <Toast.Body style={{ color: '#fdf0e2' }}>دوره با موفقیت به سبد خرید شما اضافه شد :)</Toast.Body>
                </Toast>
            </div>

            <Footer />


        </>
    );
}

export default MainProduct;