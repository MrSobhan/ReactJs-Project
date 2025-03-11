import React from 'react';
import { NavbarDefault } from '../Components/Navbar/Navbar';
import { Footer } from '../Components/Footer/Footer';
import DefaultAccordion from '../Components/FAQs/FAQs';
import { Carousel } from "@material-tailwind/react";

const CarPage = () => {
    return (
        <>
            <NavbarDefault />
            <div className="container mx-auto lg:w-[80%] w-[90%] py-24">
                <Carousel className="rounded-xl w-full max-h-[600px] overflow-hidden mb-14">
                    <img
                        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                        alt="image 1"
                        className="h-full w-full object-cover"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                        alt="image 2"
                        className="h-full w-full object-cover"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                        alt="image 3"
                        className="h-full w-full object-cover"
                    />
                </Carousel>
                <div className="lg:mb-8 mb-4 container mx-auto grid lg:gap-x-8 gap-y-8 grid-cols-3 gap-x-4 w-full bg-slate-500 relative">
                    <div className="col-span-2 shadow-lg rounded-xl bg-slate-200 py-9 px-7 h-[1000px]">متن</div>
                    <div className="col-span-1 shadow-lg rounded-xl bg-slate-200 py-9 px-7 sticky max-h-max top-20 left-0">قیمت</div>
                </div>
                <DefaultAccordion />
            </div>
            <Footer />
        </>
    );
}


export default CarPage;