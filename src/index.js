import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

/** Pizza Data */

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

/** Pizzas Data */

function App() {
  console.log();
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Company</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <div className="pizzas">
        <Pizza
          name={pizzaData[0].name}
          ingredients={pizzaData[0].ingredients}
          price={pizzaData[0].price}
          img={pizzaData[0].photoName}
        />
        <Pizza
          name={pizzaData[1].name}
          ingredients={pizzaData[0].ingredients}
          price={pizzaData[1].price}
          img={pizzaData[1].photoName}
        />
        <Pizza
          name={pizzaData[2].name}
          ingredients={pizzaData[2].ingredients}
          price={pizzaData[2].price}
          img={pizzaData[2].photoName}
        />
        <Pizza
          name={pizzaData[3].name}
          ingredients={pizzaData[3].ingredients}
          price={pizzaData[3].price}
          img={pizzaData[3].photoName}
        />
        <Pizza
          name={pizzaData[4].name}
          ingredients={pizzaData[4].ingredients}
          price={pizzaData[4].price}
          img={pizzaData[4].photoName}
        />
        <Pizza
          name={pizzaData[5].name}
          ingredients={pizzaData[5].ingredients}
          price={pizzaData[5].price}
          img={pizzaData[5].photoName}
        />
      </div>
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  //   console.log(isOpen);

  //   if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  //   else alert("Sorry, We're closed!");
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()} We're currently open
    </footer>
  );
}

function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.img} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
