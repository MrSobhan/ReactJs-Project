import React, { useState } from "react";
import { IconButton, Typography } from "@material-tailwind/react";
import { IoClose } from "react-icons/io5";

export function Banner() {
    const [close, setClose] = useState(false)
    return (
        <section className={close ? 'hidden' : 'block'}>
            <div className="mb-4  px-4 py-2 flex bg-gray-900 flex-wrap lg:items-center lg:justify-center gap-x-10">
                <Typography variant="h6" color="white" className="text-sm font-thin">
«به مناسبت افتتاح وب‌سایت کرایه خودرو، با هر رزرو شانس برنده شدن جوایز ویژه و تخفیف‌های هیجان‌انگیز رو دارید! همین حالا ماشین مورد نظرتون رو رزرو کنید!»
                </Typography>
                <IconButton color="white" variant="text" onClick={() => setClose(true)}>
                    <IoClose className="text-white w-4 h-4" />
                </IconButton>
            </div>
        </section>
    );
}

export default Banner;