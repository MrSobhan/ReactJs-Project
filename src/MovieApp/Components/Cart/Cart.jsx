import React from 'react';
import { Link } from "react-router-dom";

import './Cart.css';

const Cart = () => {
    return (

        <div className="col-lg-4 mt-4 cart"> {/* Carts  Ui*/}
            <div className="row">
                <div className="col-6">
                    <Link to="/details/1"><img src="./movieApp/PeakyBlinders.webp" alt="" className="img-fluid shadow cartMovie__img c-p" /></Link>
                </div>
                <div className="col-6 mainText__Cart d-flex py-3">
                    <h4>Peaky Blinders</h4>
                    <div className="row">
                        <div className="col-12">
                            8.7 / 10
                        </div>
                        <div className="col-12">
                            <img src="./movieApp/starRating.png" alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;