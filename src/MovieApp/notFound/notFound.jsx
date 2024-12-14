import React from 'react';
import Header from '../Components/header/Header';
import Footer from '../Components/Footer/Footer';

import './notFound.css';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <>
            <Header />

            <main>
                <div className="container container__notFound my-5 flex-items">
                    <h1 className='text-light'>404 - Not Found</h1>
                    <NavLink to={'/'}><button className="btnThem mt-3">Back Movies App</button></NavLink>
                </div>
            </main>
            
            <Footer />

        </>
    );
}


export default NotFound;