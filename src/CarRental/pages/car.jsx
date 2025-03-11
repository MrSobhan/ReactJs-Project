import React from 'react';
import { NavbarDefault } from '../Components/Navbar/Navbar';
import { Footer } from '../Components/Footer/Footer';
import Card from '../Components/Card/Card';
import Sidebar from '../Components/Sidebar/Sidebar';

const Car = () => {
    return (
        <>
            <NavbarDefault />
            <div className="container mx-auto lg:w-[80%] w-[90%] py-24">
                <div className="flex items-center justify-between py-10">
                    <h3 className="titleSlider lalezar mr-3">لیست خودرو ها</h3>
                    <p className='lalezar hidden md:block'>+77 خودرو موجود است.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-3">
                    <div className="col-span-1 hidden lg:block">
                        <Sidebar />
                    </div>
                    <div className="col-span-3 flex flex-wrap items-center justify-evenly gap-y-8 pt-7">
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