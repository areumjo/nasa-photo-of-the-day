import React from "react";

function Header () {
    return (
        <div className="App-header">
            <h1 className="App-link">Astronomy Picture of the Day</h1>
            <img className="App-logo" src={require("./img/NASA-logo.png")} alt="nasa-logo" />
        </div>
    )
}

export default Header;