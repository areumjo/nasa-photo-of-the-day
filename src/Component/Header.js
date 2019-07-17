import React from "react";

function Header () {
    return (
        <div className="App-header">
            <img className="App-logo" src={require("./img/NASA-logo.png")} alt="nasa-logo" />
            <h1 className="App-link">Astronomy Picture of the Day</h1>
            <p><span role="img">🚀</span></p>
        </div>
    )
}

export default Header;