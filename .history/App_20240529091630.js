// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// Create the first heading element
const heading = React.createElement(
  "h1",
  {
    id: "title",
    style: {
      background: "red",
    },
    className: "title"
  },
  "heading"
);

// Create the second heading element
const heading1 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "heading1"
);

// Create the container element that contains both headings
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading1]
);

// Get the root element in the HTML file
const rootElement = document.getElementById("root");

// Create a root using React 18's createRoot API
const root = ReactDOM.createRoot(rootElement);

// Render the container inside the root
root.render(container);
