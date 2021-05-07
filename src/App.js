import React, { useState, useEffect } from "react";
import Portada from "./Portada";
import Draft from "./Draft";
import Partida from "./Partida";
import detectBrowserLanguage from "detect-browser-language";
import textos from "./data/textos";

import "./App.css";

export default function App(props) {
  const [seccion, setSeccion] = useState("portada");
  const [draft, setDraft] = useState([]);
  const [browserLanguage, setBrowserLanguage] = useState("en-US");

  // Detecta el lenguaje del navegador y lo guarda en state
  useEffect(() => {
    var browserLanguage = detectBrowserLanguage();
    // Si lo encuentra en los textos, lo asigna
    if (browserLanguage in textos) {
      setBrowserLanguage(browserLanguage);
    } else {
      // Sino, asigna inglés
      setBrowserLanguage("en-US");
    }
  }, []);

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
            browserLanguage={browserLanguage}
          />
        )}
        {seccion === "draft" && (
          <Draft
            irASeccion={setSeccion}
            pickearHeroe={pickearHeroe}
            draft={draft}
            browserLanguage={browserLanguage}
          />
        )}
        {seccion === "partida" && (
          <Partida
            irASeccion={setSeccion}
            draft={draft}
            browserLanguage={browserLanguage}
          />
        )}
      </div>
    </div>
  );
}
