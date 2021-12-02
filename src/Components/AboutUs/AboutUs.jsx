import React, {useState, useEffect} from 'react'
import s from './AboutUs.module.css'
import Loading from '../Loading/Loading'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
const AboutUs = () => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
       setTimeout(() => {
           setIsLoading(false)
       }, 2500); 
    })


    return (
      
       <main>
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
            <div className={s.containerQuestions}>
                <div className={s.containerQuestionsInside}>
                <h4 className={s.h4}><ArrowRightIcon />Preguntas sobre donaciones</h4>
                <div className={s.span}></div>
                <h4 className={s.h4}><ArrowRightIcon />Preguntas sobre nuestros proyectos</h4>
                <span className={s.span}></span>
                <h4 className={s.h4}><ArrowRightIcon />Preguntas sobre nuestras sedes</h4>
                <span className={s.span}></span>
                <h4 className={s.h4}><ArrowRightIcon  />Preguntas sobre los voluntariados</h4>
                <div className={s.containerLastParagraph}>
                    <div className={s.containerLastParam}>
                        <p className={s.lastP}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorem ex ipsam cum labore. Illo, natus perspiciatis corrupti ut maxime numquam est ipsum, debitis eveniet rerum velit veniam eum eius!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorem ex ipsam cum labore. Illo, natus perspiciatis corrupti ut maxime numquam est ipsum, debitis eveniet rerum velit veniam eum eius!
                        </p> 
                    </div>
                   
                </div> 
                </div>
                
            </div>
           </section>
           }
          

       </main>
       
     
            
      

           
        
    )
}

export default AboutUs
