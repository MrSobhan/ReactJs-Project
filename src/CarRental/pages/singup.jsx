import React from "react";
import { Link } from "react-router-dom";

// @components
import {
    Card,
    Input,
    Button,
    CardBody,
    CardHeader,
    Typography,
} from "@material-tailwind/react";

import { FcGoogle } from "react-icons/fc";

function Singup() {
    return (
        <section className="px-8">
            <div className="absolute inset-x-0 top-20 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
            </div>
            <div className="container mx-auto h-screen grid place-items-center">
                <Card
                    shadow={false}
                    className="md:px-24 py-8 bg-transparent"
                >
                    <CardHeader shadow={false} floated={false} className="text-center bg-transparent">
                        <div className="flex items-center justify-center">
                            <img src="./logoBrandCarRental.ico" alt="Logo_img" className="w-9 h-9" />
                            <Link to={'/'}>
                                <p
                                    className="mr-2 cursor-pointer font-medium lalezar text-3xl text-gray-900"
                                >
                                    سوارینا
                                </p>
                            </Link>

                        </div>
                        <Typography
                            variant="small"
                            className="text-center mx-auto max-w-[19rem] !font-medium text-gray-600 mt-3"
                        >
                            حساب کاربری دارید؟ <Link to={'/login'} className="inline text-blue-gray-900">وارد شوید</Link>
                        </Typography>
                    </CardHeader>
                    <CardBody>
                        <form
                            action="#"
                            className="flex flex-col gap-4 md:mt-4"
                        >
                            <div>
                                <label htmlFor="email">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="block font-medium mb-2"
                                    >
                                        نام و نام خانوادگی
                                    </Typography>
                                </label>
                                <Input
                                    id="name"
                                    color="gray"
                                    size="lg"
                                    type="text"
                                    name="name"
                                    placeholder="محمد کاظمی"
                                    className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                                    labelProps={{
                                        className: "hidden",
                                    }}
                                />
                            </div>
                            <div>
                                <label htmlFor="email">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="block font-medium mb-2"
                                    >
                                        ایمیل
                                    </Typography>
                                </label>
                                <Input
                                    id="email"
                                    color="gray"
                                    size="lg"
                                    type="email"
                                    name="email"
                                    placeholder="name@mail.com"
                                    className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                                    labelProps={{
                                        className: "hidden",
                                    }}
                                />
                            </div>
                            <div>
                                <label htmlFor="email">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="block font-medium mb-2"
                                    >
                                        کد ملی
                                    </Typography>
                                </label>
                                <Input
                                    id="meliCode"
                                    color="gray"
                                    size="lg"
                                    type="number"
                                    name="meliCode"
                                    placeholder="0072657821"
                                    className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                                    labelProps={{
                                        className: "hidden",
                                    }}
                                />
                            </div>
                            <div>
                                <label htmlFor="email">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="block font-medium mb-2"
                                    >
                                        شماره تماس
                                    </Typography>
                                </label>
                                <Input
                                    id="phone"
                                    color="gray"
                                    size="lg"
                                    type="number"
                                    name="phone"
                                    placeholder="09123456789"
                                    className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                                    labelProps={{
                                        className: "hidden",
                                    }}
                                />
                            </div>
                            <div>
                                <label htmlFor="email">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="block font-medium mb-2"
                                    >
                                        رمز ورود
                                    </Typography>
                                </label>
                                <Input
                                    id="pass"
                                    color="gray"
                                    size="lg"
                                    type="password"
                                    name="pass"
                                    placeholder="*******"
                                    className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                                    labelProps={{
                                        className: "hidden",
                                    }}
                                />
                            </div>
                            <Button size="lg" color="gray" className="py-3" fullWidth>
                                ثبت نام
                            </Button>
                            <div className="h-12 w-12 rounded-full mx-auto flex items-center justify-center border-2 border-solid border-gray-300 cursor-pointer">
                                <FcGoogle className="text-2xl" />
                            </div>

                            <Typography
                                variant="small"
                                className="text-center mx-auto max-w-[19rem] !font-medium !text-gray-600"
                            >
                                با عضویت در سایت، تمامی قوانین و شرایط استفاده از خدمات <span className="lalezar">سوارینا</span> را پذیرفته اید.
                            </Typography>
                        </form>
                    </CardBody>
                </Card>
            </div>
        </section>
    );
}

export default Singup;