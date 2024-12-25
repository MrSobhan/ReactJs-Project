import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/authContext';
import Header from "../Components/header/Header";
import Accordion from 'react-bootstrap/Accordion';
import Cart from "../Components/Cart/Cart";
import Footer from "../Components/Footer/Footer";
import './Home.css';

export default function Home() {
  const [isLoad, setIsLoad] = useState(true )
  const [movies, setMovies] = useState([])
  const authContext = useContext(AuthContext)

  useEffect(() => {

    fetch(`${authContext.baseUrl}/movies`)
      .then(res => res.json())
      .then(allmovies => {
        setMovies(allmovies)
        console.log(allmovies);

      })
  }, [])

  setTimeout(() => {
    setIsLoad(false)
  }, 2000);

  return (
    <>

      {
        isLoad && (
          <div className="containerLoad flex-items">
            <img src="./movieApp/loadgif.gif" alt="" />
          </div>
        )
      }

      <Header />

      <div className="container px-2 px-lg-0 firstContainer__main">
        <div className="row">


          <div className="col-lg-6 textBody p-5 d-none d-lg-flex">
            <h2 className="text-dark fs-1 mb-3 me-auto textMain__firstContainer"><img src="./movieApp/gif1.gif" alt="" className="img-fluid" />Ｍｏｖｉｅ Ａｐｐ</h2>
            <p className="fs-5 text-muted">We love personal media too! Use Plex to organize, beautify, and stream your personal collection of movies, TV shows, music, and photos anywhere, on all your devices.</p>
            <button className="btnDetails me-auto mt-3">Watch Movies</button>
          </div>



          <div className="col-lg-6">
            <div className="sectionTop__main my-5 shadow" style={{ background: "linear-gradient(180deg, transparent, rgb(0, 0, 0)) , url('./movieApp/PeakyBlinders.webp')" }}>
              <div className="row w-100">
                <div className="col-12">
                  <h1 className="text-light">Peaky Blinders</h1>
                </div>
                <div className="col-12">
                  <div className="flex-between mt-1">
                    <div className="ratingImdb gap-2 d-flex text-light">
                      <img src="./movieApp/rating.png" alt="rating" className="img-icon" />
                      <p>7.8/10</p>
                    </div>
                    <button className="btnThem">Rate</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="container pb-5">
        <h1>Trends</h1>
        <div className="row mt-3">
          {
            movies && (
              movies.map(movie => (

                <Cart key={movie.id} {...movie} />
              ))
            )
          }


        </div>
      </div>

      <div className="container p-5 flex-items">
        <img src="./movieApp/secmain.png" alt="" className="imgfluid imgSecMain" />
      </div>


      <div className="container">
        <h1>Popular</h1>
        <div className="row mt-3">

          {
            movies && (
              movies.map(movie => {
                if (movie.rating > 8) {
                  return <Cart key={movie.id} {...movie} />
                }

              })
            )
          }

        </div>
      </div>


      <div className="container-fluid mediaSec__main my-5 py-5 flex-items">
        <div className="container">
          <div className="row flex-items">
            <div className="col-lg-6 textBody p-5">
              <h2 className="text-light fs-1 w-75 mb-5 me-auto">You bring your media, we’ll do the rest.</h2>
              <p className="fs-5">We love personal media too! Use Plex to organize, beautify, and stream your personal collection of movies, TV shows, music, and photos anywhere, on all your devices.</p>
            </div>
            <div className="col-lg-6">
              <img src="./movieApp/pms-devices-image.png" alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h1 className="mb-5">Frequently Asked Questions</h1>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0" className="my-3 shadow">
            <Accordion.Header>How can I watch movies on this website?</Accordion.Header>
            <Accordion.Body>
            To watch movies, simply create an account, log in, and browse our library. You can choose a movie and stream it directly on our platform.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="my-3 shadow">
            <Accordion.Header>Do I need a subscription to access the content?</Accordion.Header>
            <Accordion.Body>
            Yes, a subscription is required to access premium content. However, we also offer a selection of free movies for registered users.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="my-3 shadow">
            <Accordion.Header>Can I download movies to watch offline?</Accordion.Header>
            <Accordion.Body>
            Currently, offline downloads are available for our premium members. You can download selected movies through our mobile app.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="my-3 shadow">
            <Accordion.Header>Is the content available in multiple languages?</Accordion.Header>
            <Accordion.Body>
            Yes, many of our movies offer subtitles and audio options in multiple languages. You can choose your preferred language from the player settings.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      <Footer />


    </>
  );
}
