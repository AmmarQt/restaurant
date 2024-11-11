import logo from "./logo.svg";
import "./App.css";
import storedimage from "./image.png";

function App() {
  const products = [
    {
      name: "cookie one",
      price: "2 KWD",
      image:
        "https://cdn.craft.cloud/224393fa-1975-4d80-9067-ada3cb5948ca/assets/bananacookies_detail_1-0002_2022.jpg",
    },
    {
      name: "cookie two",
      price: "3 KWD",
      image:
        "https://cdn.craft.cloud/224393fa-1975-4d80-9067-ada3cb5948ca/assets/bananacookies_detail_1-0002_2022.jpg",
    },
  ];

  const productslist = products.map((product, index) => {
    return (
      <div className="dev-item">
        <img className="image-style" src={product.image}></img>
        <p>{product.name}</p>
        <p>{product.price}</p>
      </div>
    );
  });

  return (
    <div className="App">
      <h1 className="App-header">
        <strong>Cookies & beyond</strong>
      </h1>
      <p className="App">
        <strong>where cookies maniace gathers</strong>
      </p>
      <img className="Stored-Image" src={storedimage}></img>
      <div className="dev-container">{productslist}</div>
    </div>
  );
}

export default App;
