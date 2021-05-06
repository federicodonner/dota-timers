import React, { useState, useEffect } from "react";
import heroes from "./data/heroes.js";
import images from "./images";
import "./Heroes.css";

export default function Heroes(props) {
  const [heroesProcesados, setHeroesProcesados] = useState(null);

  useEffect(() => {
    var fuerza = [];
    var agilidad = [];
    var inteligencia = [];
    heroes.forEach((heroe) => {
      if (heroe.atributo === "Fuerza") {
        fuerza.push(heroe);
      } else if (heroe.atributo === "Agilidad") {
        agilidad.push(heroe);
      } else if (heroe.atributo === "Inteligencia") {
        inteligencia.push(heroe);
      }
    });

    setHeroesProcesados([
      {
        atributo: "Fuerza",
        alt: "fuerza",
        icono: "Strength_attribute_symbol.webp",
        heroes: fuerza,
      },
      {
        atributo: "Agilidad",
        alt: "agilidad",
        icono: "Agility_attribute_symbol.webp",
        heroes: agilidad,
      },
      {
        atributo: "Inteligencia",
        alt: "inteligencia",
        icono: "Intelligence_attribute_symbol.webp",
        heroes: inteligencia,
      },
    ]);
  }, [props]);

  return (
    <div className="heroes">
      <div className="heroes-seccion">
        {heroesProcesados &&
          heroesProcesados.map((atributo) => {
            return (
              <div className="atributo" key={atributo.atributo}>
                <div className="atributo-titulo">
                  <img
                    src={images[atributo.alt]}
                    className="atributo-icono"
                    alt={atributo.atributo}
                  />
                  {atributo.atributo}
                </div>
                <div className="heroes-tipo-container">
                  {atributo.heroes.map((heroe) => {
                    return (
                      <span
                        className="heroe-retrato"
                        onClick={() => {
                          props.pickearHeroe(heroe);
                        }}
                        key={heroe.alt}
                      >
                        <img src={images[heroe.alt]} alt={heroe.alt} />
                        <span className="heroe-nombre">{heroe.nombre}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
      </div>
      <div
        className="boton-texto centrado boton-cerrar-ver-heroes"
        onClick={() => {
          props.setVerHeroes(false);
        }}
      >
        cancelar
      </div>
    </div>
  );
}
