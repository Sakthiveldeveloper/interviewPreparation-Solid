import React, { useState, useEffect } from "react";

function TrafficSignal() {
  const [signal, setSignal] = useState("red");

  useEffect(() => {
    let timer;

    if (signal === "red") {
      timer = setTimeout(() => setSignal("green"), 3000); // red → green
    } else if (signal === "green") {
      timer = setTimeout(() => setSignal("yellow"), 3000); // green → yellow
    } else if (signal === "yellow") {
      timer = setTimeout(() => setSignal("red"), 2000); // yellow → red
    }

    return () => clearTimeout(timer);
  }, [signal]);
  //   const [signal, setSignal] = useState<"red" | "yellow" | "green">("red");

  // useEffect(() => {
  //   const sequence: ("red" | "yellow" | "green")[] = ["red", "yellow", "green", "yellow"];
  //   let index = 0;

  //   const interval = setInterval(() => {
  //     index = (index + 1) % sequence.length; // cycle through sequence
  //     setSignal(sequence[index]);
  //   }, 2000); // change signal every 2 seconds

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100px", margin: "20px auto" }}>
      <div
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          margin: "10px auto",
          backgroundColor: signal === "red" ? "red" : "lightgray"
        }}
      ></div>
      <div
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          margin: "10px auto",
          backgroundColor: signal === "yellow" ? "yellow" : "lightgray"
        }}
      ></div>
      <div
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          margin: "10px auto",
          backgroundColor: signal === "green" ? "green" : "lightgray"
        }}
      ></div>
    </div>
  );
}

export default TrafficSignal;
