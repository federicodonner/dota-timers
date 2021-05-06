import React, { useState, useEffect } from "react";
import Portada from "./Portada";
import Draft from "./Draft";
import Partida from "./Partida";
import logo from "./images/dota-timers-logo.png";
import "./App.css";

export default function App(props) {
  const [seccion, setSeccion] = useState("portada");
  const [draft, setDraft] = useState([]);

  useEffect(() => {
    // BORRAR
    setDraft([
      {
        nombre: "Mars",
        imagen: "Mars_icon.webp",
        alt: "mars",
        atributo: "Fuerza",
        habilidad: {
          alt: "arenaofblood",
          imagen: "Arena_Of_Blood_icon.webp",
          cooldowns: [90, 75, 60],
          nombres: ["Nivel 1", "Nivel 2", "Nivel 3"],
          clases: ["nivel", "nivel", "nivel"],
        },
      },
      {
        nombre: "Troll Warlord",
        imagen: "Troll_Warlord_icon.webp",
        alt: "trollwarlord",
        atributo: "Agilidad",
        habilidad: {
          imagen: "Battle_Trance_icon.webp",
          cooldowns: [90, 90, 90],
          nombres: ["Nivel 1", "Nivel 2", "Nivel 3"],
          clases: ["nivel", "nivel", "nivel"],
          alt: "battletrance",
        },
      },
      {
        nombre: "Dark Seer",
        imagen: "Dark_Seer_icon.webp",
        alt: "darkseer",
        atributo: "Inteligencia",
      },
      {
        nombre: "Dark Willow",
        imagen: "Dark_Willow_icon.webp",
        alt: "darkwillow",
        atributo: "Inteligencia",
      },
      {
        nombre: "Dawnbreaker",
        imagen: "Dawnbreaker_icon.webp",
        alt: "dawnbreaker",
        atributo: "Fuerza",
      },
    ]);
  }, [props]);

  // Agrega a un héroe al draft, ejecutad adesde draft
  function pickearHeroe(posicion, heroe) {
    var draftActual = draft;
    draftActual[posicion - 1] = heroe;
    setDraft(draftActual);
  }

  return (
    <div className="app">
      <div className="content">
        {seccion === "portada" && <Portada irASeccion={setSeccion} />}
        {seccion === "draft" && (
          <Draft
            irASeccion={setSeccion}
            pickearHeroe={pickearHeroe}
            draft={draft}
          />
        )}
        {seccion === "partida" && (
          <Partida irASeccion={setSeccion} draft={draft} />
        )}
      </div>
    </div>
  );
}
