import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/authContext';
import Header from '../Components/headerAddMovie/Header'
import Footer from '../Components/Footer/Footer'
import { useParams } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';

import './Details.css'

const Details = () => {
    const param = useParams()
    const [movie, setMovie] = useState({})
    const [isPoster, setIsPoster] = useState(false)
    const authContext = useContext(AuthContext)

    useEffect(() => {

        fetch(`${authContext.baseUrl}/movies/${param.idMovie}`)
            .then(res => res.json())
            .then(moviesByParam => {
                setMovie(moviesByParam[0])
                console.log(moviesByParam[0]);

                setIsPoster(moviesByParam[0].posterUrl && moviesByParam[0].posterUrl.length > 20)
                // console.log(moviesByParam[0].posterUrl && moviesByParam[0].posterUrl.length > 20);

            })
    }, [])

    return (
        <>
            <Header />


            <div className="container px-2 px-lg-0 firstContainer__details">
                <div className="sectionTop__details my-5 shadow" style={{ background: `linear-gradient(90deg, transparent, #443525) , ${isPoster ? "url(" + movie.posterUrl + ")" : "url(../movieApp/PeakyBlinders.webp)"}` }}>
                    <div className="row">
                        <div className="col-12 text-light">
                            <h1 className='fs-5'>{movie.title}</h1>
                            <h4 className='fs-5'>TV Series . {movie.releaseYear}</h4>
                        </div>
                        <div className="col-12">
                            <div className="flex-between mt-1 gap-2">
                                <div className="ratingImdb gap-2 flex-items text-light">
                                    <img src="../movieApp/rating.png" alt="rating" className="img-icon" />
                                    <p className='mt-3'>{movie.rating}/10 IMDB</p>
                                </div>
                                <button className='btnThem'>Rate</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <div className="flex-items gap-2">
                    <button className="btnDetails">Gangester</button>
                    <button className="btnDetails">Drama</button>
                    <button className="btnDetails">Mafia</button>
                    <button className="btnDetails">Crime</button>
                </div>
            </div>

            <div className="container pb-5">
                <h1>About</h1>
                <div className="mt-3">

                    <p className='text-muted textAbout__details'>{movie.description} Movies ipsum The ever impressive, the long contained, often imitated, but never duplicated … Genie of the lamp! It's that law that's the problem. The diamond in the rough! Desperate times call for desperate measures, my lord. What would you wish for? How dare you. All of you. Standing around deciding my future. I am not a prize to be won. The diamond in the rough!

                        How dare you. All of you. Standing around deciding my future. I am not a prize to be won. This is not done yet, boy! The diamond in the rough! Desperate times call for desperate measures, my lord. How dare you. All of you. Standing around deciding my future. I am not a prize to be won. Who disturbs my slumber? The diamond in the rough! How dare you. All of you. Standing around deciding my future. I am not a prize to be won.

                        Trust me, my pungent friend, you'll get what's coming to you. Who disturbs my slumber? Let's make some magic! That fez and vest combo is much too third century. It's all so magical. For the first time in my life, things are starting to go right. For the first time in my life, things are starting to go right. She deserves a prince</p>

                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <ul class="list-group mt-2">
                            <li class="list-group-item">Country : {movie.country}</li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <ul class="list-group mt-2">
                            <li class="list-group-item">Director : {movie.director}</li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <ul class="list-group mt-2">
                            <li class="list-group-item">Duration : {movie.duration} M</li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <ul class="list-group mt-2">
                            <li class="list-group-item">Genre : {movie.genre}</li>
                        </ul>
                    </div>
                </div>

            </div>



            <div className="container-fluid episodeSection__details pt-5">
                <div className="container">
                    <h1 className='text-light'>Episods</h1>
                    <div className="col-lg-6 mx-auto mt-5">
                        <Carousel>
                            <Carousel.Item>
                                <img src="../movieApp/video.png" alt="" className="img-fluid w-100" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="../movieApp/video.png" alt="" className="img-fluid w-100" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="../movieApp/video.png" alt="" className="img-fluid w-100" />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>

            </div>

            <Footer />

        </>



    );
}



export default Details;