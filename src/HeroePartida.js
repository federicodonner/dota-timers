import React, { useState, useEffect } from "react";
import images from "./images";
import textos from "./data/textos";
import "./HeroePartida.css";

export default function HeroePartida(props) {
  // Variable que mide el tiempo restante de la habilidad
  const [cooldownHabilidad, setCooldownHabilidad] = useState(
    props.heroe.habilidad?.cooldowns
  );

  const [
    tiempoTranscurridoHabilidad,
    setTiempoTranscurridoHabilidad,
  ] = useState(0);

  const [tiempoTranscurridoBkb, setTiempoTranscurridoBkb] = useState(0);

  const [habilidadCorriendo, setHabilidadCorriendo] = useState(false);

  const [bkbCorriendo, setBkbCorriendo] = useState(false);
  const [cooldownBkb, setCooldownBkb] = useState(75);

  const [mostrarCDItem, setMostrarCDItem] = useState(false);
  const [cdItem, setCDItem] = useState([null, 1]);

  useEffect(() => {
    if (habilidadCorriendo) {
      var timerHabilidad = setInterval(() => {
        setTiempoTranscurridoHabilidad(tiempoTranscurridoHabilidad + 1);
      }, 1000);
    } else {
      setTiempoTranscurridoHabilidad(0);
    }
    return () => {
      clearInterval(timerHabilidad);
    };
  }, [habilidadCorriendo, tiempoTranscurridoHabilidad]);

  useEffect(() => {
    if (
      cooldownHabilidad &&
      tiempoTranscurridoHabilidad >= cooldownHabilidad[0] &&
      tiempoTranscurridoHabilidad >= cooldownHabilidad[1] &&
      tiempoTranscurridoHabilidad >= cooldownHabilidad[2]
    ) {
      setHabilidadCorriendo(false);
    }
  }, [tiempoTranscurridoHabilidad, cooldownHabilidad]);

  useEffect(() => {
    if (bkbCorriendo) {
      var timerBkb = setInterval(() => {
        setTiempoTranscurridoBkb(tiempoTranscurridoBkb + 1);
      }, 1000);
    } else {
      setTiempoTranscurridoBkb(0);
    }
    return () => {
      clearInterval(timerBkb);
    };
  }, [bkbCorriendo, tiempoTranscurridoBkb]);

  useEffect(() => {
    if (cooldownBkb && tiempoTranscurridoBkb >= cooldownBkb) {
      setBkbCorriendo(false);
    }
  }, [tiempoTranscurridoBkb, cooldownBkb]);

  useEffect(() => {
    setCooldownHabilidad([
      Math.round(props.heroe.habilidad?.cooldowns[0] * cdItem[1]),
      Math.round(props.heroe.habilidad?.cooldowns[1] * cdItem[1]),
      Math.round(props.heroe.habilidad?.cooldowns[2] * cdItem[1]),
    ]);
    setCooldownBkb(Math.round(75 * cdItem[1]));
  }, [cdItem, props.heroe.habilidad]);

  return (
    <>
      <div className="heroe-partida">
        <div className="elemento-heroe-partida elemento-habilidad">
          {props.heroe.habilidad && (
            <>
              {!habilidadCorriendo && (
                <img
                  className="heroe-partida-habilidad elemento"
                  src={images[props.heroe.habilidad.alt]}
                  alt={props.heroe.habilidad.alt}
                  onClick={() => {
                    setHabilidadCorriendo(true);
                  }}
                />
              )}
              {habilidadCorriendo && (
                <div
                  className="habilidades-cooldowns-container"
                  onClick={() => {
                    setHabilidadCorriendo(false);
                  }}
                >
                  {props.heroe.habilidad.nombres[props.browserLanguage].map(
                    (nombre, index) => {
                      return (
                        <div className="habilidades-cooldown" key={index}>
                          <div className="habilidades-cooldown-nombre">
                            {nombre}
                          </div>
                          <div className="habilidades-cooldown-habilidad">
                            <img
                              className={
                                cooldownHabilidad[index] -
                                  tiempoTranscurridoHabilidad <=
                                1
                                  ? "habilidades-cooldown-imagen"
                                  : "habilidades-cooldown-imagen en-cooldown"
                              }
                              src={images[props.heroe.habilidad.alt]}
                              alt={props.heroe.habilidad.alt}
                            />
                            {cooldownHabilidad[index] -
                              tiempoTranscurridoHabilidad >=
                              1 && (
                              <div className="tiempo-restante">
                                {cooldownHabilidad[index] -
                                  tiempoTranscurridoHabilidad}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              )}
            </>
          )}
        </div>
        {!habilidadCorriendo && (
          <div className="elemento-cd">
            {mostrarCDItem && (
              <div className="cd-item-selector">
                <img
                  className="cd-item-imagen elemento"
                  src={images.octarinecore}
                  alt="octarinecore"
                  onClick={() => {
                    setCDItem(["octarinecore", 0.75]);
                    setMostrarCDItem(false);
                  }}
                />
                <img
                  className="cd-item-imagen elemento"
                  src={images.quickeningcharm}
                  alt="quickeningcharm"
                  onClick={() => {
                    setCDItem(["quickeningcharm", 0.88]);
                    setMostrarCDItem(false);
                  }}
                />
                <img
                  className="cd-item-imagen elemento"
                  src={images.spellprism}
                  alt="spellprism"
                  onClick={() => {
                    setCDItem(["spellprism", 0.82]);
                    setMostrarCDItem(false);
                  }}
                />
                <img
                  className="cd-item-imagen elemento"
                  src={images.arcaneblink}
                  alt="arcaneblink"
                  onClick={() => {
                    setCDItem(["arcaneblink", 0.7]);
                    setMostrarCDItem(false);
                  }}
                />
                <div
                  className="boton-texto boton-no-item"
                  onClick={() => {
                    setCDItem([null, 1]);
                    setMostrarCDItem(false);
                  }}
                >
                  X
                </div>
              </div>
            )}
            {cdItem[0] === null && (
              <div
                className="boton-texto boton-mostrar-cd"
                onClick={() => {
                  setMostrarCDItem(true);
                }}
              >
                {textos[props.browserLanguage].botonCDItems}
              </div>
            )}
            {cdItem[0] !== null && (
              <img
                className="heroe-partida-item elemento"
                src={images[cdItem[0]]}
                alt={images[cdItem[0]]}
                onClick={() => {
                  setMostrarCDItem(true);
                }}
              />
            )}
          </div>
        )}
        <div className="elemento-heroe-partida elemento-retrato">
          <img
            className="heroe-partida-heroe"
            src={images[props.heroe.alt]}
            alt={props.heroe.alt}
          />
          <div
            className="heroe-partida-item elemento"
            onClick={() => {
              setBkbCorriendo(!bkbCorriendo);
            }}
          >
            {bkbCorriendo && (
              <div className="tiempo-restante">
                {cooldownBkb - tiempoTranscurridoBkb}
              </div>
            )}
            <img
              src={images.bkb}
              alt="bkb"
              className={
                bkbCorriendo
                  ? "imagen-item imagen-bkb en-cooldown"
                  : "imagen-item imagen-bkb"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
