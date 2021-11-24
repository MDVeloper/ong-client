import React from "react";
import {Link} from 'react-router-dom';

import s from './Home.module.css'
export default function Home() {

  return (
    <div>
      <div>ESPACIO PARA NAVBAR</div>

        <section className={s.mainContainer}>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Esse molestiae eius soluta praesentium doloremque necessitatibus 
            porro bus beatae omnis est quod odit!</p>
            <button>Apoya la Causa</button>
            <button>Ser Voluntario</button>
        </section>
        <br/>
        <div>
            ACA VAN A IR LAS ESTADISTICAS
        </div>
                <br/>
        <div>
            ACA VA A IR El CARROUSEL
        </div>
      <section className={s.wrapperVolunteerDonation}>
        <div className={s.containerVolunteer}>
          <div>
            <h3>Titulo</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
              aliquam quibusdam.
            </p>
          </div>
        </div>

        <div className={s.containerDonation}>
          <div>
            <h3>Titulo</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
              aliquam quibusdam.
            </p>
          </div>
        </div>
      </section>

<section className={s.containerQuestionAbout}>
     <div className={s.containerAbout}>
        <p>Conoce mas sobre Nosotros</p>
        <p>Texto Descriptivo</p>
        <Link to='/aboutUs'>
        <button>
            Ir a About us
        </button>
        </Link>
    </div>
    <div className={s.containerQuestion}>
        <p>Preguntas Frecuentes</p>
        <p>Texto Descriptivo</p>
        <button>
            Ir a Preguntas Frecuentes
        </button>
    </div>
</section>
   



      
    </div>
  );
}
