import React, { useState, useEffect } from "react";
import Heroes from "./Heroes";
import images from "./images";
import textos from "./data/textos";
import "./Draft.css";

export default function Draft(props) {
  const [verHeroes, setVerHeroes] = useState(false);
  const [posicion, setPosicion] = useState(0);

  useEffect(() => {
    // Cuando carga la página scrollea para arriba del todo
    window.scrollTo(0, 0);
  }, [props]);

  function pickearHeroe(heroe) {
    props.pickearHeroe(posicion, heroe);
    setPosicion(0);
    setVerHeroes(false);
  }

  function mostrarHeroes(posicion) {
    setPosicion(posicion);
    setVerHeroes(true);
  }

  // Función ejecutada con el botón de iniciar partida
  function empezarPartida() {
    // Cuenta la cantidad de objetos no-null del array del draft
    var len = props.draft.filter(Boolean).length;
    // Si no es 5, no entra
    if (len !== 5) {
      alert("El draft no está completo");
      return false;
    }
    props.irASeccion("partida");
  }

  return (
    <div className="draft">
      <div className="logo-container">
        <img className="logo" src={images.logo} alt="logo" />
        <h1>{textos[props.browserLanguage].tituloDraft}</h1>
        <p>{textos[props.browserLanguage].instruccionesDraft}</p>
        <div className="seleccion-container">
          <div
            className="seleccion-slot boton-texto"
            onClick={() => {
              mostrarHeroes(1);
            }}
          >
            {props.draft[0] && (
              <img
                className="imagen-heroe-draft"
                src={images[props.draft[0].alt]}
                alt={props.draft[0].alt}
              />
            )}
            {!props.draft[0] && <span>1</span>}
          </div>
          <div
            className="seleccion-slot boton-texto"
            onClick={() => {
              mostrarHeroes(2);
            }}
          >
            {props.draft[1] && (
              <img
                className="imagen-heroe-draft"
                src={images[props.draft[1].alt]}
                alt={props.draft[1].alt}
              />
            )}
            {!props.draft[1] && <span>2</span>}
          </div>
          <div
            className="seleccion-slot boton-texto"
            onClick={() => {
              mostrarHeroes(3);
            }}
          >
            {props.draft[2] && (
              <img
                className="imagen-heroe-draft"
                src={images[props.draft[2].alt]}
                alt={props.draft[2].alt}
              />
            )}
            {!props.draft[2] && <span>3</span>}
          </div>
          <div
            className="seleccion-slot boton-texto"
            onClick={() => {
              mostrarHeroes(4);
            }}
          >
            {props.draft[3] && (
              <img
                className="imagen-heroe-draft"
                src={images[props.draft[3].alt]}
                alt={props.draft[3].alt}
              />
            )}
            {!props.draft[3] && <span>4</span>}
          </div>
          <div
            className="seleccion-slot boton-texto"
            onClick={() => {
              mostrarHeroes(5);
            }}
          >
            {props.draft[4] && (
              <img
                className="imagen-heroe-draft"
                src={images[props.draft[4].alt]}
                alt={props.draft[4].alt}
              />
            )}
            {!props.draft[4] && <span>5</span>}
          </div>
        </div>
      </div>
      {props.draft.filter(Boolean).length === 5 && (
        <div
          className="boton-texto centrado boton-comenzar"
          onClick={empezarPartida}
        >
          {textos[props.browserLanguage].botonEmpezarPartida}
        </div>
      )}
      {verHeroes && (
        <Heroes
          pickearHeroe={pickearHeroe}
          setVerHeroes={setVerHeroes}
          browserLanguage={props.browserLanguage}
        />
      )}
    </div>
  );
}
