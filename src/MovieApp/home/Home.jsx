import React from "react";
import Header from "../Components/header/Header";
import Accordion from 'react-bootstrap/Accordion';
import Cart from "../Components/Cart/Cart";
import Footer from "../Components/Footer/Footer";
import './Home.css';

export default function Home() {
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
                  <img src="./movieApp/rating.png" alt="rating" className="img-icon" />
                  <p>7.8/10</p>
                </div>
                <button className="btnThem">Rate</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-5">
        <h1>Trends</h1>
        <div className="row mt-3">

          <Cart />
          <Cart />
          <Cart />

        </div>
      </div>

      <div className="container p-5 flex-items">
        <img src="./movieApp/secmain.png" alt="" className="imgfluid w-75" />
      </div>


      <div className="container">
        <h1>Popular</h1>
        <div className="row mt-3">

          <Cart />
          <Cart />
          <Cart />

        </div>
      </div>


      <div className="container-fluid mediaSec__main my-5 py-5 flex-items">
        <div className="container">
          <div className="row flex-items">
            <div className="col-lg-6 textBody p-5">
              <h2 className="text-light fs-1 w-75 mb-5">You bring your media, we’ll do the rest.</h2>
              <p className="fs-5">We love personal media too! Use Plex to organize, beautify, and stream your personal collection of movies, TV shows, music, and photos anywhere, on all your devices.</p>
            </div>
            <div className="col-lg-6">
              <img src="./movieApp/pms-devices-image.png" alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h1 className="text-center mb-5">Question or two? Here’s an answer or two.</h1>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0" className="my-3 shadow">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="my-3 shadow">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="my-3 shadow">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="my-3 shadow">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      <Footer/>

    </>
  );
}
