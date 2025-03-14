import Card from "../Card/Card";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";
import { useRef } from "react";
import "./Slider.css";

export default function CardSlider() {
    const sliderRef = useRef(null);
    const scrollAmount = 300;

    const rightSlideHandler = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft += scrollAmount;
        }
    };

    const leftSlideHandler = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft -= scrollAmount;
        }
    };

    return (
        <div className="relative">
        <div className="absolute inset-x-0 top-20 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
      </div>
            <div className="container w-full flex items-center justify-between">
                <h3 className="titleSlider lalezar mr-3">لیست خودرو ها</h3>

                <div className="hidden md:flex items-center justify-between gap-x-2">
                    <button onClick={rightSlideHandler}>
                        <p className="text-xl bg-black text-blue-gray-50 cursor-pointer rounded-full p-3">
                            <FaCaretRight />
                        </p>
                    </button>
                    <button onClick={leftSlideHandler}>
                        <p className="text-xl bg-black text-blue-gray-50 cursor-pointer rounded-full p-3">
                            <FaCaretLeft />
                        </p>
                    </button>
                </div>
            </div>

            <div className="sliderBox overflow-x-scroll scroll-smooth" ref={sliderRef}>
                <div className="content__sliderBox flex gap-x-4 pt-10">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
}
