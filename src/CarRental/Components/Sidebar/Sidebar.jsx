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
import { Slider } from "@material-tailwind/react";
import { FaAngleDown } from "react-icons/fa6";
import { Radio } from "@material-tailwind/react";


export function Sidebar() {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open == value ? 0 : value);
    };

    const LIST_ITEM_STYLES =
        "select-none hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-100 hover:text-gray-900 focus:text-gray-900 active:text-gray-900 data-[selected=true]:text-gray-900 iransans text-xs";

    return (
        <Card className="h-max w-full mx-auto py-6 px-3 shadow-md overflow-hidden">
            <div className="flex items-center justify-start">
                <img src="./logoBrandCarRental.ico" alt="Logo_img" className="w-9 h-9" />
                <Link to={'/'}>
                    <p
                        className="mr-2 cursor-pointer py-1.5 font-medium lalezar text-3xl text-gray-900"
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
                        <Typography className="ml-auto font-normal text-inherit">
                            قیمت
                        </Typography>
                        <FaAngleDown />
                    </ListItem>
                    <AccordionBody className="py-1">
                        <div className=" py-4 w-56 mx-auto">
                            <Slider defaultValue={50} />
                        </div>
                    </AccordionBody>
                </Accordion>
                <Accordion open={open == 2}>
                    <ListItem
                        selected={open == 2}
                        data-selected={open == 2}
                        onClick={() => handleOpen(2)}
                        className="px-3 py-[9px] select-none hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-100 hover:text-gray-900 focus:text-gray-900 active:text-gray-900 data-[selected=true]:text-gray-900"
                    >
                        <Typography className="ml-auto font-normal text-inherit">
                            وضعیت راننده
                        </Typography>
                        <FaAngleDown />
                    </ListItem>
                    <AccordionBody className="py-1">
                        <List className="p-0">

                            <ListItem className={`px-8 ${LIST_ITEM_STYLES} flex items-center justify-between`}>
                                <input type="radio" name="type" id="carWith" className="w-4 h-4 accent-blue-gray-900" />
                                <label htmlFor="carWith" className="w-full mr-2 cursor-pointer">با راننده</label>
                            </ListItem>
                            <ListItem className={`px-8 ${LIST_ITEM_STYLES} flex items-center justify-between`}>
                                <input type="radio" name="type" id="carWith2" className="w-4 h-4 accent-blue-gray-900" />
                                <label htmlFor="carWith2" className="w-full mr-2 cursor-pointer">بدون راننده</label>
                            </ListItem>
                        </List>
                    </AccordionBody>
                </Accordion>
                <Accordion open={open == 3}>
                    <ListItem
                        selected={open == 3}
                        data-selected={open == 3}
                        onClick={() => handleOpen(3)}
                        className="px-3 py-[9px] select-none hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-100 hover:text-gray-900 focus:text-gray-900 active:text-gray-900 data-[selected=true]:text-gray-900"
                    >
                        <Typography className="ml-auto font-normal text-inherit">
                            خدمات اجاره
                        </Typography>
                        <FaAngleDown />
                    </ListItem>
                    <AccordionBody className="py-1">
                        <List className="p-0">

                            <ListItem className={`px-8 ${LIST_ITEM_STYLES} flex items-center justify-between`}>
                                <input type="radio" name="type" id="carWith3" className="w-4 h-4 accent-blue-gray-900" />
                                <label htmlFor="carWith3" className="w-full mr-2 cursor-pointer">تحویل در محل با شما</label>
                            </ListItem>
                        </List>
                    </AccordionBody>
                </Accordion>
                <Accordion open={open == 4}>
                    <ListItem
                        selected={open == 4}
                        data-selected={open == 4}
                        onClick={() => handleOpen(4)}
                        className="px-3 py-[9px] select-none hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-100 hover:text-gray-900 focus:text-gray-900 active:text-gray-900 data-[selected=true]:text-gray-900"
                    >
                        <Typography className="ml-auto font-normal text-inherit">
                            نوع بدنه
                        </Typography>
                        <FaAngleDown />
                    </ListItem>
                    <AccordionBody className="py-1">
                        <List className="!p-0">

                            <ListItem className={`px-8 ${LIST_ITEM_STYLES} flex items-center justify-between`}>
                                <input type="radio" name="type" id="carWith4" className="w-4 h-4 accent-blue-gray-900" />
                                <label htmlFor="carWith4" className="w-full mr-2 cursor-pointer">با راننده</label>
                            </ListItem>
                            <ListItem className={`px-8 ${LIST_ITEM_STYLES} flex items-center justify-between`}>
                                <input type="radio" name="type" id="carWith5" className="w-4 h-4 accent-blue-gray-900" />
                                <label htmlFor="carWith5" className="w-full mr-2 cursor-pointer">بدون راننده</label>
                            </ListItem>
                        </List>
                    </AccordionBody>
                </Accordion>

            </List>
            <hr className="my-2 border-gray-200" />
            <div className="w-full px-4">
                <select label="سازنده" dir="rtl" className="w-full px-1 py-2 rounded-xl outline-none">
                    <option>سازنده</option>
                    <option>Material Tailwind React</option>
                    <option>Material Tailwind Vue</option>
                    <option>Material Tailwind Angular</option>
                    <option>Material Tailwind Svelte</option>
                </select>
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