import React from 'react';
import { Link } from "react-router-dom";

import './Cart.css';

const Cart = (props) => {

    
    return (

        <div className="col-lg-4 mt-4 cart"> {/* Carts  Ui*/}
            <div className="row">
                <div className="col-6">
                    <Link to={`/details/${props.id}`}><img src={props.posterUrl && props.posterUrl.length > 20 ? props.posterUrl : "./movieApp/PeakyBlinders.webp"} alt="" className="img-fluid shadow cartMovie__img c-p" /></Link>
                </div>
                <div className="col-6 mainText__Cart d-flex py-3">
                    <h4>{props.title}({props.releaseYear})</h4>
                    <div className="row">
                        <div className="col-12">
                            {props.rating} / 10 IMDB
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