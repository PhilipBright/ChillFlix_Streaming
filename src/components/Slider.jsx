import React from "react";
import CardSlider from "./CardSlider";

export default function Slider({ movies }) {
  console.log(movies);
  const getMoviesFromRange = (from, to) => {
    return movies.slice(from, to);
  };

  return (
    <div className="flex flex-col  ">
      <CardSlider data={getMoviesFromRange(0, 10)} title="Trending Now" />
      <CardSlider data={getMoviesFromRange(10, 20)} title="New Releases" />
      <CardSlider data={getMoviesFromRange(20, 30)} title="Blockbuster Movies" />
      <CardSlider data={getMoviesFromRange(30, 40)} title="Popular on Netflix" />
      <CardSlider data={getMoviesFromRange(40, 50)} title="Action Movies" />
      <CardSlider data={getMoviesFromRange(50, 60)} title="Epics" />
    </div>
  );
}
