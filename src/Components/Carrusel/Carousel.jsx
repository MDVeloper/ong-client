import React from "react";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Carousel.css";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";

export default function Carousel() {
  let projects = useSelector((state) => state.project.projects);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 4000
  };


  
  return (
    <div className={"container"}>
      {projects.length > 0 && (
        <div className={"containerCard"}>
          <h1> Galeria de proyectos </h1>

          <div className={"sliderContainer"}>
            <Slider {...settings}>
              {projects.map((data) => {
                return (
                  <div key={data.id} className={"cardProjectContainer"}>
                    <div className={"imgProjectContainer"}>
                      <img src={data.img} alt="" />
                    </div>
                    <div className={"titleDescriptionContainer"}>
                      <h2>{data.nameProject}</h2>
                      <p>{data.description}</p>
                    </div>

                    <Link to={`/proyectos/${data.id}`}>
            
                      <Button variant="outlined" style={{ color: "#FF9F1C", borderColor:"#FF9F1C", margin:".2rem .5rem 0 .5rem", fontSize:".8rem"}}>
                        Saber mas
                      </Button>
                    </Link>
                  </div>
                );
              })}
            </Slider>

            <Link to="/proyectos" style={{ color: "#fff" }}>
              <Button
                variant="contained"
                style={{ marginTop: "2rem", background: "#FF9F1C" }}
              >
                Ver todos
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
