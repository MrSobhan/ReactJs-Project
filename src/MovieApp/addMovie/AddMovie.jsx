import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/authContext';
import Header from '../Components/headerAddMovie/Header'
import Footer from '../Components/Footer/Footer'
import Cart from "../Components/Cart/Cart";

import './AddMovie.css'

const AddMovie = () => {
    const [movies, setMovies] = useState([])
    const authContext = useContext(AuthContext)

    const [isRecentSearch, setIsRecentSearch] = useState(true)

    const [valueSearch, setValueSearch] = useState("")
    const [filterArry, setFilterArry] = useState([])

    useEffect(() => {

        fetch(`${authContext.baseUrl}/movies`)
            .then(res => res.json())
            .then(allmovies => {
                setMovies(allmovies)
                // console.log(allmovies);

            })


    }, [])


    const SearchHandler = (e) => {
        if (e.keyCode == 13) {
            setIsRecentSearch(false)
            let filterMovie = movies.filter(movie => movie.title.includes(valueSearch))

            if (filterMovie.length) {

                setFilterArry(filterMovie)
            } else {
                setFilterArry([])

            }

        }

    }





    return (
        <>
            <Header />

            <div className="container sectionMain__myMovie">
                <div className="shadow round-5 searchBar gap-3 flex-between">
                    <img src="./movieApp/qwsearch.png" alt="" className="img-fluid img-icon" />
                    <input type="text" placeholder='Search Movie Name' value={valueSearch} onChange={(e) => setValueSearch(e.target.value)} onKeyUp={(e) => SearchHandler(e)} />
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
                <div className="row mt-3 px-2">

                    {
                        isRecentSearch ? (
                            movies && (
                                movies.map(movie => {
                                    if (movie.rating > 8) {
                                        return <Cart key={movie.id} {...movie} />
                                    }

                                })
                            )
                        ) : (
                            filterArry.length != 0 ? (
                                filterArry.map(movie => (
                                    <Cart key={movie.id} {...movie} />

                                ))
                            ) : (
                                <div class="alert alert-danger" role="alert">
                                    <i class="bi bi-ban"></i> Sorry, we couldn't find any movies :(
                                </div>
                            )
                        )

                    }

                </div>
            </div>

            <button className="btnAdd shadow"><i className="bi bi-plus fs-2 text-light"></i></button>


            <Footer />

        </>



    );
}



export default AddMovie;