import React from "react";

const Footer = () => {
  return (
    <div>
      <div>
        <h3>Direccion</h3> {/** Agregar icono de Pines **/}
        <p>Buenos aires, Argentina</p>
        <p>Cordoba, Cordoba</p>
        <p>Montevideo, Uruguay</p>
        <p>Mendoza, Mendoza</p>
      </div>
      <div>
        <h3>Contacto</h3>
        <h4>Telefono :  <span>784563423</span></h4> {/** Agregar icono de Telefono **/}
        <p>codingtohelp@codingtohelp.com</p> {/** Agregar icono de Email **/}
      </div>
      <div>
        <h3>Contacto para prensa y terminos legales</h3>
      </div>
      <div>
        <button>Dona</button> {/** Agregar icono de Redes sociales **/}
        <div>IG</div>
        <div>FB</div>
        <div>TW</div>
      </div>
    </div>
  );
};

export default Footer;
