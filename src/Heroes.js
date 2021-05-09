import React, { useState, useEffect } from "react";
import heroes from "./data/heroes.js";
import images from "./images";
import textos from "./data/textos";
import "./Heroes.css";

export default function Heroes(props) {
  const [heroesProcesados, setHeroesProcesados] = useState(null);
  const [heroeBusqueda, setHeroeBusqueda] = useState(null);

  useEffect(() => {
    var fuerza = [];
    var agilidad = [];
    var inteligencia = [];
    var heroesProcesados = [];
    heroes.forEach((heroe) => {
      if (
        heroeBusqueda === "" ||
        heroe.nombre.toLowerCase().search(heroeBusqueda?.toLowerCase()) > -1
      ) {
        if (heroe.atributo === "Fuerza") {
          fuerza.push(heroe);
        } else if (heroe.atributo === "Agilidad") {
          agilidad.push(heroe);
        } else if (heroe.atributo === "Inteligencia") {
          inteligencia.push(heroe);
        }
      }
    });

    if (fuerza.length > 0) {
      heroesProcesados.push({
        atributo: textos[props.browserLanguage].fuerza,
        alt: "fuerza",
        icono: "Strength_attribute_symbol.webp",
        heroes: fuerza,
      });
    }

    if (agilidad.length > 0) {
      heroesProcesados.push({
        atributo: textos[props.browserLanguage].agilidad,
        alt: "agilidad",
        icono: "Agility_attribute_symbol.webp",
        heroes: agilidad,
      });
    }

    if (inteligencia.length > 0) {
      heroesProcesados.push({
        atributo: textos[props.browserLanguage].inteligencia,
        alt: "inteligencia",
        icono: "Intelligence_attribute_symbol.webp",
        heroes: inteligencia,
      });
    }

    setHeroesProcesados(heroesProcesados);
  }, [props, heroeBusqueda]);

  function busquedaHeroe(ev) {
    setHeroeBusqueda(ev.target.value);
  }

  return (
    <div className="heroes">
      <div className="buscador">
        <div className="buscador-titulo">
          {textos[props.browserLanguage].buscadorTitulo}
        </div>
        <input
          type="text"
          className="buscador-texto"
          onChange={busquedaHeroe}
        />
      </div>
      <div className="heroes-seccion">
        {heroesProcesados?.length === 0 && (
          <div className="buscador-sin-coincidencias">
            {textos[props.browserLanguage].buscadorNoCoincidencias}
          </div>
        )}
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
