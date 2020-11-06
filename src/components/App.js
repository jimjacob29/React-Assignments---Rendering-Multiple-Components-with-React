import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  return (
    <ol>
      <li>
        <h1 data-ns-test="project-name">project-name1</h1>
        <div data-ns-test="project-description">1 project-description</div>
      </li>
      <li>
        <h1 data-ns-test="project-name">project-name2</h1>
        <div data-ns-test="project-description">2project-description</div>
      </li>
    </ol>
  );
};

export default App;
