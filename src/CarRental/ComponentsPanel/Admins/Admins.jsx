import React, { useEffect, useContext, useState } from 'react';
import AuthContext from "../../context/authContext";

import { Card, Typography, Spinner } from "@material-tailwind/react";

const TABLE_HEAD = ["addd", "Job", "Employed", ""];

const TABLE_ROWS = [
    {
        name: "John Michael",
        job: "Manager",
        date: "23/04/18",
    },
    {
        name: "Alexa Liras",
        job: "Developer",
        date: "23/04/18",
    },
    {
        name: "Laurent Perrier",
        job: "Executive",
        date: "19/09/17",
    },
    {
        name: "Michael Levi",
        job: "Developer",
        date: "24/12/08",
    },
    {
        name: "Richard Gran",
        job: "Manager",
        date: "04/10/21",
    },
];

const Admins = () => {

    const authContext = useContext(AuthContext)
    const [adminsData, setAdminsData] = useState([])
    const [loaderAdmin, setLoaderAdmin] = useState(true)


    useEffect(() => {
        getAllAdmins()
    }, [])

    const getAllAdmins = async () => {
        const response = await fetch(`${authContext.baseUrl}/admins`);

        const adminsRes = await response.json();

        console.log(adminsRes);


        if (response.status === 200) {
            setLoaderAdmin(false)
            setAdminsData(adminsRes)
        }
    }

    return (

        <>
            {
                loaderAdmin ? (<Spinner className="h-8 w-8 mx-auto mt-16" />) : (
                    <Card className="h-full w-full overflow-scroll">
                        <table className="w-full min-w-max table-auto text-left">
                            <thead>
                                <tr>
                                    {TABLE_HEAD.map((head) => (
                                        <th
                                            key={head}
                                            className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                                        >
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal leading-none opacity-70"
                                            >
                                                {head}
                                            </Typography>
                                        </th>
                                    ))
                                    }
                                </tr >
                            </thead >
                            <tbody>
                                {TABLE_ROWS.map(({ name, job, date }, index) => {
                                    const isLast = index === TABLE_ROWS.length - 1;
                                    const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                                    return (
                                        <tr key={name}>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {name}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {job}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {date}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    as="a"
                                                    href="#"
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-medium"
                                                >
                                                    Edit
                                                </Typography>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>

                        </table >
                    </Card >
                )
            }
        </>
    );
}

export default Admins;