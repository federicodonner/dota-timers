import React, { useEffect } from "react";
import images from "./images";
import textos from "./data/textos";

import "./Portada.css";

export default function Portada(props) {
  // Cuando carga el state reinicia el draft
  useEffect(() => {
    if (props.draft.length > 0) {
      props.reiniciarDraft();
    }
  }, [props]);

  return (
    <div className="portada">
      <div className="logo-container">
        <img className="logo" src={images.logo} alt="logo" />
        <h1>{textos[props.browserLanguage].tituloPortada}</h1>
        <p>{textos[props.browserLanguage].actualizadoPara}7.30.</p>
        {textos[props.browserLanguage].instrucciones.map((parrafo, index) => {
          return <p key={index}>{parrafo}</p>;
        })}
        <div
          className="boton-texto centrado boton-comenzar"
          onClick={() => {
            props.irASeccion("draft");
          }}
        >
          {textos[props.browserLanguage].botonIrAlDraft}
        </div>
      </div>
    </div>
  );
}
