import { useState } from "react";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import PriceOptions from "./components/priceOptions/PriceOptions";
import { LineChart } from "recharts";
import Linechart from "./components/lineChart/Linechart";
import Phones from "./components/phones/phones";



function App() {

  return (
    <>
    <NavBar></NavBar>
      <h1 className="text-3xl bg-green-300">Rifat</h1>
      <PriceOptions></PriceOptions>
      <Linechart></Linechart>
      <Phones></Phones>
    </>
  );
}

export default App;
