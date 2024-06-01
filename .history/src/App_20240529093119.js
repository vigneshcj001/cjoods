import React from "react";
import { ReactDOM } from "react";
import Header from './Components/Header'
const AppLayout=()=>{
  return(
    <Header/>
  )
}
// Get the root element in the HTML file
const rootElement = document.getElementById("root");

// Create a root using React 18's createRoot API
const root = ReactDOM.createRoot(rootElement);

// Render the container inside the root
root.render(<AppLayout/>);
