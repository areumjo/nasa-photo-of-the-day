import React from "react";
import "./App.css";

import Header from "./Component/Header.js";
import ImgContainer from "./Component/APOD/ImgContainer.js";

function App() {
  return (
    <div className="App">
      <Header />
      <ImgContainer />
    </div>
  );
}

export default App;
