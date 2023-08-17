import React from "react";
import Search from "./Search";
import "../styles/app.css";

function App() {
  return (
    <div className="app">
      <img className="nasa-logo" src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg" alt="Nasa Logo" />
      <Search />
    </div>
  );
}

export default App;