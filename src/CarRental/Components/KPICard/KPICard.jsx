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

import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const data = [
    {
        title: "Revenue",
        percentage: "12%",
        price: "$50,846.90",
        color: "red",
        icon: (
            <FaChevronDown />
        ),
    },
    {
        title: "Outbound Clicks",
        percentage: "16%",
        price: "10,342",
        color: "green",
        icon: (
            <FaChevronDown />
        ),
    },
    {
        title: "Total Audience",
        percentage: "10%",
        price: "19,720",
        color: "green",
        icon: (
            <FaChevronUp />
        ),
    },
    {
        title: "Event Count",
        percentage: "10%",
        price: "20,000",
        color: "red",
        icon: (
            <FaChevronUp />
        ),
    },
];

export function KpiCard({
    title,
    percentage,
    price,
    color,
    icon,
}) {
    return (
        <Card className="shadow-sm border border-gray-200 !rounded-lg">
            <CardBody className="p-4">
                <div className="flex justify-between items-center">
                    <Typography
                        className="!font-medium !text-xs text-gray-600"
                    >
                        {title}
                    </Typography>
                    <div className="flex items-center gap-1">
                        {icon}
                        <Typography
                            color={color}
                            className="font-medium !text-xs"
                        >
                            {percentage}
                        </Typography>
                    </div>
                </div>
                <Typography
                    color="blue-gray"
                    className="mt-1 font-bold text-2xl"
                >
                    {price}
                </Typography>
            </CardBody>
        </Card>
    );
}



export function KpiCard1() {
    return (

        <div className="my-24 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center md:gap-2.5 gap-4">
            {data.map((props, key) => (
                <KpiCard key={key} {...props} />
            ))}
        </div>

    );
}

export default KpiCard1;