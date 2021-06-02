import "./App.css";
import { useState, useEffect } from "react";
import fetchApi from "./api/index";
import Card from "./Components/card";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchApi().then((response) => setData(response));
  }, []);
  return (
    <div className="App">
      
      <div className="container">
        {data.map((item, i) => {
          return <Card name={item.name} id={i} key={i}/>;
        })}
      </div>
    </div>
  );
}

export default App;
