import React, { useState, useEffect } from "react";
import HeroePartida from "./HeroePartida";
import "./Partida.css";

export default function Partida(props) {
  return (
    <div className="partida">
      <div className="heroes-partida-container">
        {props.draft.map((heroe) => {
          return <HeroePartida heroe={heroe} key={heroe.alt} />;
        })}
      </div>
    </div>
  );
}
