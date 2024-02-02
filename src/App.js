import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import axios from "axios";
import NavBar from "./components/NavBar";

function App() {
  const [responseQuery, setResponse] = useState([]);
  const [query, setQuery] = useState("");
  const [clicke, setClicked] = useState(true);

  async function handleSend() {
    try {
      const response = await axios.get(
        `http://10.81.230.210:8000/?query=${query}`
      );
      setResponse(response.data);
      console.log(response.data, "-----------------------");
      setClicked(true);
    } catch (error) {
      console.error(error);
    }
  }

  function handleQuery(e) {
    setQuery(e.target.value);
  }

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="search-element">
          <input type="text" placeholder="Search Here" onChange={handleQuery} />
          <button onClick={handleSend}>Search</button>
        </div>
        {clicke && (
          <div className="container1">
            <Card
              title={"yyyyyyyeyeryereryeyeryeyeyereyeyeryeryeryeryreyeye"}
            />
            <Card
              title={"yyyyyyyeyeryereryeyeryeyeyereyeyeryeryeryeryreyeye"}
            />
            <Card
              title={"yyyyyyyeyeryereryeyeryeyeyereyeyeryeryeryeryreyeye"}
            />
            <Card
              title={"yyyyyyyeyeryereryeyeryeyeyereyeyeryeryeryeryreyeye"}
            />
            <Card
              title={"yyyyyyyeyeryereryeyeryeyeyereyeyeryeryeryeryreyeye"}
            />
            <Card
              title={"yyyyyyyeyeryereryeyeryeyeyereyeyeryeryeryeryreyeye"}
            />
            <Card
              title={"yyyyyyyeyeryereryeyeryeyeyereyeyeryeryeryeryreyeye"}
            />
            <Card
              title={"yyyyyyyeyeryereryeyeryeyeyereyeyeryeryeryeryreyeye"}
            />

            {responseQuery.map((item) => (
              <Card key={item.id} urls={item[0]} title={item[1]} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
