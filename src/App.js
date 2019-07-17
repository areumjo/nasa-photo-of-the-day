import React from "react";
import "./App.css";

import Header from "./Component/Header.js";
import ImgContainer from "./Component/ImgContainer.js";

function App() {
  return (
    <div className="App">
      <Header />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img">🚀</span>!
      </p>
      <ImgContainer />
    </div>
  );
}

export default App;
