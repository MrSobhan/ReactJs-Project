import React from 'react';
import Header from '../Components/headerAddMovie/Header'
import Footer from '../Components/Footer/Footer'
import Cart from "../Components/Cart/Cart";

import './AddMovie.css'

const AddMovie = () => {
    return (
        <>
            <Header />

            <div className="container sectionMain__myMovie">
                <div className="shadow round-5 searchBar gap-3 flex-between">
                    <img src="./movieApp/qwsearch.png" alt="" className="img-fluid img-icon" />
                    <input type="text" placeholder='Search Movie Name' />
                </div>
            </div>

            <div className="container my-5">
                <h1>Uploaded</h1>
                <div className="row mt-3">

                    <div className="col-lg-3 col-6 mt-3">
                        <img src="./movieApp/movie1.png" alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-3 col-6 mt-3">
                        <img src="./movieApp/movie2.png" alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-3 col-6 mt-3">
                        <img src="./movieApp/movie3.png" alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-3 col-6 mt-3">
                        <img src="./movieApp/movie4.png" alt="" className="img-fluid" />
                    </div>

                </div>
            </div>


            <div className="container">
                <h1>Recently Search</h1>
                <div className="row mt-3">

                    <Cart />
                    <Cart />
                    <Cart />

                </div>
            </div>

            <button className='btnAdd shadow'><i className="bi bi-plus fs-2 text-light"></i></button>
    

            <Footer />

        </>



    );
}



export default AddMovie;