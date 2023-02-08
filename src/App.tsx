import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ExploreTopBooks from "./components/Home/ExploreTopBooks";
import Carousel from "./components/Home/Carousel";

function App() {
  return (
    <>
      <NavBar />
      <ExploreTopBooks />
    </>
  );
}

export default App;
