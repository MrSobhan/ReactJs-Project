import React from 'react';
import { NavbarDefault } from '../Components/Navbar/Navbar';
import { Footer } from '../Components/Footer/Footer';
import Card from '../Components/Card/Card';
import Sidebar from '../Components/Sidebar/Sidebar';
import { FaFilter } from "react-icons/fa";
import { Button } from '@material-tailwind/react';
const Car = () => {
    return (
        <>
            <NavbarDefault />
            <div className="container mx-auto lg:w-[80%] w-[90%] md:py-24 pb-12">
                <div className="flex items-center justify-between py-8">
                    <h3 className="titleSlider lalezar mr-3">لیست خودرو ها</h3>
                    <p className='lalezar hidden md:block'>+77 خودرو موجود است.</p>
                    <Button className='block md:hidden p-3'><FaFilter /></Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-3">
                    <div className="col-span-1 hidden lg:block">
                        <Sidebar />
                    </div>
                    <div className="col-span-3 grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-8 pt-7">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
}


export default Car;