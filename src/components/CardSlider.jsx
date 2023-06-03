import React from "react";
import Card from "./Card";

export default function CardSlider({ data, title }) {
  return (
    <div className="">
      <h2>{title}</h2>
      {data.map((movie) => (
        <Card key={movie.id} movieData={movie} />
      ))}
    </div>
  );
}
