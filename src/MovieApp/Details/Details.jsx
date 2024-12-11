import React, { useEffect } from 'react';
import Header from '../Components/headerAddMovie/Header'
import Footer from '../Components/Footer/Footer'
import { useParams } from "react-router-dom";

import './Details.css'

const Details = () => {
    const param = useParams()
    useEffect(() => {
        console.log(param.idMovie);

    }, [])
    return (
        <>
            <Header />


            <div className="container px-2 px-lg-0">
                <div className="sectionTop__main my-5 shadow">
                    <div className="row w-100">
                        <div className="col-12">
                            <h1 className="text-light">Peaky Blinders</h1>
                        </div>
                        <div className="col-12">
                            <div className="flex-between mt-1">
                                <div className="ratingImdb gap-2 d-flex text-light">
                                    <img src="../movieApp/rating.png" alt="rating" className="img-icon" />
                                    <p>7.8/10</p>
                                </div>
                                <button className='btnThem'>Rate</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <div className="flex-items gap-2">
                    <button className='btnDetails'>Gangester</button>
                    <button className='btnDetails'>Drama</button>
                    <button className='btnDetails'>Mafia</button>
                    <button className='btnDetails'>Crime</button>
                </div>
            </div>

            <div className="container pb-5">
                <h1>About</h1>
                <div className="mt-3">

                    <p className='text-muted'>A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.</p>

                </div>
            </div>



            <div className="container pb-5">
                <h1 className='mb-5'>Episods</h1>
                <img src="../movieApp/video.png" alt="" className="img-fluid w-100" />
            </div>

            <Footer />

        </>



    );
}



export default Details;