import React, { useState, useEffect } from "react";
import "./App.css";

function Servertest() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
      console.log("g", message)
  }, []);

  return (
    <div className="Servertest">
      <h1>{message}</h1>
      <b></b>
    </div>
  );
}

export default Servertest;