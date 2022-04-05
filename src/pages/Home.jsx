import React from "react";
import YandexMaps from "../components/YandexMaps/YandexMaps";
import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";
import { useEffect, useState } from "react";
import { getFridges } from "../services/fridgeService";
const Home = () => {
  const [fridges, setFridges] = useState([]);
  useEffect(async() => {
    const {data: fridges} = await getFridges();
    setFridges(fridges);
  }, []);
  return (
    <div>
      <Navbar title={"Grab it 🍏"} />
      <YandexMaps fridges={fridges}/>
      <Navigation />
    </div>
  );
};
export default Home;
