import React, { useState, useEffect } from "react";
import './App.css'

function App() {

  const [mytips, setTips] = useState("");

  const fetchTips = async () => {
  const response = await fetch(
      "https://www.boredapi.com/api/activity/"
    );
   const data = await response.json();
   setTips(data.activity);
  };



  useEffect(() => {
    fetchTips();
  }, []);



  return (
    <div>
      <div className="app">
      <h1>Боремся со скукой / fighting boredom</h1>
      </div>
      <div className="appTwo">
      <p> {mytips} </p>
      </div>
      <div className="appTwo">
      <button onClick={fetchTips}>Попробуй снова / try again</button>
      </div>
    </div>
  );
}

export default App;
