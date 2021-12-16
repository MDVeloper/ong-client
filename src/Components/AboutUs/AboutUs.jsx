import React, {useState, useEffect} from 'react'
import s from './AboutUs.module.css'
import Loading from '../Loading/Loading'
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
const AboutUs = () => {
    const Accordion = styled((props) => (
        <MuiAccordion disableGutters elevation={0} square {...props} />
      ))(({ theme }) => ({
        borderTop: `1px solid ${theme.palette.divider}`,
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "0.5rem",
        backgroundColor: "transparent",
        "&:not(:last-child)": {
          borderBottom: 0,
        },
        "&:before": {
          display: "none",
        },
      }));
    
      const AccordionSummary = styled((props) => (
        <MuiAccordionSummary {...props} />
      ))(({ theme }) => ({
        flexDirection: "row-reverse",
        justifyContent: "center",
        marginTop: "0.5rem",
        "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
          transform: "rotate(90deg)",
        },
        "& .MuiAccordionSummary-content": {
          marginLeft: theme.spacing(1),
        },
      }));
    
      const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
        padding: theme.spacing(2),
        borderTop: "1px solid rgba(0, 0, 0, .125)",
      }));
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
       setTimeout(() => {
           setIsLoading(false)
       }, 2500);
    })


    return (
      
       <main className={s.main}>
           {isLoading===true ? <Loading /> 
           :
           <section>
           <div className={s.containerTitle}>
                <h1 className={s.title}>
                    SOBRE CODING TO HELP
                </h1>
           </div>
           <div className={s.containerParagraph}>
               <div className={s.containerP}>
                 <p className={s.p}>
                  Coding to help nació con un pequeño grupo de alumnos que quería utilizar lo que estaban aprendiendo para poder ayudar a los demás ¿Por que no poder utilizar las nuevas tecnologías de desarrollo para mejorar la situación de muchas personas alrededor del país? Nuestra misión final es lograr que eso se haga realidad.
               </p>
               <p className={s.p}>
                  Nos dedicamos a brindar ayuda a todo el país, reunimos donaciones para apoyar diferentes sectores, brindamos cursos y capacitaciones de manera gratuita a mano de expertos en el área que deciden donar sus conocimientos para brindar nuevas oportunidades a aquellos que lo necesiten, compartimos y damos exposición a noticias de interes. Siempre estamos en crecimiento buscando nuevos colaboradores y voluntarios, te recomendamos mirar las preguntas frecuentes para descubrir las diferentes formas de ayudar.
               </p>  
               </div>
               
            </div>
            <div className={s.containerQuestionsTitle}>
                <h3 className={s.Subtitle}>
                    PREGUNTAS Y RESPUESTAS
                </h3>
            </div>
            <div className={s.box_preguntasFrecuentes_container}>
                <Accordion>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>¿Que medios de pago aceptan?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Para donaciones monetarias contamos con las plataformas Paypal y Mercado Pago, cada una con sus diferentes formas de pago.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                ¿Como puedo ayudar de manera no monetaria?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Hay diferentes maneras, podes acercarte a las diferentes filiales para poder dejar tus donaciones, también está nuestro programa MANOS A LA OBRA en el cual podés participar siendo voluntario dando click <a href='/voluntariado'>aquí</a>, en donde no solo podes colaborar en diferentes proyectos si no que también podes ofrecerte para dictar un curso, ¡Toda ayuda es bienvenida!
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>¿Como puedo votar por proyectos?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                La votación es exclusiva para aquellos que se registraron, es una forma de que la comunidad apoye aquellos proyectos en los que les gustaría participar.
              </Typography>
            </AccordionDetails>
          </Accordion>
            </div>
            
           </section>
           }
          

       </main>
       
     
            
      

           
        
    )
}

export default AboutUs
