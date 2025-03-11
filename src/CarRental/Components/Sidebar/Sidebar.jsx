import React, { useState } from "react";
import {
    List,
    Card,
    Alert,
    Avatar,
    ListItem,
    Accordion,
    Typography,
    AccordionBody,
    ListItemPrefix,
    AccordionHeader,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Select, Option } from "@material-tailwind/react";

export function Sidebar() {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    const LIST_ITEM_STYLES =
        "select-none hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-100 hover:text-gray-900 focus:text-gray-900 active:text-gray-900 data-[selected=true]:text-gray-900";

    return (
        <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] mx-auto p-6 shadow-md">
            <div className="flex items-center justify-start">
                <img src="./logoBrandCarRental.ico" alt="Logo_img" className="w-9 h-9" />
                <Link to={'/'}>
                    <p
                        className="mr-2 cursor-pointer py-1.5 font-medium lalezar text-3xl text-slate-900"
                    >
                        سوارینا
                    </p>
                </Link>

            </div>
            <hr className="my-2 border-gray-200" />
            <List>
                <Accordion open={open === 1}>
                    <ListItem
                        selected={open === 1}
                        data-selected={open === 1}
                        onClick={() => handleOpen(1)}
                        className="p-3 select-none hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-100 hover:text-gray-900 focus:text-gray-900 active:text-gray-900 data-[selected=true]:text-gray-900"
                    >
                        <Typography className="mr-auto font-normal text-inherit">
                            قیمت
                        </Typography>
                        ChevronDownIcon
                    </ListItem>
                    <AccordionBody className="py-1">
                        <List className="p-0">
                            <ListItem className={`px-16 ${LIST_ITEM_STYLES}`}>
                                My Profile
                            </ListItem>
                            <ListItem className={`px-16 ${LIST_ITEM_STYLES}`}>
                                Settings
                            </ListItem>
                        </List>
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2}>
                    <ListItem
                        selected={open === 2}
                        data-selected={open === 2}
                        onClick={() => handleOpen(2)}
                        className="px-3 py-[9px] select-none hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-100 hover:text-gray-900 focus:text-gray-900 active:text-gray-900 data-[selected=true]:text-gray-900"
                    >
                        <Typography className="mr-auto font-normal text-inherit">
                            وضعیت راننده
                        </Typography>
                        ChevronDownIcon
                    </ListItem>
                    <AccordionBody className="py-1">
                        <List className="p-0">
                            <ListItem className={`px-12 ${LIST_ITEM_STYLES}`}>
                                با راننده
                            </ListItem>
                            <ListItem className={`px-12 ${LIST_ITEM_STYLES}`}>
                                بدون راننده
                            </ListItem>
                        </List>
                    </AccordionBody>
                </Accordion>

                <ListItem className={LIST_ITEM_STYLES}>
                    <ListItemPrefix>
                        ChatBubbleLeftEllipsisIcon
                    </ListItemPrefix>
                    <p>خدمات اجاره</p>
                    <div className="flex flex-row gap-2">

                    </div>
                </ListItem>
                <ListItem className={LIST_ITEM_STYLES}>
                    <ListItemPrefix>
                        ChatBubbleLeftEllipsisIcon
                    </ListItemPrefix>
                    <p>نوع بدنه</p>
                    <div className="flex flex-row gap-2">

                    </div>
                </ListItem>
            </List>
            <hr className="my-2 border-gray-200" />
            <div className="w-72">
                <Select label="Select Version">
                    <Option>Material Tailwind HTML</Option>
                    <Option>Material Tailwind React</Option>
                    <Option>Material Tailwind Vue</Option>
                    <Option>Material Tailwind Angular</Option>
                    <Option>Material Tailwind Svelte</Option>
                </Select>
            </div>

            <Typography
                variant="small"
                className="mt-5 font-medium text-gray-500 flex justify-center"
            >
                v 1.0.0
            </Typography>
        </Card>
    );
}



export default Sidebar;