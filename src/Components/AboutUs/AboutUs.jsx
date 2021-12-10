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
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis soluta dolor error, quo, eveniet, corporis cupiditate consectetur rem maxime sit quibusdam et facere aliquid! Sequi dolore unde quidem maiores similique.
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis soluta dolor error, quo, eveniet, corporis cupiditate consectetur rem maxime sit quibusdam et facere aliquid! Sequi dolore unde quidem maiores similique.
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis soluta dolor error, quo, eveniet, corporis cupiditate consectetur rem maxime sit quibusdam et facere aliquid! Sequi dolore unde quidem maiores similique.
               </p>
               <p className={s.p}>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis soluta dolor error, quo, eveniet, corporis cupiditate consectetur rem maxime sit quibusdam et facere aliquid! Sequi dolore unde quidem maiores similique.
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis soluta dolor error, quo, eveniet, corporis cupiditate consectetur rem maxime sit quibusdam et facere aliquid! Sequi dolore unde quidem maiores similique.
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis soluta dolor error, quo, eveniet, corporis cupiditate consectetur rem maxime sit quibusdam et facere aliquid! Sequi dolore unde quidem maiores similique.
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis soluta dolor error, quo, eveniet, corporis cupiditate consectetur rem maxime sit quibusdam et facere aliquid! Sequi dolore unde quidem maiores similique.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>¿Como puedo saber a donde va mi donación?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
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
