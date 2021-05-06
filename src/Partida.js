import React, { useState, useEffect } from "react";
import HeroePartida from "./HeroePartida";
import images from "./images";
import "./Partida.css";

export default function Partida(props) {
  const [roshanCorriendo, setRoshanCorriendo] = useState(false);
  const [tiempoRestanteAegis, setTiempoRestanteAegis] = useState(300);
  const [tiempoRestanteRoshan, setTiempoRestanteRoshan] = useState([480, 660]);

  useEffect(() => {
    if (roshanCorriendo) {
      setTimeout(() => {
        setTiempoRestanteAegis(tiempoRestanteAegis - 1);
      }, 1000);
      if (
        tiempoRestanteAegis <= 1 &&
        tiempoRestanteRoshan[0] <= 1 &&
        tiempoRestanteRoshan[1] <= 1
      ) {
        setRoshanCorriendo(false);
      }
    } else {
      setTiempoRestanteAegis(300);
      setTiempoRestanteRoshan([480, 660]);
    }
  }, [roshanCorriendo, tiempoRestanteAegis]);

  useEffect(() => {
    if (roshanCorriendo) {
      setTimeout(() => {
        setTiempoRestanteRoshan([
          tiempoRestanteRoshan[0] - 1,
          tiempoRestanteRoshan[1] - 1,
        ]);
      }, 1000);
    }
  }, [roshanCorriendo, tiempoRestanteRoshan]);

  function reiniciarTimers() {
    setRoshanCorriendo(false);
  }

  return (
    <div className="partida">
      <div className="heroes-partida-container">
        {props.draft.map((heroe) => {
          return <HeroePartida heroe={heroe} key={heroe.alt} />;
        })}
      </div>
      <div className="roshan-container">
        {!roshanCorriendo && (
          <div className="aegis">
            <img
              src={images.aegis}
              className="elemento"
              alt="aegis"
              onClick={() => {
                setRoshanCorriendo(true);
              }}
            />
          </div>
        )}
        {roshanCorriendo && (
          <>
            <div className="aegis-activa-componente">
              <img
                src={images.aegis}
                className={
                  tiempoRestanteAegis >= 1
                    ? "aegis-imagen en-cooldown"
                    : "aegis-imagen"
                }
                alt="aegis-imagen"
              />
              {tiempoRestanteAegis >= 1 && (
                <div className="tiempo-restante-aegis">
                  {tiempoRestanteAegis}
                </div>
              )}
            </div>
            <div className="aegis-activa-componente">
              <img
                src={images.roshan}
                className={
                  tiempoRestanteRoshan[0] >= 1
                    ? "aegis-imagen en-cooldown"
                    : "aegis-imagen"
                }
                alt="aegis-imagen"
              />
              {tiempoRestanteRoshan[0] >= 1 && (
                <div className="tiempo-restante-aegis">
                  {tiempoRestanteRoshan[0]}
                </div>
              )}
            </div>
            <div className="aegis-activa-componente">
              <img
                src={images.roshan}
                className={
                  tiempoRestanteRoshan[1] >= 1
                    ? "aegis-imagen en-cooldown"
                    : "aegis-imagen"
                }
                alt="aegis-imagen"
              />
              {tiempoRestanteRoshan[1] >= 1 && (
                <div className="tiempo-restante-aegis">
                  {tiempoRestanteRoshan[1]}
                </div>
              )}
            </div>
            <div className="boton-texto boton-reset" onClick={reiniciarTimers}>
              Reset
            </div>
          </>
        )}
      </div>
      <div className="seccion-reiniciar">
        <div
          className="boton-texto boton-reset"
          onClick={() => {
            props.irASeccion("portada");
          }}
        >
          Terminar partida
        </div>
      </div>
    </div>
  );
}
