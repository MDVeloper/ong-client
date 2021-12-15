import React from "react";
import {Link} from 'react-router-dom'
import s from './Footer.module.css'
import Fab from '@mui/material/Fab';

const Footer = () => {
  return (
    <div className={s.footerDark}>
        <footer className={s.containerFooter}>
            <div className={s.row}>

                <div className={s.filials} >
                    <h3>Direccion</h3>
                    <ul>
                        <li>Buenos aires, Argentina</li>
                        <li>Montevideo, Uruguay</li>
                        <li>Cordoba, Cordoba</li>
                    </ul>
                </div>

                <div className={s.filials}>
                    <h3>Contacto</h3>
                    <ul>
                        <li>codingforhelp@gmail.com</li>
                        <li>Telefono: 1879543216</li>
                    </ul>
                </div>

                <div className={s.filials}>
                    <Link style={{color:"#fff"}} to="/terminosYCondiciones">
                        <h3>Terminos y condiciones</h3>
                        <p>Lee sobre nuestros terminos</p>
                    </Link>
                </div>

                <div className={s.filials}>
                    <h3>Nuestras Redes</h3>
                    <ul className={s.socialImg}>
                        <li> <a href="https://twitter.com/home?lang=es"><img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter3_colored_svg-128.png" alt="" /> </a></li>
                        <li> <a href="https://www.facebook.com/"><img src="https://cdn1.iconfinder.com/data/icons/social-media-2285/512/Colored_Facebook3_svg-128.png" alt="" /> </a></li>
                        <li> <a href="https://www.instagram.com/"><img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-128.png" alt="" /> </a></li>
                        <li> <a href="https://www.youtube.com/"><img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Youtube_colored_svg-128.png" alt="" /> </a></li>
                        <li> <a href="https://www.linkedin.com/"><img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-128.png" alt="" /> </a></li>
                        <li> <a href="https://web.whatsapp.com/"><img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Whatsapp2_colored_svg-128.png" alt="" /> </a></li>
                    </ul>
                </div>
                
            </div>
            
            <div className={s.containerButtonDoneteAndOthers}>
                <Fab className={s.btnFooter} aria-label="add">
                    <Link style={{color:"#000"}} to="/donaciones">
                        Dona
                    </Link>
                </Fab>
                <p className={s.copyright}>Coding For Help 2021</p>
            </div>

        </footer>
    </div>
  );
};

export default Footer;
