import "./App.css";
import Header from "../header/header";
import Cart from "../carts/cart";

function App() {
  
  let carts = [
    {
      title: "labtap Asus",
      img: "./logo512.png",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam iste provident necessitatibus tempora quae nam enim maiores, cumque nesciunt eius.",
      offer: 30,
    },
    {
      title: "labtap acer",
      img: "./logo512.png",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam iste provident necessitatibus ",
      offer: 20,
    },
    {
      title: "labtap hp",
      img: "./logo512.png",
      text: "Lorem ipsum dolor sit amet consectetur ",
      offer: 10,
    },
  ];

  console.log(carts[0].offer);

  return (
    <div className="App">
      <Header />

      <div className="flex">
        <Cart {...carts[0]}>
          <div>
            <div className="btn">shoping</div>
            <p>{carts[0].offer}%</p>
          </div>
        </Cart>
        <Cart {...carts[1]}>
          <div>
            <div className="btn">shoping</div>
            <p>{carts[1].offer}%</p>
          </div>
        </Cart>
        <Cart {...carts[2]}>
          <div>
            <div className="btn">
              shoping
            </div>
            <p>{carts[2].offer}%</p>
          </div>
        </Cart>
      </div>
    </div>
  );
}

export default App;
