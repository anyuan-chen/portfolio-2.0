import React from "react";

export default function PortfolioItem(props) {
  return (
    <div className="flex space-x-6">
      <img
        src={props.img}
        className="object-scale-down w-40 space-x-2 p-2 rounded font-mono "
      ></img>
      <div className="flex flex-col space-y-2 font-mono text-sm">
        <h2 className="text-lg">{props.name}</h2>
        <p className="text-gray-600">{props.desc}</p>
      </div>
    </div>
  );
}
