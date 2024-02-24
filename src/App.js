import React, { useState } from "react";
import Body from "./components/Body";
import Navbar from "./components/Navbar";

function App() {
  const [listItems, setListItems] = useState([]);
  return (
    <div className="min-h-screen bg-sky-100">
      <Navbar />
      <Body listItems={listItems} setListItems={setListItems} />
    </div>
  );
}

export default App;
