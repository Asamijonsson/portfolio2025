"use client";
import style from "./Home.module.css";
// import Weather from "../components/Weather";

const Home = () => {
  return (
    <>
      <div className={style.text}>
        Hi, Welcome to my website! This site is for Final Fantasy XIV Crafters.
        You can find items and recipes here. I've also added a look up Pokémon,
        so you can find them as well. Please enjoy!
        {/* Feature update: I will implement a market board from FFXIV, where you can see item prices.  */}
      </div>
      {/* <Weather /> */}
    </>
  );
};

export default Home;
