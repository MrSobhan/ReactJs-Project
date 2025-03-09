import React, { useState , useEffect } from "react";
import {
    Navbar,
    MobileNav,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { RiMenu2Line } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";

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
        <Navbar className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8  shadow-lg mt-7">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <div className="flex items-center justify-between">
                    <img src="./logoBrandCarRental.ico" alt="Logo_img" className="w-9 h-9" />
                    <p
                        className="mr-2 cursor-pointer py-1.5 font-medium lalezar text-3xl text-slate-900"
                    >
                        سوارینا
                    </p>

                </div>
                <div className="hidden lg:block">
                    {navList}
                </div>
                <div className="flex items-center gap-x-1">
                    <Button variant="text" size="sm" className="hidden lg:inline-block text-sm">
                        <span>ورود</span>
                    </Button>
                    <Button
                        variant="filled"
                        size="sm"
                        className="hidden lg:inline-block py-2 px-5 text-sm"
                    >
                        <span>ثبت نام</span>
                    </Button>
                </div>
                <IconButton
                    variant="text"
                    className="mr-auto flex items-center justify-center lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <IoCloseOutline  className="text-2xl"/>
                    ) : (
                        <RiMenu2Line className="text-2xl" />
                    )}
                </IconButton>
            </div>
            <MobileNav open={openNav}>
                <div className="container mx-auto">
                    {navList}
                    <div className="flex items-center gap-x-1">
                        <Button fullWidth variant="text" size="sm" className="">
                            <span>ورود</span>
                        </Button>
                        <Button fullWidth variant="filled" size="sm" className="">
                            <span>ثبت نام</span>
                        </Button>
                    </div>
                </div>
            </MobileNav>
        </Navbar>
    );
}