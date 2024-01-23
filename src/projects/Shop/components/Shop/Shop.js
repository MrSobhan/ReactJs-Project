import React, { Component } from "react";
import Product from "./Product";
import CartProduct from "./CartProduct";
import Social from "./Social";
import { findByDisplayValue } from "@testing-library/react";

export default class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        { id: 1, title: "Album 1", price: 5, img: "../src/projects/Shop/components/images/Album 1.png" },
        { id: 2, title: "Album 2", price: 15, img: "../src/projects/Shop/components/images/Album 2.png" },
        { id: 3, title: "Album 3", price: 20, img: "../src/projects/Shop/components/images/Album 3.png" },
        { id: 4, title: "Album 4", price: 100, img: "../src/projects/Shop/components/images/Album 4.png" },
        { id: 5, title: "Coffee", price: 5, img: "../src/projects/Shop/components/images/Cofee.png" },
        { id: 6, title: "Shirt", price: 50, img: "../src/projects/Shop/components/images/Shirt.png" },
      ],

      shoppingCart: [],
      socials: [
        {
          id: 1,
          href: "https://www.youtube.com",
          img: "Images/YouTube Logo.png",
        },
        {
          id: 2,
          href: "https://www.spotify.com",
          img: "Images/Spotify Logo.png",
        },
        {
          id: 3,
          href: "https://www.facebook.com",
          img: "Images/YouTube Logo.png",
        },
      ],
    };
  }

  AddToCart(id) {
    let findInproduct = this.state.products.findIndex((e) => e.id == id);
    let product = this.state.products[findInproduct];

    let shoppingMyCart = this.state.shoppingCart;

    shoppingMyCart.push(product);

    this.setState({ shoppingCart: shoppingMyCart });
    console.log(shoppingMyCart);
  }

  removeCart(id) {
    let findInproduct = this.state.shoppingCart.findIndex((e) => e.id == id);

    let shoppingMyCart = this.state.shoppingCart;

    shoppingMyCart.splice(findInproduct  , 1);

    this.setState({ shoppingCart: shoppingMyCart });
    console.log(findInproduct);
  }

  clearData(){
    this.setState({ shoppingCart: [] });
  }

  render() {
    return (
      <>
        <header class="main-header">
          <nav class="main-nav nav">
            <ul>
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#">STORE</a>
              </li>
              <li>
                <a href="#">ABOUT</a>
              </li>
            </ul>
          </nav>
          <h1 class="band-name band-name-large">SabzLearn Shop</h1>
        </header>
        <section class="container content-section">
          <div class="shop-items">
            {this.state.products.map((cart) => (
              <Product
                key={cart.id}
                {...cart}
                addtocart={(id) => this.AddToCart(id)}
              />
            ))}
          </div>
        </section>
        <section class="container content-section">
          <h2 class="section-header">CART</h2>
          <div class="cart-row">
            <span class="cart-item cart-header cart-column">ITEM</span>
            <span class="cart-price cart-header cart-column">PRICE</span>
            <span class="cart-quantity cart-header cart-column">Doing</span>
          </div>
          <div class="cart-items">
            {this.state.shoppingCart.length > 0 &&this.state.shoppingCart.map((cart) => (
              <CartProduct
                key={cart.id}
                {...cart}
                removecart={(id) => this.removeCart(id)}
              />
            ))}
          </div>
          <button class="btn btn-primary btn-purchase" type="button" onClick={()=>this.clearData()}>
            Empty Cart
          </button>
        </section>
        <footer class="main-footer">
          <div class="container main-footer-container">
            <h3 class="band-name">The Generics</h3>
            <ul class="nav footer-nav">
              <Social />
            </ul>
          </div>
        </footer>
      </>
    );
  }
}
