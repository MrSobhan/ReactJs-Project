import React, { useState, useEffect } from "react";
import {
    Navbar,
    MobileNav,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { RiMenu2Line } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export function NavbarDefault() {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="text-slate-900 mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <li>
                <p className="text-sm cursor-pointer">صفحه اصلی</p>
            </li>
            <li>
                <p className="text-sm cursor-pointer"> اجاره خودرو</p>
            </li>
            <li>
                <p className="text-sm cursor-pointer">ویژگی های سوارینا</p>
            </li>
            <li>
                <p className="text-sm cursor-pointer">وبلاگ</p>
            </li>
            <li>
                <p className="text-sm cursor-pointer">ارتباط با ما</p>
            </li>
        </ul>
    )


    return (
        <Navbar className="w-full lg:w-[80%] px-4 py-2 lg:px-8  shadow-lg sticky top-0 lg:top-3 left-0 lg:mx-auto z-50 bgNavbar">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <div className="flex items-center justify-between">
                    <img src="./logoBrandCarRental.ico" alt="Logo_img" className="w-9 h-9" />
                    <Link to={'/'}>
                        <p
                            className="mr-2 cursor-pointer py-1.5 font-medium lalezar text-3xl text-slate-900"
                        >
                            سوارینا
                        </p>
                    </Link>

                </div>
                <div className="hidden lg:block">
                    {navList}
                </div>
                <div className="flex items-center gap-x-1">
                    <Link to={'/login'}>
                        <Button
                            variant="filled"
                            size="sm"
                            className="hidden lg:inline-block py-2 px-5 text-sm"
                        >
                            <span>ورود / ثبت نام</span>
                        </Button>
                    </Link>
                </div>
                <IconButton
                    variant="text"
                    className="mr-auto flex items-center justify-center lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <IoCloseOutline className="text-2xl" />
                    ) : (
                        <RiMenu2Line className="text-2xl" />
                    )}
                </IconButton>
            </div>
            <MobileNav open={openNav}>
                <div className="container mx-auto text-center">
                    {navList}
                    <div className="flex items-center gap-x-1">
                        <Link to={'/login'} className="w-full">
                            <Button
                                variant="filled"
                                size="sm"
                                className="w-full"
                            >
                                <span>ورود / ثبت نام</span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </MobileNav>
        </Navbar>
    );
}