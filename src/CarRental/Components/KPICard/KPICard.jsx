import React from "react";

// @material-tailwind/react
import {
    Button,
    Typography,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Card,
    CardBody,
} from "@material-tailwind/react";

import { IoIosSettings } from "react-icons/io";
import { GoGoal } from "react-icons/go";
import { SlEnvolopeLetter } from "react-icons/sl";
import { FaCar } from "react-icons/fa";

const data = [
    {
        title: "ارائه فاکتور رسمی",
        icon: (
            <SlEnvolopeLetter />
        ),
    },
    {
        title: "رزرو رایگان با امتیاز",
        icon: (
            <GoGoal />
        ),
    },
    {
        title: "ارائه ماشین های تمیز و نو",
        icon: (
            <FaCar />
        ),
    },
    {
        title: "امداد رسانی کمتر از 30 دقیقه",
        icon: (
            <IoIosSettings />
        ),
    }
];

export function KpiCard({
    title,
    percentage,
    price,
    color,
    icon,
}) {
    return (
        <Card className="shadow-md border border-gray-200 !rounded-lg transition-all hover:shadow-none hover:-translate-y-3">
            <CardBody className="p-4">
                <div className="flex flex-col justify-between items-center">

                    <div className="flex items-center gap-1 text-slate-800 text-7xl">
                        {/* <img src={icon} alt={title} /> */}
                        {icon}
                    </div>

                    <Typography
                        className="!font-medium mt-4 !text-md text-gray-700"
                    >
                        {title}
                    </Typography>
                </div>
            </CardBody>
        </Card>
    );
}



export function KpiCard1() {
    return (

        <div className="my-24 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center gap-4">
            {data.map((props, key) => (
                <KpiCard key={key} {...props} />
            ))}
        </div>

    );
}

export default KpiCard1;