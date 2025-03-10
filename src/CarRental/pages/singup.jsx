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


function Singup() {
    return (
        <section className="px-8">
            <div className="container mx-auto h-screen grid place-items-center">
                <Card
                    shadow={false}
                    className="md:px-24 py-8 border border-gray-300"
                >
                    <CardHeader shadow={false} floated={false} className="text-center">
                        <div className="flex items-center justify-center">
                            <img src="./logoBrandCarRental.ico" alt="Logo_img" className="w-9 h-9" />
                            <Link to={'/'}>
                                <p
                                    className="mr-2 cursor-pointer font-medium lalezar text-3xl text-slate-900"
                                >
                                    سوارینا
                                </p>
                            </Link>

                        </div>
                        <Typography
                            variant="small"
                            className="text-center mx-auto max-w-[19rem] !font-medium text-gray-600 mt-3"
                        >
                            حساب کاربری دارید؟ <Link to={'/login'} className="inline text-slate-900">وارد شوید</Link>
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
                            <Button
                                variant="outlined"
                                size="lg"
                                className="flex h-12 w-12 rounded-full mx-auto border-blue-gray-200 items-center justify-center gap-2"
                                fullWidth
                            >
                                <img
                                    src={`https://www.material-tailwind.com/logos/logo-google.png`}
                                    alt="google"
                                    className="h-6 w-6"
                                />
                            </Button>

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