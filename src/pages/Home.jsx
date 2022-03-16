import React from "react";
import YandexMaps from "../components/YandexMaps/YandexMaps";
import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";
const Home = () => {
  return (
    <div>
      <Navbar title={"Grab it 🍏"} />
      <YandexMaps />
      <Navigation />
    </div>
  );
};
export default Home;
