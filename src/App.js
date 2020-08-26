import React from "react";
import "./App.css";
import Header from './components/Header';
import Apod from './components/Apod';

function App() {
  return (
    <div className="App">
      <Header />
      <Apod />
    </div>
  );
}

export default App;
