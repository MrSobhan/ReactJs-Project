import React from 'react';
import { FaAngleLeft } from "react-icons/fa";

const Card = () => {
    return (
        <div class="relative flex max-w-72 h-max flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div class="relative mx-4 -mt-6 h-28 md:h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-400 to-blue-600">
            </div>
            <div class="p-6">
                <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Tailwind card
                </h5>
                <p class=" hidden md:block font-sans text-sm font-light leading-relaxed text-inherit antialiased">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
                </p>
            </div>
            <div class="p-2 pt-0 w-full md:px-4">
                <button data-ripple-light="true"  type="button" class="w-full  select-none rounded-lg bg-blue-gray-800 py-3 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-gray-500 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none flex items-center justify-center gap-x-3">
                    اطلاعات بیشتر<FaAngleLeft />
                </button>
            </div>
        </div>
    );
}


export default Card;