import React, { useState } from "react";
import Portada from "./Portada";
import Draft from "./Draft";
import Partida from "./Partida";
import "./App.css";

export default function App(props) {
  const [seccion, setSeccion] = useState("portada");
  const [draft, setDraft] = useState([]);

  // Agrega a un héroe al draft, ejecutad adesde draft
  function pickearHeroe(posicion, heroe) {
    var draftActual = draft;
    draftActual[posicion - 1] = heroe;
    setDraft(draftActual);
  }

  function reiniciarDraft() {
    setDraft([]);
  }

  return (
    <div className="app">
      <div className="content">
        {seccion === "portada" && (
          <Portada
            irASeccion={setSeccion}
            reiniciarDraft={reiniciarDraft}
            draft={draft}
          />
        )}
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
