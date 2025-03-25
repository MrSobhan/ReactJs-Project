import React, { useEffect, useContext, useState } from 'react';
import { NavbarDefault } from '../Components/Navbar/Navbar';
import { Footer } from '../Components/Footer/Footer';
import Card from '../Components/Card/Card';
import Sidebar from '../Components/Sidebar/Sidebar';
import { FaFilter } from "react-icons/fa";
import { Button, Spinner } from '@material-tailwind/react';
import AuthContext from "../context/authContext";
const Car = () => {
    const authContext = useContext(AuthContext)
    const [carData, setCarData] = useState([])
    const [loaderCar, setLoaderCar] = useState(true)


    useEffect(() => {
        fetchCarInSlider()
    }, [])

    const fetchCarInSlider = async () => {
        const response = await fetch(`${authContext.baseUrl}/vehicles`);

        const allCar = await response.json();



        if (response.status === 200) {
            setLoaderCar(false)
            setCarData(allCar)
        }
    }
    return (
        <>
            <NavbarDefault />
            <div className="container mx-auto lg:w-[80%] w-[90%] md:py-24 pb-12 md:min-h-[1000px]">
                <div className="flex items-center justify-between py-8">
                    <h3 className="titleSlider lalezar mr-3">لیست خودرو ها</h3>
                    <p className='lalezar hidden md:block'>+{carData.length} خودرو موجود است.</p>
                    <Button className='block md:hidden p-3'><FaFilter /></Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-3">
                    <div className="col-span-1 hidden lg:block">
                        <Sidebar />
                    </div>
                    <div className="col-span-3 grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-8 pt-7">

                        {
                            carData.map((dataCar) => (
                                <Card key={dataCar.id} {...dataCar} />
                            ))
                        }
                    </div>
                </div>
                {
                    loaderCar && <Spinner className="h-8 w-8 mx-auto mt-16" />
                }

            </div>
            <Footer />
        </>
    );
}


export default Car;