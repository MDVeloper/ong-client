import React from "react";
import {Link} from 'react-router-dom';
// import Button from '@mui/material/Button'
// import Fab from '@mui/material/Fab';
//import NavigationIcon from '@mui/icons-material/Navigation';
import Carousel from "../Carrusel/Carousel"
import s from './Home.module.css'
import Statistics from "../Statistics/Statistics";


export default function Home() {
  return (
    <div>
      <section className={s.mainContainer}>
        <div className={s.containerTitle}>
          <h1>Donde la tecnología y las personas se unen para ayudar.</h1>
        </div>

        <div className={s.btnContainer}>
          <Link to="/donaciones">
            <button className={s.btn1}>Apoya la causa</button>
          </Link>

          <Link to="/voluntariado">
            <button className={s.btn2}>Ser Voluntario</button>
          </Link>

        </div>
      </section>
      
      <Statistics />

      <div className={s.carouselContainer}>
        <Carousel/>
      </div>


      <section className={s.wrapperVolunteerDonation}>
        <div className={s.containerVolunteer}>
          <div className={s.containerVolunteerText}>
            <h3>MANOS A LA OBRA</h3>
            <p>
              No siempre uno quiere ayudar de manera monetaria y siempre se necesitan personas para colaborar en los nuevos proyectos, ¿Te queres sumar a la comunidad de manos a la obra?
            </p>
            <Link to="/voluntariado"><button className={s.btnVolunteer}>Voluntariado</button></Link>
          </div>
        </div>
        <div className={s.containerDonation}>
          <div className={s.containerDonationText}>
            <h3>ENTRE TODOS</h3>
            <p>
              Aquellos tesoros que no pueden seguir con nosotros encuentran su nuevo hogar con personas que las necesitan ¡Conocé como podes donar en las diferentes sedes de la ong!
            </p>
            <Link to="/donaciones"><button className={s.btnDonation}>Como donar</button></Link>
          </div>
        </div>
      </section>


      <section className={s.containerQuestionAbout}>
       <div className={s.container1}>
            <h3>CONOCE SOBRE NUESTROS CURSOS</h3>
            <p>En Coding To Help no solo nos gusta ayudar si no que también capacitar para que todos tengan oportunidades de seguir avanzando en su vida con la ayuda de profesionales en el área.</p>
            
          <Link to="/courses">
            {/* <Fab variant="extended" className={s.btn} aria-label="add">
              <NavigationIcon sx={{ mr: 1 }} />
              Sobre Nosotros
            </Fab> */}
            <button>Ir a cursos</button>

          </Link>
        </div>
        <div className={s.container2}>
          <h3>CONOCE MAS DE NOSOTROS</h3>
          <p>¿Que es Coding To Help? ¿Cual es su misión? ¿Quienes están detrás? Todas las dudas que tengas para conocernos mejor están en el apartado de preguntas y respuestas</p>
          <Link to="/aboutUs">
            {/* <Fab variant="extended" className={s.btn} aria-label="add">
              <NavigationIcon sx={{ mr: 1 }} />
              Preguntas frecuentes
            </Fab> */}
            <button>Ir a preguntas frecuentes </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
