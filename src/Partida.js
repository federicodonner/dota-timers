import React, { useState, useEffect } from "react";
import HeroePartida from "./HeroePartida";
import images from "./images";
import textos from "./data/textos";
import "./Partida.css";

export default function Partida(props) {
  const [roshanCorriendo, setRoshanCorriendo] = useState(false);
  const [cooldownAegis] = useState(300);
  const [cooldownRoshan] = useState([480, 660]);
  const [tiempoTranscurridoRoshan, setTiempoTranscurridoRoshan] = useState(0);

  useEffect(() => {
    if (roshanCorriendo) {
      var timerRoshan = setInterval(() => {
        setTiempoTranscurridoRoshan(tiempoTranscurridoRoshan + 1);
      }, 1000);
    } else {
      setTiempoTranscurridoRoshan(0);
    }
    return () => {
      clearInterval(timerRoshan);
    };
  }, [roshanCorriendo, tiempoTranscurridoRoshan]);

  useEffect(() => {
    if (
      cooldownAegis &&
      cooldownRoshan &&
      tiempoTranscurridoRoshan >= cooldownAegis &&
      tiempoTranscurridoRoshan >= cooldownRoshan[0] &&
      tiempoTranscurridoRoshan >= cooldownRoshan[1]
    ) {
      setRoshanCorriendo(false);
    }
  }, [tiempoTranscurridoRoshan, cooldownAegis, cooldownRoshan]);

  function convertirTiempo(segundos) {
    if (segundos <= 60) {
      return "0:" + segundos;
    }

    if (segundos % 60 <= 9 && segundos % 60 !== 0) {
      return (segundos - (segundos % 60)) / 60 + ":0" + (segundos % 60);
    }

    if (segundos % 60 === 0) {
      return (segundos - (segundos % 60)) / 60 + ":00";
    }

    return (segundos - (segundos % 60)) / 60 + ":" + (segundos % 60);
  }

  return (
    <div className="partida">
      <div className="heroes-partida-container">
        {props.draft.map((heroe) => {
          return (
            <HeroePartida
              heroe={heroe}
              browserLanguage={props.browserLanguage}
              key={heroe.alt}
            />
          );
        })}
      </div>
      <div className="roshan-container">
        {!roshanCorriendo && (
          <>
            <div className="aegis">
              <img
                src={images.aegis}
                className="elemento aegis-boton"
                alt="aegis"
                onClick={() => {
                  setRoshanCorriendo(true);
                }}
              />
            </div>
            <div
              className="boton-texto boton-reset"
              onClick={() => {
                props.irASeccion("portada");
              }}
            >
              {textos[props.browserLanguage].botonTerminarPartida}
            </div>
          </>
        )}
        {roshanCorriendo && (
          <>
            <div className="aegis-activa-componente">
              <img
                src={images.aegis}
                className={
                  cooldownAegis - tiempoTranscurridoRoshan >= 1
                    ? "aegis-imagen en-cooldown"
                    : "aegis-imagen"
                }
                alt="aegis-imagen"
              />
              {cooldownAegis - tiempoTranscurridoRoshan >= 1 && (
                <div className="tiempo-restante-aegis">
                  {convertirTiempo(cooldownAegis - tiempoTranscurridoRoshan)}
                </div>
              )}
            </div>
            <div className="aegis-activa-componente">
              <img
                src={images.roshan}
                className={
                  cooldownRoshan[0] - tiempoTranscurridoRoshan >= 1
                    ? "aegis-imagen en-cooldown"
                    : "aegis-imagen"
                }
                alt="aegis-imagen"
              />
              {cooldownRoshan[0] - tiempoTranscurridoRoshan >= 1 && (
                <div className="tiempo-restante-aegis">
                  {convertirTiempo(
                    cooldownRoshan[0] - tiempoTranscurridoRoshan
                  )}
                </div>
              )}
            </div>
            <div className="aegis-activa-componente">
              <img
                src={images.roshan}
                className={
                  cooldownRoshan[1] - tiempoTranscurridoRoshan >= 1
                    ? "aegis-imagen en-cooldown"
                    : "aegis-imagen"
                }
                alt="aegis-imagen"
              />
              {cooldownRoshan[1] - tiempoTranscurridoRoshan >= 1 && (
                <div className="tiempo-restante-aegis">
                  {convertirTiempo(
                    cooldownRoshan[1] - tiempoTranscurridoRoshan
                  )}
                </div>
              )}
            </div>
            <div
              className="boton-texto boton-reset"
              onClick={() => {
                setRoshanCorriendo(false);
              }}
            >
              {textos[props.browserLanguage].botonResetAegis}
            </div>
          </>
        )}
      </div>
      <div className="seccion-reiniciar"></div>
    </div>
  );
}
