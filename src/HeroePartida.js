import React, { useState, useEffect } from "react";
import images from "./images";
import "./HeroePartida.css";

export default function HeroePartida(props) {
  // Variable que mide el tiempo restante de la habilidad
  const [tiempoRestante, setTiempoRestante] = useState(
    props.heroe.habilidad?.cooldowns
  );

  const [habilidadCorriendo, setHabilidadCorriendo] = useState(false);

  const [bkbCorriendo, setBkbCorriendo] = useState(false);
  const [tiempoRestanteBkb, setTiempoRestanteBkb] = useState(75);

  // En cada tick del timer verifica que haya terminado el cooldown
  useEffect(() => {
    if (habilidadCorriendo) {
      setTimeout(() => {
        setTiempoRestante([
          tiempoRestante[0] - 1 >= 0 ? tiempoRestante[0] - 1 : 0,
          tiempoRestante[1] - 1 >= 0 ? tiempoRestante[1] - 1 : 0,
          tiempoRestante[2] - 1 >= 0 ? tiempoRestante[2] - 1 : 0,
        ]);
      }, 1000);

      if (
        tiempoRestante &&
        tiempoRestante[0] <= 0 &&
        tiempoRestante[1] <= 0 &&
        tiempoRestante[2] <= 0
      ) {
        setHabilidadCorriendo(false);
      }
    } else {
      setTiempoRestante(props.heroe.habilidad?.cooldowns);
    }
  }, [props.heroe, habilidadCorriendo, tiempoRestante]);

  // En cada tick del timer verifica que haya terminado el cooldown
  useEffect(() => {
    if (bkbCorriendo) {
      setTimeout(() => {
        setTiempoRestanteBkb(tiempoRestanteBkb - 1);
      }, 1000);

      if (tiempoRestanteBkb && tiempoRestanteBkb <= 1) {
        setBkbCorriendo(false);
      }
    } else {
      setTiempoRestanteBkb(75);
    }
  }, [props.heroe, bkbCorriendo, tiempoRestanteBkb]);

  return (
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
              <div className="habilidades-cooldowns-container">
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
                              tiempoRestante[index] <= 1
                                ? "habilidades-cooldown-imagen"
                                : "habilidades-cooldown-imagen en-cooldown"
                            }
                            src={images[props.heroe.habilidad.alt]}
                            alt={props.heroe.habilidad.alt}
                          />
                          {tiempoRestante[index] >= 1 && (
                            <div className="tiempo-restante-bkb">
                              {tiempoRestante[index]}
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
      <div className="elemento-heroe-partida elemento-retrato">
        <img
          className="heroe-partida-heroe"
          src={images[props.heroe.alt]}
          alt={props.heroe.alt}
        />
        <div
          className="heroe-partida-bkb elemento"
          onClick={() => {
            setBkbCorriendo(true);
          }}
        >
          {bkbCorriendo && (
            <div className="tiempo-restante-bkb">{tiempoRestanteBkb}</div>
          )}
          <img
            src={images.bkb}
            alt="bkb"
            className={bkbCorriendo ? "imagen-bkb en-cooldown" : "imagen-bkb"}
          />
        </div>
      </div>
    </div>
  );
}
