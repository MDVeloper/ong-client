import React from "react";
import { Link } from "react-router-dom"; 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css"

export default function Carousel() {
  const dataAux = [
    {
      img: "https://images.pexels.com/photos/10260685/pexels-photo-10260685.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      nameProyect: "Proyecto",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt optio cumque totam quas delectus quo saepe ipsa corporis ullam! Consectetur.",
      id: 1,
    },
    {
      img: "https://images.pexels.com/photos/9980612/pexels-photo-9980612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      nameProyect: "Proyecto",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt optio cumque totam quas delectus quo saepe ipsa corporis ullam! Consectetur.",
      id: 2,
    },
    {
      img: "https://images.pexels.com/photos/10001433/pexels-photo-10001433.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      nameProyect: "Proyecto",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt optio cumque totam quas delectus quo saepe ipsa corporis ullam! Consectetur.",
      id: 3,
    },
    {
      img: "https://images.pexels.com/photos/9969346/pexels-photo-9969346.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      nameProyect: "Proyecto",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt optio cumque totam quas delectus quo saepe ipsa corporis ullam! Consectetur.",
      id: 4,
    },
    {
      img: "https://images.pexels.com/photos/9412345/pexels-photo-9412345.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      nameProyect: "Proyecto",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt optio cumque totam quas delectus quo saepe ipsa corporis ullam! Consectetur.",
      id: 5,
    },
    {
      img: "https://images.pexels.com/photos/1423066/pexels-photo-1423066.png?auto=compress&cs=tinysrgb&dpr=1&w=500",
      nameProyect: "Proyecto",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt optio cumque totam quas delectus quo saepe ipsa corporis ullam! Consectetur.",
      id: 6,
    },
    {
      img: "https://images.pexels.com/photos/9937724/pexels-photo-9937724.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      nameProyect: "Proyecto",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt optio cumque totam quas delectus quo saepe ipsa corporis ullam! Consectetur.",
      id: 7,
    },
    {
      img: "https://images.pexels.com/photos/1460537/pexels-photo-1460537.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      nameProyect: "Proyecto",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt optio cumque totam quas delectus quo saepe ipsa corporis ullam! Consectetur.",
      id: 8,
    },
    {
      img: "https://images.pexels.com/photos/1460173/pexels-photo-1460173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      nameProyect: "Proyecto",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt optio cumque totam quas delectus quo saepe ipsa corporis ullam! Consectetur.",
      id: 9,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className={"container"}>

      <h1> Galeria de proyectos </h1>

      <div className={"sliderContainer"}>
        <Slider {...settings} >
            {dataAux.map((data) => {
              return (
                <div key={data.id} className={"cardProyectContainer"}>
                  <Link to={`/proyects/${data.id}`}>
                    <div className={"imgProyectContainer"}>
                      <img src={data.img} alt="" />
                    </div>
                    <div className={"titleDescriptionContainer"}>
                      <h2>{data.nameProyect}</h2>
                      <p >{data.description}</p>
                    </div>
                  </Link>
                </div>
              );
            })}

        </Slider>
      </div>

    </div>
  );
}
