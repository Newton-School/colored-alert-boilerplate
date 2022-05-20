import React from "react";
import { useState } from "react";

import "./home.css";
const object = [
  {
    type: "primary",
    "background-color": "blue",
  },
  {
    type: "secondary",
    "background-color": "gray",
  },
  {
    type: "success",
    "background-color": "green",
  },
  {
    type: "danger",
    "background-color": "red",
  },
  {
    type: "warning",
    "background-color": "yellow",
  },
  {
    type: "light",
    "background-color": "white",
  },
  {
    type: "info",
    "background-color": "olive",
  },
  {
    type: "dark",
    "background-color": "black",
  },
];
export default function Home() {
  const [show ,setShow]=useState(false)
 
  return (
    <>
  
      <div>
        <h3>select Alert color</h3>
        <select className="select" data-tid="select" >
          <option value="">select</option>
          <option value="primary">primary</option>
          <option  value="secondary">
            
            secondary
          </option>
          <option value="success"> success</option>
          <option value="danger"> danger</option>
          <option value="warning"> warning</option>
          <option value="info"> info</option>
          <option value="light"> light</option>
          <option value="dark"> dark</option>
        </select>
      </div>
      {show && <div data-tid="alertdiv" className="alert" >
        <h2>selected color o.type </h2>
      </div>}
      
    </>
  );
}
