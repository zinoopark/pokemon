import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
import Cards from "./components/Cards";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Cards>
        <Card></Card>
      </Cards>
      {/* <style jsx>
        {`
          div {
            backgroudcolor: blue;
          }
        `}
      </style> */}
    </div>
  );
}

export default App;
