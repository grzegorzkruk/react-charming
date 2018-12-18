import React from "react";
import ReactDOM from "react-dom";
import Charming from "./charming";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Charming>
        <h1>Hello Charming</h1>
        <Charming splitRegex={/(\s+)/}>
          <h1>Test</h1>
          Test
          <p>Test paragraph</p>
          <b>Test b</b>
          <div>random text</div>
        </Charming>
        <h1>
          <Charming>Test</Charming>
        </h1>
      </Charming>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
