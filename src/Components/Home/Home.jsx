import React from "react";
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button'
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import Carousel from "../Carrusel/Carousel"
import s from './Home.module.css'


export default function Home() {

  return (
    <div>
      

        <section className={s.mainContainer}>
           <div>
           <Button variant="contained" size="large" className={s.btn}  aria-label="add">Apoya la causa</Button>
            <Button variant="contained" size="large" className={s.btn} aria-label="add">Ser Voluntario</Button>
           </div>
           
        </section>
        <br/>
        <div>
            ACA VAN A IR LAS ESTADISTICAS
        </div>
                <br/>
        <div>
          <Carousel/>
        </div>
      <section className={s.wrapperVolunteerDonation}>
        <div className={s.containerVolunteer}>
          <div className={s.containerVolunteerText}>
            <h3>
              Manos a la obra
            </h3>
            <p>
              Para poder ayudar no solamente es necesaria tu donacion sino que te podes sumar a nuestro equipo manos a la obra
            </p>
          </div>
        </div>

        <div className={s.containerDonation}>
          <div className={s.containerDonationText}>
            <h3>Entre todos</h3>
            <p>
              Podes acercarte a cualquiera de nuestro puntos y acercarnos tu donacion para compartir tu estilo de vida
            </p>
          </div>
        </div>
      </section>

<section className={s.containerQuestionAbout}>
     <div>
       
        <Link to='/aboutUs'>
        <Fab variant="extended" className={s.btn} aria-label="add">
  <NavigationIcon sx={{ mr: 1 }} />
  Sobre Nosotros
</Fab>
        </Link>
    </div>
    <div>
       
        <Fab variant="extended" className={s.btn} aria-label="add">
  <NavigationIcon sx={{ mr: 1 }} />
  Preguntas frecuentes
</Fab>
    </div>
</section>
   



      
    </div>
  );
}
