import { React } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  EffectCube ,
} from 'swiper';
import 'swiper/swiper-bundle.css';
import style from './Filials.Module.css';
import dataFilials from './dataFilials';

SwiperCore.use([Navigation, Pagination, Autoplay, EffectCube ]);




export default function Filiales() {

    const showSlides = () =>
      dataFilials?.map((slide, index) => (
        <SwiperSlide key={index} tag="li">
            <div className={style.slideContainer}>
            <img className={style.slideImege} src={slide.img} />
            <div className={style.slideContainer2}>
                <h2>Filial: {slide.zonaName}</h2>
                <h4>Tel.: {slide.telefono}</h4>
                <h4>Dir.: {slide.direccion}</h4>
                <h4>Localidad: {slide.localidad}</h4>
                <h4>Email: {slide.email}</h4>
                <h4>Responsable: {slide.responsable}</h4>
            </div>
            </div>
        </SwiperSlide>
        ));

    return (
        <>
        <Swiper
            navigation
            pagination
            autoplay={{ delay: 3000 }}
            effect={'cube'}
            id="main"
            slidesPerView={1}
            speed={2000}
            spaceBetween={0}
            tag="section"
            wrapperTag="ul"
            onInit={(swiper) => console.log('Swiper initialized')}>
            {showSlides()}
        </Swiper>
        </>

//   return (
//     <>
//       <div className={Styles.projectsContainer}>
//         <h1>Nuestras Cedes</h1>

//         <h3>
//           ¡Podes venir a la mas cercana y solicitar mas información!
//         </h3>

//         {
//           dataFilials.map((project, index) => (
//             <div
//                 className={Styles.cardContainer}
//                 // style={{ backgroundImage: `url(${project.img})`}}
//                 key={project.index}
//               >
//               <div className={Styles.blackEffect}>
              
//                   <div className={Styles.containerDescriptionAndTitle}>
//                     <h2>{project.zonaName}</h2>
//                     <h4>{project.telefono}</h4>
//                     <h4>{project.direccion}</h4>
//                     <h4>{project.localidad}</h4>
//                     <h4>{project.email}</h4>
//                     <h4>{project.responsable}</h4>
//                   </div>
//               </div>
//             </div>
//           ))
//         }
//         </div>
//     </>
   );
}
