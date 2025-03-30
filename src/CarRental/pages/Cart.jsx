import React, { useState, useContext, useEffect } from 'react';
import { NavbarDefault } from '../Components/Navbar/Navbar';
import { Footer } from '../Components/Footer/Footer';
import AuthContext from "../context/authContext";

const Cart = () => {
    const authContext = useContext(AuthContext);
    const [loader, setLoader] = useState(false);
    const [rentalData, setRentalData] = useState([]);
    useEffect(() => {
        getAllRentals();
    }, []);

    const getAllRentals = async () => {

        const responseRental = await fetch(`${authContext.baseUrl}/rentals`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "accept": "application/json",
                "Authorization": `Bearer ${authContext.user.access_token}`,
                "Authorization-Refresh": `Bearer ${authContext.user.refresh_token}`
            },
        });
        const data = await responseRental.json();


        if (responseRental.status === 200) {
            setRentalData(data);
            setLoader(false)
            console.log(data);
            
        }

    };
    return (
        <>
            <NavbarDefault />
            <div className="container mx-auto lg:w-[80%] w-[90%] md:py-28 pb-12 md:min-h-[1000px]">

                <h3 className="titleSlider lalezar mr-3">سبد اجارات</h3>

            </div>

            <Footer />
        </>
    );
}


export default Cart;