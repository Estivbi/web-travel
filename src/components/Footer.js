import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
	<footer className="footer">
	  <p>
		Hecho con <span role="img" aria-label="corazón">❤️</span> por Carolina </p>
		<p>&copy; 2024 Highlands Travel. Todos los derechos reservados.</p>
      <p>
        <a href="/privacy-policy">Política de Privacidad</a> | <a href="/terms-of-service">Términos de Servicio</a>
      </p>
	</footer>
  )
}

export default Footer