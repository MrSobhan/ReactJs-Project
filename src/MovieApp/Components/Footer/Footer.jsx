import React from 'react';


const Footer = () => {
    return (
        <footer className="text-center text-lg-start text-light mt-5" style={{ backgroundColor: 'black' }}>
            <section className='pt-4'>
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="bi bi-camera-reels"></i> Movie App
                            </h6>
                            <p>
                                We love personal media too! Use Plex to organize, beautify, and stream your personal collection of movies, TV shows, music, and photos anywhere, on all your devices.
                            </p>
                        </div>


                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Explore</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Add Movie</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Recent</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Profile</a>
                            </p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><i className="fas fa-home me-3"></i> IR-IRAN, NY 10012, IR</p>
                            <p>
                                <i className="fas fa-envelope me-3"></i>
                                MovieApp@gmail.com
                            </p>
                            <p><i className="fas fa-phone me-3"></i> + 98 234 567 88 88</p>
                            <p><i className="fas fa-print me-3"></i> + 98 234 567 89 88</p>
                        </div>


                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-4">
                            <img src="https://s32.picofile.com/file/8481246950/imgFooter.png" alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>

            <div className="text-center p-4">
                © 2024 Craete With ❤️ By <a href="https://mrlegend.liara.run/">Sobahn Musazadeh</a> & Amirreza Julani
            </div>
        </footer>
    );
}


export default Footer;