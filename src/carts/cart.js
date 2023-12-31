import "./cart.css";

function Cart({title : brand , img , text ,children}) {
  
  return (
    <div className="cart">
      <img src={img} alt=""/>
      <h3>{brand}</h3>
      <p>{text}</p>
      {children}
    </div>
  );
}

export default Cart;
