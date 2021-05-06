import React, { useEffect } from "react";
import heroes from "./data/heroes.js";
import images from "./images";

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
        <h1>¡Bienvenido a Dota timers!</h1>
        <p>
          Utilizar resta aplicación es muy sencillo. Primero deberás seleccionar
          los heroes del equipo oponente.
        </p>
        <p>
          Durante el partido, verás las habilidades con cooldown más relevantes.
          Presionándolas, iniciará el cooldown y podrás seguir fácilmente si ya
          está disponible para cada nivel de la habilidad.
        </p>
        <p>
          Podrás además indicar cuándo el equipo oponente mata a Roshan y
          asignarle BKB o Refresher Orb a cualquier héroe para monitorear sus
          cooldowns.
        </p>
        <p>
          Te recomendamos dejar tu celular al costado de tu teclado y siempre
          desbloqueado de manera de poder acceder rápidamente a los botones
        </p>
        <div
          className="boton-texto centrado boton-comenzar"
          onClick={() => {
            props.irASeccion("draft");
          }}
        >
          Ir al draft
        </div>
      </div>
    </div>
  );
}
