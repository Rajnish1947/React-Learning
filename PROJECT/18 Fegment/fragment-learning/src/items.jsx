import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./component/Container";
import "./App.css"; // Import your custom CSS file

function Map() {
  let foodItems = [
    { name: "Green-Vegetable", image: "https://tse2.mm.bing.net/th?id=OIP.A8aeyefwSF6cDZBw1HvR7gHaEy&pid=Api&P=0&h=180" },
    { name: "Banana", image: "https://tse2.mm.bing.net/th?id=OIP.JXliVt4gLy2pVAZ_vv8IfgHaHa&pid=Api&P=0&h=180" },
    { name: "Dry-fruits", image: "https://tse2.mm.bing.net/th?id=OIP.FyMlgZCrgl05A-U7MkkABAHaE8&pid=Api&P=0&h=180" },
    { name: "Cheacken", image: "https://tse3.mm.bing.net/th?id=OIP.FIT1OXSJ8sxlqlczNkNb2wHaFv&pid=Api&P=0&h=180" },
    { name: "Milk-Curd", image: "https://tse4.mm.bing.net/th?id=OIP.DP4-lubxpSKXbHGCMfe0pgHaGx&pid=Api&P=0&h=180" },
    { name: "Strawberry", image: "https://tse2.mm.bing.net/th?id=OIP.Ti1FgiULWa06La5905GhUgHaEo&pid=Api&P=0&h=180" },
  ];

  const handleClick = (item) => {
    alert(`${item.name} Successfully Order`)
  };

  return (
    <center>
      <Container>
        <h1>Healthy Food Items</h1>
        <hr />
        <ul className="list-group">
          {foodItems.map((item) => (
            <li className="list-group-item name" key={item.name}>
              <div className="item-content">
                <span className="item-text">{item.name}</span>
                <img src={item.image} alt={item.name} className="item-image" />
                <button 
                  className="btn btn-success button1"
                  onClick={() => handleClick(item)}
                >
                  Confirmed
                </button>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </center>
  );
}

export default Map;
